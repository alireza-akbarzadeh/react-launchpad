import { Person } from 'patterns/data';

export function LargePerson(props: Person) {
  const { age, name, hairColor, hobbies } = props;

  return (
    <ul>
        <li>
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <p>Hair Color: {hairColor}</p>
          <p>Hobbies: {hobbies.join(', ')}</p>
        </li>
      </ul>
  );
}
