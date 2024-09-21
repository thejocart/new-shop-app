export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export interface CartProps {
  isOpen: boolean;
  toggleCart: () => void;
}

export interface CartItemListProps {
  cartItems: CartItem[];
}
