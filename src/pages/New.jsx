import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterDialog from '../components/FilterDialog';
import './New.css';

const New = ({products}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filters, setFilters] = useState({ inStock: false, outOfStock: false });
  const [filtersApplied, setFiltersApplied] = useState(false);
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAvailabilityClick = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleReset = () => {
    setFilters({ inStock: false, outOfStock: false });
    setIsDialogOpen(false);
    setFiltersApplied(false);
  };

  const handleApply = (newFilters) => {
    setFilters(newFilters);
    setIsDialogOpen(false);
    setFiltersApplied(true);
  };
  const countProducts = (products) => {
    return products.length;
  };
  const productCount = countProducts(products);
  const filteredProducts = products.filter((product) => {
    if (filters.inStock && filters.outOfStock) {
      return true;
    } else if (filters.inStock) {
      return product.inStock;
    } else if (filters.outOfStock) {
      return !product.inStock;
    } else {
      return true;
    }
  });

  const inStockCount = products.filter((product) => product.inStock).length;
  const outOfStockCount = products.filter((product) => !product.inStock).length;

  return (
    <div className="new-page">
      <div className="filter-sort-section">
        <div className="filters" style={{ position: 'relative' }}>
          <span>Filter: </span>
          <button onClick={handleAvailabilityClick}>Availability ▼</button>
          {isDialogOpen && (
            <FilterDialog
              onClose={() => setIsDialogOpen(false)}
              onReset={handleReset}
              onApply={handleApply}
              inStockCount={inStockCount}
              outOfStockCount={outOfStockCount}
            />
          )}
          {filtersApplied && (
            <div className='stock-filter'>
              <h4>Selected Filters:</h4>
              <p>In stock: {filters.inStock ? 'Yes' : 'No'}</p>
              <p>Out of stock: {filters.outOfStock ? 'Yes' : 'No'}</p>
            </div>
          )}
          {/* <button>Price ▼</button> */}
        </div>
        <div className="sort-by">
          {/* <span>Sort by: </span>
          <button>Best selling ▼</button> */}
          <span>{productCount} products</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleCardClick(product.id)}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              {product.onSale && <span className="sale-tag">Sale</span>}
              <div className="product-prices">
                {product.saleprice ? (
                  <>
                    <span className="original-price">PKR.  {product.price}</span>
                    <span className="sale-price">PKR. {product.saleprice}</span>
                  </>
                ) : (
                  <span className="price">{product.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default New;