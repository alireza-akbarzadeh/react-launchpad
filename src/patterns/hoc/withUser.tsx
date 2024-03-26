import { useQuery } from "@tanstack/react-query";
import { capitalize } from "lib/utils";
import { FC } from "react";
import ApiClient from "services/api-client";
interface IWithUser<T> {
  Component: FC<T>; // Adjust the type of Component to accept data of type User
  recourses: string;
  recoursesName: string;
  key: string;
}

type TResourceProps<K, TResource extends string> = {
  data?: K;
} & {
  [Key in
    | `onChange${Capitalize<TResource>}`
    | `onSave${Capitalize<TResource>}`
    | `onReset${Capitalize<TResource>}`]: () => void;
};

export const withUser = <T, K>(props: IWithUser<T>) => {
  const { Component, recourses, key, recoursesName } = props;
  return (args: T): JSX.Element => {
    const client = new ApiClient<K>(recourses);
    const { data } = useQuery<K>({
      // Adjust the type of useQuery to expect a single User object
      queryKey: [key],
      queryFn: () => client.get(recourses), // Adjust the type of userClient.get to expect a single User object
    });

    if (!data) return <h2>loading....</h2>;
    // @ts-ignore
    // find correct tpe
    const resourceProps: TResourceProps<any, typeof recoursesName> = {
      data: data,
      [`onChange${capitalize(recoursesName)}`]: () => {},
      [`onSave${capitalize(recoursesName)}`]: () => {},
      [`onReset${capitalize(recoursesName)}`]: () => {},
    };
    return <Component {...args} {...resourceProps} />; // Pass an empty object as fallback if data is undefined
  };
};
