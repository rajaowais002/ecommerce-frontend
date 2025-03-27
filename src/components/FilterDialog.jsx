import React, { useState } from 'react';
import './FilterDialog.css'; 


const FilterDialog = ({ onClose, onReset, onApply, inStockCount, outOfStockCount }) => {
    const [inStock, setInStock] = useState(false);
    const [outOfStock, setOutOfStock] = useState(false);

    const handleApply = () => {
        onApply({ inStock, outOfStock });
        onClose();
    };

    return (
        <div className="filter-dialog">
            <h3>Availability</h3>
            <div className="filter-options">
                <span>
                    <input 
                        type="checkbox"
                        checked={inStock}
                        onChange={(e) => setInStock(e.target.checked)}
                    />
                    In stock ({inStockCount})
                </span>
                <span>
                    <input 
                        type="checkbox"
                        checked={outOfStock}
                        onChange={(e) => setOutOfStock(e.target.checked)}
                    />
                    Out of stock ({outOfStockCount})
                </span>
            </div>
            <div className="dialog-actions">
                <button onClick={onReset}>Reset</button>
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
};

export default FilterDialog;