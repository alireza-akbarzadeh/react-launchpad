import { Suspense } from "react";
import { Loading } from "./loading";
import { ProtectedRoute } from "./ProtectedRoute";

export const DashboardLayout = () => {
  return (
    <Suspense
      fallback={
        // TODO: checks whats going on here why i need parent element
        <>
          <Loading />
        </>
      }
    >
      <main>
        <ProtectedRoute isPublic isAuthorized />
      </main>
    </Suspense>
  );
};
