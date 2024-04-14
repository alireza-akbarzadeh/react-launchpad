import * as Sentry from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'components/ui/toast/toaster';
import { AuthProvider } from 'providers';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import 'styles/App.css';

export const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Toaster />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default Sentry.withProfiler(App);
