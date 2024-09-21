import { Link } from "react-router-dom";
import { Product } from "../../types/Product";
import { handleAddToCart } from "../../utils/cartUtils";
import { useCart } from "../../hooks/useCart";
import { MouseEvent } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleButtonClick = (event: MouseEvent) => {
    event.preventDefault(); // Prevent navigation
    event.stopPropagation(); // Stop the event from bubbling up
    handleAddToCart(product, addToCart); // Add product to the cart
  };

  return (
    <Link
      key={`product-list-${product.id}`}
      to={`/products/${product.id}/${product.name
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
      className={
        " border rounded-[15px] max-w-[300px] md:max-w-[400px] border-gray-400 dark:border-white dark:border-opacity-20 border-opacity-20 bg-slate-500 bg-opacity-5 hover:bg-opacity-15 hover:duration-300 group"
      }
    >
      <div className="relative p-2 md:p-5 mx-auto group-hover:-mt-[30px] md:group-hover:-mt-[50px] group-hover:mb-[30px] md:group-hover:mb-[50px] group-hover:duration-300">
        <img src="/src/assets/images/mouse.png" className={"w-full z-20"} />
        <div className="absolute left-0 right-0 mx-10 -mt-[20px] h-4 group-hover:bg-gray-900 group-hover:duration-500 rounded-full blur-xl"></div>
        <div className="absolute left-0 right-0 mx-20 -mt-[20px] h-8 group-hover:bg-gray-900 group-hover:duration-500 rounded-full blur-xl"></div>
      </div>
      <div className={"px-4 pb-4 flex flex-col"}>
        <div className={"mb-2"}>
          <p
            className={
              "text-xl font-semibold h-14 text-center text-custom-light-blue"
            }
          >
            {product?.name}
          </p>
        </div>
        <div className={"text-sm text-gray-500 dark:text-gray-400 h-[60px]"}>
          <p className="line-clamp-3">{product?.description}</p>
        </div>
        <div className={"flex justify-between items-center mt-5"}>
          <div>
            <p className={"text-lg"}>{product?.price}</p>
          </div>
          <button
            onClick={handleButtonClick}
            className={
              "bg-custom-light-blue text-white font-semibold px-4 py-2 rounded-full z-5 text-sm hover:bg-opacity-90 hover:duration-300"
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
