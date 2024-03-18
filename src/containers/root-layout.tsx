import { FC, PropsWithChildren, Suspense } from "react";
import { Outlet } from "react-router-dom";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="bg-black">
        <Outlet />
      </main>
    </Suspense>
  );
};
