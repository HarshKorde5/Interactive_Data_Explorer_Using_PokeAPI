import { PaginationContext } from "../context/PaginationContext";
import { useContext } from "react";

const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("PaginationProvider error");
  }
  return context;
};

export default usePaginationContext;
