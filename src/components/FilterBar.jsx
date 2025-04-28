import React from "react";

function FilterBar({ typeFilter, onTypeChange, types }) {
  return (
    <>
        <select
        className="px-4 py-2 border rounded-lg w-full max-w-xs md:max-w-md"
        value={typeFilter}
        onChange={(e) => onTypeChange(e.target.value)}
        >
        <option value="all">All Types</option>
        {types.map((type) => (
            <option key={type.name} value={type.name}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </option>
        ))}
        </select>
    </>
  );
}

export default FilterBar;
