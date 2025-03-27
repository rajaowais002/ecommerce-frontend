import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from './CartContext';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';

const Checkout = () => {
    const { cart,updateQuantity } = useContext(CartContext);
    const [useDifferentBilling, setUseDifferentBilling] = useState(false);
    const productsToDisplay = cart;

    const handleBillingChange = (e) => {
        setUseDifferentBilling(e.target.value === 'different');
        setFormData({
            ...formData,
            billingAddress: e.target.value,
        });
    };
    // console.log(cart);

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        postalCode: '',
        phone: '',
        saveInfo: false,
        paymentMethod: 'cod',
        billingAddress: 'same',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'phone'];
        const isFormValid = requiredFields.every((field) => formData[field].trim() !== '');

        if (!isFormValid) {
            toast.error('Please fill all required fields.');
            return;
        }

        try {
            const orderData = {
                ...formData,
                cartItems: cart,
                orderTotal: cart.reduce((total, item) => {
                    const price = typeof item.saleprice === 'string' 
                        ? parseFloat(item.saleprice.replace(/,/g, '')) 
                        : item.saleprice;
                    return total + (price * item.quantity);
                }, 0)
            };
    
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
    
            if (response.ok) {
                const data = await response.json();
                toast.success('Order submitted successfully!');
                console.log(data);
            } else {
                toast.error('Failed to submit the order. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="checkout">
            <ToastContainer />
            {/* Left Column: Product Details */}
            <div className="product-summary">
                {productsToDisplay.length > 0 ? (
                    productsToDisplay.map((item) => (
                        <div key={item.id} className="product-item">
                            <h2>{item.name}</h2>
                            <p className="price">PKR {+item.saleprice * Number(item.quantity||1)}</p>
                            <div className="quantity-controls">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span>{item.quantity || 1}</span>
                                <button onClick={() => updateQuantity(item.id, Number(item.quantity||1) + 1)}>
                                    +
                                </button>
                            </div>
                            <p className="delivery-info">Free Delivery | 14 Days easy return & refund</p>
                            <div className="special-offer">
                                <h3>SPECIAL OFFER:</h3>
                                <ul>
                                    <li>FREE Tester</li>
                                    <li>FREE Premium Box</li>
                                    <li>FREE Perfume Shopper</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No product selected</p>
                )}
            </div>

            {/* Right Column: Delivery and Payment Form */}
            <div className="checkout-form">
                <h2>Contact</h2>
                <input
                    type="text"
                    name="email"
                    placeholder="Email or mobile phone number"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                    /> Email me with news and offers
                </label>

                <h2>Delivery</h2>
                <select name="country">
                    <option value="Pakistan">Pakistan</option>
                </select>
                <div className="name-fields">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="apartment"
                    placeholder="Apartment, suite, etc. (optional)"
                    value={formData.apartment}
                    onChange={handleChange}
                />
                <div className="city-postal">
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal code (optional)"
                        value={formData.postalCode}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <h2>Payment</h2>
                <label className="radio-label">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleChange}
                    /> Cash on Delivery (COD)
                </label>

                <h2>Billing Address</h2>
                <label className="radio-label">
                    <input
                        type="radio"
                        name="billingAddress"
                        value="same"
                        checked={formData.billingAddress === 'same'}
                        onChange={handleBillingChange}
                    />
                    Same as shipping address
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        name="billingAddress"
                        value="different"
                        checked={formData.billingAddress === 'different'}
                        onChange={handleBillingChange}
                    />
                    Use a different billing address
                </label>

                {useDifferentBilling && (
                    <div className="billing-address-form">
                        <h3>Use a different billing address</h3>
                        <select name="billingCountry">
                            <option value="Pakistan">Pakistan</option>
                        </select>
                        <div className="name-fields">
                            <input type="text" placeholder="First name" name="billingFirstName" onChange={handleChange} />
                            <input type="text" placeholder="Last name" name="billingLastName" onChange={handleChange} />
                        </div>
                        <input type="text" placeholder="Address" name="billingAddress" onChange={handleChange} />
                        <input type="text" placeholder="Apartment, suite, etc. (optional)" name="billingApartment" onChange={handleChange} />
                        <div className="city-postal">
                            <input type="text" placeholder="City" name="billingCity" onChange={handleChange} />
                            <input type="text" placeholder="Postal code (optional)" name="billingPostalCode" onChange={handleChange} />
                        </div>
                        <input type="text" placeholder="Phone (optional)" name="billingPhone" onChange={handleChange} />
                    </div>
                )}

                <button className="complete-order" onClick={handleSubmit}>
                    Complete Order
                </button>
            </div>
        </div>
    );
};

export default Checkout;
