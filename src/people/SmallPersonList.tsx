import { Person } from '../types';

interface Props {
  person: Person;
}

export const SmallPersonList = ({ person }: Props) => {
  const { name, age } = person;
  return (
    <h3>
      Name: {name} --- Age: {age}
    </h3>
  );
};
