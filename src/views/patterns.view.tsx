import axios from 'axios';
import { Button } from 'components';
import { QueryComponents } from 'components/common/query-components';
import { useIterator } from 'hooks/useIterator';
import { User } from 'interfaces';
import { View } from 'patterns/view'; // Import the View component

function PatternsView() {
  const fetchUsers = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data as User[];
  };

  const [{ email }, prev, next] = useIterator<User>({
    items: [],
  });

  return (
    <div>
      <Button onClick={next}>next</Button>
      {email}
      <Button onClick={prev}>prev</Button>
      <QueryComponents<User[]>
        options={{
          queryKey: ['users'],
          queryFn: fetchUsers,
        }}
        showError
        onSuccess={(data) => <View />} // Pass data as props to View component
      />
    </div>
  );
}

export default PatternsView;
