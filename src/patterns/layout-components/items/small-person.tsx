interface ISmallPersonProps {
  name: string;
  age: number;
}
export function SmallPerson(props: ISmallPersonProps) {
  const { age, name } = props;
  return (
    <div>
      Name: {name}, Age :{age} years
    </div>
  );
}
