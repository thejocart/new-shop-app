import Container from "../../components/Container";
import { useCart } from "../../hooks/useCart";
import { useProductByIdAndName } from "../../hooks/useProductByIdAndName";
import { handleAddToCart } from "../../utils/cartUtils";
import { CheckIcon } from "@heroicons/react/24/outline";

import ProductSpecifications from "../../components/ProductSpecifications";
import Loader from "../../components/Loader";

const OneProduct = () => {
  const { product, error, isLoading, isError } = useProductByIdAndName();
  const { addToCart } = useCart();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !product) {
    return <div>{error ? error.message : "Product not found"}</div>;
  }

  return (
    <Container>
      <div
        className={
          "flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-5"
        }
      >
        <div className={"flex-1 max-w-[1000px]"}>
          <h2
            className={
              "text-4xl font-semibold text-custom-light-blue text-center md:text-left"
            }
          >
            {product.name}
          </h2>
          <div className={"mt-10 text-base md:text-lg"}>
            <p>{product.description}</p>
          </div>
          <div className={"flex flex-col gap-3 mt-10"}>
            {product?.features?.map((item, index) => {
              return (
                <div key={index} className={"flex items-center gap-4"}>
                  <CheckIcon width={25} height={25} color={"#06bee1"} />
                  <div className={"flex-1"}>
                    <p className={"text-sm text-gray-500 dark:text-gray-400"}>
                      {item}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={"mt-5"}>
            <p className={"text-custom-light-blue mb-5"}>
              {product?.additionalInformation?.Warranty}
            </p>
            <p className={"text-base md:text-lg"}>Included accessories: </p>
            <div className={"flex gap-6"}>
              <p
                className={
                  "dark:text-gray-300  text-gray-500 text-sm md:text-base"
                }
              >
                {product?.additionalInformation?.["In the Box"]?.join(", ")}
              </p>
            </div>
          </div>
          <div className={"flex justify-between items-center mt-10"}>
            <div>
              <p className={"text-xl md:text-3xl"}>{product?.price}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product, addToCart)}
              className={
                "bg-custom-light-blue text-white font-semibold px-4 py-2 rounded-full z-5 text-base md:text-lg hover:bg-opacity-90 hover:duration-300"
              }
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="relative flex-1 flex justify-end">
          <img
            src="/src/assets/images/mouse.png"
            className=" max-h-[500px] min-h-[200px] z-[5]"
          />
          <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-custom-light-blue rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>

      <ProductSpecifications product={product} />
    </Container>
  );
};

export default OneProduct;
