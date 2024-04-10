import { RootLayout, ErrorBoundray, DashboardLayout } from "containers";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const IphoneView = lazy(() => import("views/iphone.view"));
const MacView = lazy(() => import("views/mac.view"));
const IpadView = lazy(() => import("views/ipad.view"));
const AirPodsView = lazy(() => import("views/airpods.view"));
const StoreView = lazy(() => import("views/store.view"));
const VisionView = lazy(() => import("views/vision.view"));
const WatchView = lazy(() => import("views/watch.view"));
const HomeView = lazy(() => import("views/home.view"));
const PatternsView = lazy(() => import("views/patterns.view"));
const ServiesView = lazy(() => import("views/services.view"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundray />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "iphone",
        element: <IphoneView />,
      },
      {
        path: "mac",
        element: <MacView />,
      },
      {
        path: "ipad",
        element: <IpadView />,
      },
      {
        path: "airpods",
        element: <AirPodsView />,
      },
      {
        path: "services",
        element: <ServiesView />,
      },
      {
        path: "store",
        element: <StoreView />,
      },
      {
        path: "vision",
        element: <VisionView />,
      },
      {
        path: "watch",
        element: <WatchView />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorBoundray/>,
    children: [
      {
        index: true,
        path: "patterns",
        element: <PatternsView />,
      },
    ],
  },
]);
