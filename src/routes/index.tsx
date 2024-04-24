import { DashboardLayout, ErrorBoundray, RootLayout } from 'containers';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const FaqView = lazy(() => import('views/faq.view'));
const ContactView = lazy(() => import('views/contact.view'));
const AboutView = lazy(() => import('views/about.view'));
const ServicesView = lazy(() => import('views/services.view'));
const HomeView = lazy(() => import('views/home.view'));
const ServiesView = lazy(() => import('views/services.view'));
const LicenseView = lazy(() => import('views/license.view'));
const ContributeView = lazy(() => import('views/contribute.view'));
const StatusView = lazy(() => import('views/status.view'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundray />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: 'faq',
        element: <FaqView />,
      },
      {
        path: 'contribute',
        element: <ContributeView />,
      },
      {
        path: 'status',
        element: <StatusView />,
      },
      {
        path: 'license',
        element: <LicenseView />,
      },
      {
        path: 'services',
        element: <ServicesView />,
      },
      {
        path: 'contact',
        element: <ContactView />,
      },
      {
        path: 'about',
        element: <AboutView />,
      },
      {
        path: 'services',
        element: <ServiesView />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorBoundray />,
    children: [
      {
        index: true,
        path: 'patterns',
        element: <div>dashboard</div>,
      },
    ],
  },
]);
