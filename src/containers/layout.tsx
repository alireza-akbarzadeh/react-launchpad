import { Suspense } from 'react';
import { Loading } from './loading';
import { ProtectedRoute } from './ProtectedRoute';

export function RootLayout() {
  return (
    <Suspense
      fallback={
        // TODO: checks whats going on here why i need parent element
        <Loading />
      }
    >
      <main className="bg-black overflow-hidden text-white border border-[#3b3b3b]">
        <ProtectedRoute isPublic isAuthorized />
      </main>
    </Suspense>
  );
}
