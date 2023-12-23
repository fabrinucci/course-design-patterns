import { Person } from '../types';

interface Props {
  person: Person;
}

export const LargePersonList = ({ person }: Props) => {
  const { name, age, hobbies, job } = person;
  return (
    <>
      <h3>{name}</h3>
      <div>Age: {age}</div>
      <div>Job: {job}</div>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobbie) => (
          <li key={hobbie}>{hobbie}</li>
        ))}
      </ul>
    </>
  );
};
