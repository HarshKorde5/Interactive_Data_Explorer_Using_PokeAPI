

import axios from "axios";

export const fetchPokemonPage = async () => {
    const fetchCount = 150;
    const url = import.meta.env.VITE_POKE_API_URL;

    const listResponse = await axios.get(`${url}?limit=${fetchCount}`);
    const basicDetails = listResponse.data.results;

    const resultData = [];
    for (const pokemon of basicDetails) {
        const response = await axios.get(pokemon.url);
        resultData.push({
            id: response.data.id,
            name: response.data.name,
            image: response.data.sprites.front_default,
            types: response.data.types.map((t) => t.type.name),
        });
    }

    return resultData;
};
