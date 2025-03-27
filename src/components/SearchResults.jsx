import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import './SearchResults.css';

const SearchResults = ({ products }) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const filteredProducts = query ? products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    ) : [];

    return (
        <div className="search-results">
            {/* Conditionally render the h2 only if a query exists */}
            {query && (
                <h2>Search Results for "{query}"</h2>
            )}

            {/* Dynamic className based on filteredProducts.length */}
            <div className={filteredProducts.length > 0 ? "products-grid" : ""}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <h3 className="no-results">
                        {query ? "No Results Found" : "Search Something to show results"}
                    </h3>
                )}
            </div>
        </div>
    );
};

export default SearchResults;