import React, { useState, useContext } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import { Link,useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import './Header.css';
import { CartContext } from './CartContext';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {cart} = useContext(CartContext); 
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <div>
            <div className="top-bar">
                <p>14 DAYS RETURN POLICY | FREE DELIVERY</p>
                <div className="icons">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit"><FaSearch className="icon" /></button>
                    </form>
                    <Link to="/checkout">
                        <MdOutlineShoppingCart className="icon" />
                        <span className="cart-count">{cart.length}</span>
                    </Link>
                </div>
            </div>
            <header className="header">
                <div className="logo">Raja Mobiles</div>
                <nav className="nav-menu">
                    <Link to="/">Home</Link>
                    <Link to="/new">New</Link>
                    <Link to="/used-phones">Used Phones</Link>
                    <Link to="/new-arrival">New Arrivals</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <button className="hamburger" onClick={toggleSidebar} aria-label="Open menu">
                    ☰
                </button>
            </header>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar} aria-label="Close menu">
                    ×
                </button>
                <nav className="sidebar-nav">
                    <Link to="/" onClick={toggleSidebar}>Home</Link>
                    <Link to="/new" onClick={toggleSidebar}>New</Link>
                    <Link to="/used-phones" onClick={toggleSidebar}>Used Phones</Link>
                    <Link to="/new-arrival" onClick={toggleSidebar}>New Arrivals</Link>
                    <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
                </nav>
            </div>

            {/* Overlay */}
            <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
        </div>
    );
};

export default Header;