import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import { useProducts } from "./useProducts";

export const useProductByIdAndName = () => {
  const { productId, productName } = useParams<{
    productId: string;
    productName: string;
  }>();
  const { data, error, isLoading, isError } = useProducts();

  // Find the product by the productId and match the productName for consistency
  const product = data?.find(
    (prod: Product) =>
      prod.id.toString() === productId &&
      prod.name.toLowerCase().replace(/\s+/g, "-") === productName
  );

  return { product, error, isLoading, isError };
};
