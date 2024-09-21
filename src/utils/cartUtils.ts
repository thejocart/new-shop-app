import { CartItem } from "../types/Cart";

// Modify the function to accept addToCart as an argument
export const handleAddToCart = (
  product: CartItem,
  addToCart: (item: CartItem) => void
) => {
  addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
  });
};
