import { AdditionalInformation } from "./ProductInformation";
import { Specifications } from "./ProductSpecifications";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: Specifications;
  additionalInformation: AdditionalInformation;
  quantity: 1;
}
