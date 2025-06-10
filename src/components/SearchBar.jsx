import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;