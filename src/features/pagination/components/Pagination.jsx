import React from "react";
import Button from "../../../components/Button";

import usePaginationContext from "../hooks/usePaginationContext";
function Pagination() {

    const {
        currentPage,
        itemsPerPage,
        totalPages,
        offset,

        nextPage,
        previousPage,
        resetPage,

        setCurrentPage,
        setItemsPerPage,
        setTotalItems,
    } = usePaginationContext();


    return (
        <div className="flex justify-center items-center gap-4 mt-5 bg-gray-200 p-2 rounded-lg">
            <Button
                size="sm"
                variant="outlined"
                onClick={previousPage}
                disabled={currentPage === 1}
            >
                Previous
            </Button>
            <p className="text-gray-600 font-normal">
                Page <strong className="text-gray-900">{currentPage}</strong> of{" "}<strong className="text-gray-900">{totalPages}</strong>
            </p>
            <Button
                size="sm"
                variant="outlined"
                onClick={nextPage}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>

            <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border-2 px-2 py-1 rounded"
            >
                {[10, 20, 50].map((num) => (
                    <option key={num} value={num}>{num} per page</option>
                ))}
            </select>
        </div>
    );
}

export default Pagination;