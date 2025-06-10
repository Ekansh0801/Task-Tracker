import React from 'react';

// SearchBar component to handle searching tasks by name
const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
// Render the search bar with an input field
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