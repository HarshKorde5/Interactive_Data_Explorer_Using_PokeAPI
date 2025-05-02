import React from "react";
import { usePokemonFilterContext } from "../context/usePokemonFilterContext";

function PokemonSearch() {
    const { searchTerm, setSearchTerm } = usePokemonFilterContext();
    return (
        <input
            type="text"
            placeholder="Search by name..."
            className="px-4 py-2 border-2 bg-gray-200 rounded-lg w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

        />
    );
}

export default PokemonSearch;