import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorContainer = () => {
  const error = useRouteError();
  return (
    <div className="flex-center flex-col h-screen">
      <h3>Oops</h3>
      <p className="">
        {isRouteErrorResponse(error)
          ? "This page dose not exist."
          : "An unexpected error occurred."}
      </p>
    </div>
  );
};
