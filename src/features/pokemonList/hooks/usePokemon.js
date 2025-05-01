import { useEffect, useState } from 'react';
import { fetchPokemonPage } from '../service/fetchPokemonPage';
import usePaginationContext from '../../pagination/hooks/usePaginationContext';


const usePokemon = () => {
    const { currentPage, itemsPerPage, offset } = usePaginationContext();

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPokemons = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchPokemonPage(offset, itemsPerPage);
                setPokemons(data);
            } catch (err) {
                setError("Failed to load Pokémon.");
            } finally {
                setLoading(false);
            }
        };

        loadPokemons();
    }, [currentPage, itemsPerPage, offset]);

    return { pokemons, loading, error };
};

export default usePokemon;
