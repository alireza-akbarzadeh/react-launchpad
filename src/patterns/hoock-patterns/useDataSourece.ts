import { useEffect, useState } from 'react';

type TStatus = 'pending' | 'idle' | 'fulfilled' | 'error';

interface UseDataResourceReturn<T> {
  data: T | null;
  isLoading: boolean;
  isSuccess: boolean;
  isIdle: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  status: TStatus;
}

interface UseDataResourceOptions<T> {
  queryFn: () => Promise<T>;
}

export const useDataResource = <T>(
  options: UseDataResourceOptions<T>,
): UseDataResourceReturn<T> => {
  const { queryFn } = options;
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<TStatus>('idle');
  const [error, setError] = useState<Error | null>(null);

  const isLoading = status === 'pending';
  const isSuccess = status === 'fulfilled';
  const isIdle = status === 'idle';
  const isError = status === 'error';

  const fetchData = async () => {
    setStatus('pending');
    try {
      const result = await queryFn();
      setData(result);
      setStatus('fulfilled');
    } catch (error) {
      setError(error as Error);
      setStatus('error');
    }
  };
  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    isSuccess,
    isIdle,
    isError,
    error,
    refetch,
    status,
  };
};
