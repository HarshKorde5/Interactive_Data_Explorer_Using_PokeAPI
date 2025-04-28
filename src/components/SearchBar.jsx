import React from "react";

function SearchBar({searchTerm, onSearchChange}){

    return (
        <input 
            type = "text"
            placeholder="Search by name..."
            className="px-4 py-2 border rounded-lg w-full md:w-1/3"
            value={searchTerm}
            onChange={ (e) => onSearchChange(e.target.value)}

        />
    );
}

export default SearchBar