import {
  DefaultError,
  QueryClient,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { Loading } from 'containers';
import { ReactNode } from 'react';
import { Code } from './code';

interface QueryComponentsProps<
  TData = unknown,
  TError = DefaultError,
  TQueryFnData = TData, // Adjusted the order of type parameters
  TQueryKey extends QueryKey = QueryKey,
> {
  onSuccess?: (
    data: TData,
    queryResult: UseQueryResult<TData, TError>
  ) => ReactNode;
  onError?: (error: TError) => ReactNode;
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>; // Adjusted the order of types
  queryClient?: QueryClient;
  showError?: boolean;
}

/**
 * QueryComponents is a reusable React component that handles data fetching using React Query.
 * It provides a flexible and consistent way to fetch data from an API and render it based on the success or failure of the query.
 *
 * @template TData The type of data returned by the query.
 * @template TError The type of error that can occur during the query.
 * @template TQueryFnData The type of data used by the query function.
 * @template TQueryKey The type of query key used to identify the query in React Query.
 *
 * @param {QueryComponentsProps} props The properties passed to the QueryComponents component.
 * @param {TData} props.onSuccess The function to render the UI when the query is successful.
 * @param {TError} [props.onError] Optional function to handle UI rendering when the query encounters an error.
 * @param {UseQueryOptions} props.options The options object used to configure the query, including the query key and query function.
 * @param {QueryClient} [props.queryClient] Optional query client instance to use for the query.
 * @param {boolean} [props.showError=false] Optional boolean flag to determine whether to show error messages.
 *
 * @returns {ReactNode} The JSX to render based on the query state.
 */

export function QueryComponents<
  TData = unknown,
  TError = DefaultError,
  TQueryKey extends QueryKey = QueryKey,
>(props: QueryComponentsProps<TData, TError, TData, TQueryKey>) {
  const { onSuccess, onError, options, queryClient, showError = false } = props;

  const query = useQuery<TData, TError, TData, TQueryKey>(options, queryClient);

  const fallbackLoading = <Loading />;

  if (query.isLoading) return fallbackLoading;
  if (query.error && onError) return onError(query.error);
  if (query.error && showError) return <Code value={query.error} />;
  if (query.data) return onSuccess?.(query.data, query);
}
