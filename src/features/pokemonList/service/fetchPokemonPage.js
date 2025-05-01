

import axios from "axios";

export const fetchPokemonPage = async (offset, itemsPerPage) => {
    const url = import.meta.env.VITE_POKE_API_URL;

    const listResponse = await axios.get(`${url}?offset=${offset}&limit=${itemsPerPage}`);
    const basicDetails = listResponse.data.results;

    const paginatedData = [];
    for (const pokemon of basicDetails) {
        const response = await axios.get(pokemon.url);
        paginatedData.push({
            id: response.data.id,
            name: response.data.name,
            image: response.data.sprites.front_default,
            types: response.data.types.map((t) => t.type.name),
        });
    }

    return paginatedData;
};
