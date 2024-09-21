import { Product } from "../../types/Product";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";
import Container from "../../components/Container";
import Loader from "../../components/Loader";

const Products = () => {
  const { data, error, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Container>
        <h1
          className={
            "text-2xl md:text-4xl text-center font-semibold text-custom-light-blue"
          }
        >
          Premium Computer Accessories and Tools
        </h1>
        <div
          className={
            "grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 md:gap-20 mt-[50px] md:mt-[100px]"
          }
        >
          {data?.map((product: Product) => {
            return (
              <ProductCard
                key={`product-list-${product.id}`}
                product={product}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Products;
