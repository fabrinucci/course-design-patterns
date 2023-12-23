import { Product } from '../types';

interface Props {
  product: Product;
}

export const LargeProductList = ({ product }: Props) => {
  const { name, description, price, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <div>Price: {price}</div>
      <h3>Description</h3>
      <div>{description}</div>
      <p>Rating: {rating}</p>
    </>
  );
};
