import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetails.css';
import { CartContext } from './CartContext';

const ProductDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  
  const { newArrivals, products,usedPhones } = data;
  const product = newArrivals.find((p) => p.id === parseInt(id)) || products.find((p) => p.id === parseInt(id)) || usedPhones.find((p) => p.id === parseInt(id));

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };
  
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-page">
      <ToastContainer />
      <div className="product-details1">
        <img src={product.image} alt={product.name} className="product-image1" />
        <div className="product-info">
          <h1 className="product-name1">{product.name}</h1>
          <div className="product-prices">
            <span className="original-price">PKR {product.price}</span>
            <span className="sale-price">PKR {product.saleprice}</span>
          </div>
          <div className="shipping-info">
            <p>Free Delivery</p>
            <p>14 Days easy return & refund</p>
          </div>
          <div className="actions">
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            <button className="buy-now" onClick={handleBuyNow}>Buy it now</button>
          </div>
          <div className="special-offer">
            <h3>SPECIAL OFFER:</h3>
            <ul>
              <li>FREE Tester</li>
              <li>FREE Premium Box</li>
              <li>FREE Perfume Shopper</li>
            </ul>
          </div>
          <div className="product-description">
            <h3>DESCRIPTION</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;