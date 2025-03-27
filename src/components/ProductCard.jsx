import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css'
const ProductCard = ({ product }) => {
    return (
        <div className="product-card-second">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </Link>
        </div>
    );
};

export default ProductCard;