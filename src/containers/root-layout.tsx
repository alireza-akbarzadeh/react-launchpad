import { FC, PropsWithChildren, Suspense } from "react";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="bg-black">{children}</main>
    </Suspense>
  );
};
