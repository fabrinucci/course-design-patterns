import { Person, Product } from './types';

interface Props {
  items: Person[] | Product[];
  resourceName: string;
  itemComponent: React.FC;
}

export const NumberList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: Props) => {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>
          <h3>{i + 1} product</h3>
          <ItemComponent {...{ [resourceName]: item }} />
        </div>
      ))}
    </div>
  );
};
