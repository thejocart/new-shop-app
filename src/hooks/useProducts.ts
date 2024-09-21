// src/hooks/useFetchUsers.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchProducts,
  });
};
