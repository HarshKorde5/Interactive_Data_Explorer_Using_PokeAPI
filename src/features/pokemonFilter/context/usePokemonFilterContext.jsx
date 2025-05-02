
import React, { createContext, useContext, useMemo, useState } from "react";
import { usePokemonContext } from "../../pokemonList/context/usePokemonContext";


const PokemonFilterContext = createContext();

export const PokemonFilterProvider = ({ children }) => {
    const { allPokemons, loading, error } = usePokemonContext();

    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    const filteredPokemons = useMemo(() => {
        let result = [...allPokemons];

        if (searchTerm.trim()) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (typeFilter.length > 0) {
            result = result.filter(p =>
                typeFilter.every(type => p.types.includes(type))
            );
        }

        result.sort((a, b) => {
            if (sortOrder === "name-asc") return a.name.localeCompare(b.name);
            if (sortOrder === "name-desc") return b.name.localeCompare(a.name);
            if (sortOrder === "id-asc") return a.id - b.id;
            if (sortOrder === "id-desc") return b.id - a.id;
            return 0;
        });

        return result;
    }, [allPokemons, searchTerm, typeFilter, sortOrder]);

    const value = useMemo(() => ({
        filteredPokemons,
        searchTerm,
        setSearchTerm,
        typeFilter,
        setTypeFilter,
        sortOrder,
        setSortOrder,
        loading,
        error,
    }), [filteredPokemons, searchTerm, typeFilter, sortOrder, loading, error]);

    return (
        <PokemonFilterContext.Provider value={value}>
            {children}
        </PokemonFilterContext.Provider>
    );
};

export const usePokemonFilterContext = () => useContext(PokemonFilterContext);
