import { useEffect, useState } from "react";

export const usePokemonDetails = (id) => {
    const [pokemon, setPokemon] = useState(null);
    const [evolution, setEvolution] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await res.json();
                setPokemon(data);

                const speciesRes = await fetch(data.species.url);
                const speciesData = await speciesRes.json();

                const evoRes = await fetch(speciesData.evolution_chain.url);
                const evoData = await evoRes.json();

                const extractChain = (chain) => {
                    const result = [];
                    let current = chain;
                    while (current) {
                        result.push(current.species.name);
                        current = current.evolves_to[0];
                    }
                    return result;
                };

                setEvolution(extractChain(evoData.chain));
            } catch (err) {
                console.error("Failed to fetch Pokémon data", err);
            }
            setLoading(false);
        };

        if (id) fetchPokemonData();
    }, [id]);

    return { pokemon, evolution, loading };
};
