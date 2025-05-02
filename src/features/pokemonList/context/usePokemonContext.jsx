import { createContext, useContext, useMemo } from 'react';
import usePokemon from '../hooks/usePokemon.js';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const { allPokemons , loading, error } = usePokemon();

    const value = useMemo(() => ({
        allPokemons,
        loading,
        error,
    }), [allPokemons, loading, error]);

    return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};

export const usePokemonContext = () => useContext(PokemonContext);
