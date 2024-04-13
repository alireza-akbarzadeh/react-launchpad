import { Navigate, Outlet } from 'react-router-dom';

type TProtectedRoute = {
  isPublic: boolean;
  isAuthorized: boolean;
};

export function ProtectedRoute({ isPublic, isAuthorized }: TProtectedRoute) {
  return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/login" />;
}
