import { FC } from "react";
import { SpecificationItemProps } from "../../types/ProductSpecifications";

const SpecificationItem: FC<SpecificationItemProps> = ({
  icon: Icon,
  values,
  title,
}) => {
  return (
    <div className="flex gap-5 items-center">
      <Icon color={"#06bee1"} width={30} height={30} />
      <div>
        {Array.isArray(values) ? (
          <div>
            <p className={"text-custom-light-blue text-sm"}>{title}</p>
            <p className="dark:text-gray-300 text-gray-500 text-base">
              {values?.join(", ")}
            </p>
          </div>
        ) : (
          <div>
            <p className={"text-custom-light-blue text-sm"}>{title}</p>
            <p className={"dark:text-gray-300 text-gray-500 text-base"}>
              {values}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecificationItem;
