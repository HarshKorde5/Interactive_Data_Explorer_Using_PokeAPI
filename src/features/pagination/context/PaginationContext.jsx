import React, { createContext, useCallback, useMemo, useState } from "react";

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const offset = useMemo(() => {
        return ((currentPage - 1) * itemsPerPage);
    }, [currentPage, itemsPerPage]);

    const nextPage = useCallback(() => setCurrentPage((prevPage) => prevPage + 1), []);
    const previousPage = useCallback(() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)), []);
    const resetPage = useCallback(() => setCurrentPage(1), []);


    const value = useMemo(() => ({
        currentPage,
        setCurrentPage,

        itemsPerPage,
        setItemsPerPage,

        offset,
        nextPage,
        previousPage,
        resetPage,
    }), [currentPage, itemsPerPage, offset]);


    return (
        <PaginationContext.Provider value={value}>{children}</PaginationContext.Provider>
    );
};

