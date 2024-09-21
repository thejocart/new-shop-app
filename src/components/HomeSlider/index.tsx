import { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import { useProducts } from "../../hooks/useProducts";
import Loader from "../Loader";

const HomeSlider = () => {
  const { data: products, isLoading, isError } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-move to the next product every 3 seconds
  useEffect(() => {
    if (products && products.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [products]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products?.map((product: Product) => (
          <div key={product.id} className="w-full flex-shrink-0 min-w-full">
            <div className="relative flex justify-center items-center h-screen">
              <div className="absolute bottom-5 left-5 text-gray-950 dark:text-white z-10">
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p className="text-lg">${product.price.toFixed(2)}</p>
              </div>
              <img
                src="/src/assets/images/mouse.png"
                alt={product.name}
                className="h-[90%] w-auto object-contain z-10"
              />
              <div className="absolute left-40 bottom-20 h-[200px] w-[200px] bg-custom-light-blue rounded-full blur-3xl opacity-40 dark:opacity-20"></div>
              <div className="absolute right-[20%] top-20 h-[300px] w-[300px] bg-custom-light-blue rounded-full blur-3xl opacity-40 dark:opacity-20"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products?.map((_, index: number) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-custom-light-blue" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
