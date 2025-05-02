import { PaginationContext } from "../context/PaginationContext";
import { useContext } from "react";

const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePaginationContext must be used within a PaginationProvider");
  }
  return context;
};

export default usePaginationContext;
