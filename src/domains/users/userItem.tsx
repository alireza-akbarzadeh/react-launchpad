import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from './userList';

const fetchUsers = (userId: string): Promise<User> =>
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.data);

export function UserITem({ userId }: { userId: string }) {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<User>({
    queryKey: ['user', userId],
    queryFn: () => fetchUsers(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="p-4 mb-4 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-2">{user?.name}</h3>
      <p>
        <strong>Username:</strong> {user?.username}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  );
}
