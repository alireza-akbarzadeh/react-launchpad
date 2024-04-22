import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUsers = (): Promise<User[]> =>
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.data);

export function Users() {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return users?.map((user) => (
    <div className="p-4 mb-4 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-2">{user?.name}</h3>
      <p>
        <strong>Username:</strong> {user?.username}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  ));
}
