import { Product } from "../../types/Product";
import SpecificationItem from "../SpecificationItem";
import { specificationsList } from "../../constants/Specifications";

const ProductSpecifications = ({ product }: { product: Product }) => (
  <div className={" mt-10 md:mt-20 flex flex-col gap-5"}>
    <h2
      className={
        "text-2xl font-semibold md:text-4xl  text-custom-light-blue mb-5"
      }
    >
      Specifications
    </h2>
    <div className={"grid grid-cols-1 md:grid-cols-3 gap-5"}>
      {specificationsList(product).map((spec, index) =>
        spec.value ? (
          <SpecificationItem
            key={index}
            icon={spec.icon}
            values={spec.value}
            title={spec.label}
          />
        ) : null
      )}
    </div>
  </div>
);
export default ProductSpecifications;
