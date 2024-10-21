import React from 'react';

const FilterB = ({ onFilterChange }) => {
    return (
        <div>
            <div className="filter-buttons">
                <button className="filter-btn" onClick={() => onFilterChange('all')}>All</button>
                <button className="filter-btn" onClick={() => onFilterChange('web-development')}>Web Development</button>
                <button className="filter-btn" onClick={() => onFilterChange('games')}>Games</button>
            </div>
        </div>
    );
};

export default FilterB;
