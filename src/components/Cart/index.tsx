import { FC, useEffect, useRef } from "react";
import { useCart } from "../../hooks/useCart";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CartProps } from "../../types/Cart";
import CartItemList from "../CartItemList";

const Cart: FC<CartProps> = ({ isOpen, toggleCart }) => {
  const { cartItems } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        toggleCart();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      // Re-enable background scrolling when the cart is closed
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Cleanup in case of component unmount
    };
  }, [isOpen, toggleCart]);

  return (
    <div>
      {isOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        />
      )}

      <div
        ref={cartRef}
        className={`fixed right-0 top-0 w-full md:w-[400px] h-full bg-gray-200 dark:bg-gray-900 shadow-lg z-20 flex flex-col justify-between transform transition-transform duration-500 ${
          isOpen
            ? "translate-y-0 md:translate-x-0 "
            : "translate-y-full md:translate-x-full md:translate-y-0"
        }`}
      >
        <div className="flex-1 overflow-y-auto">
          <div className={"bg-gray-200 dark:bg-gray-900 sticky top-0 z-30"}>
            <button
              onClick={toggleCart}
              className="absolute top-4 right-4 rounded-full p-2 "
            >
              <XMarkIcon width={20} height={20} color={"dark:#fff"} />
            </button>
            <h2 className="text-xl font-bold text-center py-5">Cart</h2>
          </div>

          {cartItems.length === 0 ? (
            <div
              className={
                "flex flex-col items-center justify-center gap-3 pb-10 mt-[100px]"
              }
            >
              <ShoppingCartIcon width={50} height={50} color={"#06bee1"} />
              <p className={"text-center text-lg"}>Your cart is empty</p>
            </div>
          ) : (
            <CartItemList cartItems={cartItems} />
          )}
        </div>

        <div className="absolute -right-14 -bottom-14 h-[300px] w-[300px] bg-custom-light-blue rounded-full blur-3xl opacity-40 dark:opacity-20"></div>

        {cartItems.length !== 0 && (
          <div className="sticky bottom-0 left-0 w-full py-4 border-t border-gray-400 dark:border-gray-600 ">
            <h3 className="text-lg font-bold text-center">
              Total: ${total.toFixed(2)}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
