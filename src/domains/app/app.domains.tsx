import * as Sentry from "@sentry/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import "./App.css";

export const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default Sentry.withProfiler(App);
