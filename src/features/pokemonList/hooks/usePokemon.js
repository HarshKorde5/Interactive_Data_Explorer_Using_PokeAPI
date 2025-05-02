import { useEffect, useState } from 'react';
import { fetchPokemonPage } from '../service/fetchPokemonPage';


const usePokemon = () => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPokemons = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchPokemonPage();
                setAllPokemons(data);
            } catch (err) {
                setError("Failed to load Pokémon.");
            } finally {
                setLoading(false);
            }
        };

        loadPokemons();
    }, []);

    return { allPokemons, loading, error };
};

export default usePokemon;
