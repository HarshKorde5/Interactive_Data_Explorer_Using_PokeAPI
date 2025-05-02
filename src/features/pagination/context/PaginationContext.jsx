// PaginationContext.jsx
import React, { createContext, useMemo, useState, useEffect, useCallback } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = ({ data = [], children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    const offset = useMemo(() => {
        return (currentPage - 1) * itemsPerPage;
    }, [currentPage, itemsPerPage]);

    const paginatedItems = useMemo(() => {
        return data.slice(offset, offset + itemsPerPage);
    }, [data, offset, itemsPerPage]);

    const totalItems = data.length;

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
        paginatedItems,
        nextPage,
        previousPage,
        resetPage,
        setCurrentPage,
        setItemsPerPage,
        setTotalItems: () => { },
    }), [
        currentPage,
        itemsPerPage,
        totalPages,
        offset,
        paginatedItems,
        nextPage,
        previousPage,
        resetPage,
    ]);

    return (
        <PaginationContext.Provider value={value}>
            {children}
        </PaginationContext.Provider>
    );
};
