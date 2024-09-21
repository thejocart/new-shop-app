import { FC } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../hooks/useCart";
import { CartItemListProps } from "../../types/Cart";

const CartItemList: FC<CartItemListProps> = ({ cartItems }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <ul className={"px-4"}>
      {cartItems.map((item) => (
        <li
          key={item.id}
          className={
            "border-b border-gray-400 dark:border-gray-800 pb-2 pt-2 mb-2"
          }
        >
          <div className={"flex justify-between items-center"}>
            <div className={"flex items-center"}>
              <img
                src="/src/assets/images/mouse.png"
                className="max-h-[70px]"
              />
              <div>
                <h4 className={"text-custom-light-blue text-sm md:text-lg"}>
                  {item.name}
                </h4>
                <p className={"text-sm md:text-base"}>
                  Price: ${item.price.toFixed(2)}
                </p>
                <div className={"flex items-center mt-5"}>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className={
                      "rounded-full p-1 text-custom-light-blue bg-custom-light-blue bg-opacity-10 hover:bg-opacity-100 hover:text-white duration-200"
                    }
                  >
                    <MinusIcon width={15} height={15} />
                  </button>

                  <span className="mx-3 text-base">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className={
                      "rounded-full p-1 text-custom-light-blue bg-custom-light-blue bg-opacity-10 hover:bg-opacity-100 hover:text-white duration-200"
                    }
                  >
                    <PlusIcon width={15} height={15} />
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className={
                "rounded-full p-2 text-custom-light-blue bg-custom-light-blue bg-opacity-10 hover:bg-opacity-100 hover:text-white duration-200"
              }
            >
              <TrashIcon width={20} height={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItemList;
