import { Person } from './types';

interface Props {
  items: Person[];
  resourceName: string;
  itemComponent: React.FC<Person>;
}

export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: Props) => {
  return (
    <div>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};
