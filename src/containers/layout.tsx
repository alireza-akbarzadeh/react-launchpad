import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "./loading";

export const RootLayout = () => {
  return (
    <Suspense
      fallback={
        // TODO: checks whats going on here why i need parent element
        <>
          <Loading />
        </>
      }
    >
      <main className="bg-black">
        <Outlet />
      </main>
    </Suspense>
  );
};
