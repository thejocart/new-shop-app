import { Product } from "../types/Product";

const API_URL = "https://61898893be95487994abc2d8b4cf839e.api.mockbin.io/";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
