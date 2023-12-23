import { Product } from '../types';

interface Props {
  product: Product;
}

export const SmallProductList = ({ product }: Props) => {
  const { name, price } = product;
  return (
    <h3>
      Name: {name} --- Price: {price}
    </h3>
  );
};
