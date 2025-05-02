import React from "react";
import { usePokemonFilterContext } from "../context/usePokemonFilterContext";

function PokemonSort() {
    const { sortOrder, setSortOrder } = usePokemonFilterContext();

    return (
        <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="bg-gray-200 p-2 m-2 rounded-lg border-2"
        >
            <option value="" disabled selected={!sortOrder}>Sort Pokemons</option>
            <option value="">default</option>
            <option value="id-asc">ID-Asc</option>
            <option value="id-desc">ID-Dsc</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
        </select>
    );
}

export default PokemonSort;