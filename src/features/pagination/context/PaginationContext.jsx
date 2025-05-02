import React, { createContext, useMemo, useState, useEffect, useCallback } from 'react';
import { usePokemonFilterContext } from '../../pokemonFilter/context/usePokemonFilterContext';

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
    const { filteredPokemons } = usePokemonFilterContext();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    useEffect(() => {
        setCurrentPage(1);
      }, [filteredPokemons]);
    const offset = useMemo(() => {
        return (currentPage - 1) * itemsPerPage;
    }, [currentPage, itemsPerPage]);

    const paginatedPokemons = useMemo(() => {
        return filteredPokemons.slice(offset, offset + itemsPerPage);
    }, [filteredPokemons, offset, itemsPerPage]);

    const totalItems = useMemo(() => filteredPokemons.length, [filteredPokemons]);

    const totalPages = useMemo(() => {
        return Math.ceil(totalItems / itemsPerPage);
    }, [totalItems, itemsPerPage]);

    const nextPage = useCallback(() => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }, [totalPages]);

    const previousPage = useCallback(() => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    }, []);

    const resetPage = useCallback(() => setCurrentPage(1), []);

    const value = useMemo(() => ({
        currentPage,
        itemsPerPage,
        totalPages,
        offset,
        paginatedPokemons,
        nextPage,
        previousPage,
        resetPage,
        setCurrentPage,
        setItemsPerPage,
    }), [
        currentPage,
        itemsPerPage,
        totalPages,
        offset,
        paginatedPokemons,
        nextPage,
        previousPage,
        resetPage
    ]);

    return (
        <PaginationContext.Provider value={value}>
            {children}
        </PaginationContext.Provider>
    );
};
