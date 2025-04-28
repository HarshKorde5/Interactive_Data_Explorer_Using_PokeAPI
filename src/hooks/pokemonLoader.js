import axios from "axios";

export async function pokemonLoader(){

    try{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const basic = response.data.results;

        const detailedFetch = await Promise.all(
            basic.map(async (pokemon) => {
                const details = await axios.get(pokemon.url);

                return {
                    id : details.data.id,
                    name : details.data.name,
                    types : details.data.types.map( (type) => type.type.name),
                    image : details.data.sprites.front_shiny,
                };
            })
        );

        return detailedFetch;
    }catch(error){
        throw new Response("Failed to fetch data",{status:500});
    }
}