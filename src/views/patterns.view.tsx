import { QueryComponents } from "components/common/query-components";
import { User } from "interfaces";
import axios from "axios";

const PatternsView = () => {
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/usersasd",
    );
    return response.data as User[];
  };

  return (
    <div>
      <QueryComponents<User[]>
        options={{
          queryKey: ["users"],
          queryFn: fetchUsers,
        }}
        showError
        onSuccess={(data) => (
          <div>
            {data?.map((user) => (
              <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <hr />
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default PatternsView;
