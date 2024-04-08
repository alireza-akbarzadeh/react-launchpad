import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "components";
import { QueryComponents } from "components/common/query-components";
import { Loading } from "containers";
import { useIterator } from "hooks/useIterator";
import { User } from "interfaces";

const PatternsView = () => {
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    return response.data as User[];
  };
  const { data, isLoading } = useQuery({
    queryKey: ["Test_User"],
    queryFn: fetchUsers,
  });

  const [{ email }, prev, next] = useIterator<User>({
    items: [],
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      {/* <Button onClick={next}>next</Button>
      {email}
      <Button onClick={prev}>prev</Button> */}
      {/* <QueryComponents<User[]>
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
      /> */}
    </div>
  );
};

export default PatternsView;
