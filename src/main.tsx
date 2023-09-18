import type { Lead, Property } from './shared/types/common.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { fetchAssets, pickAsset } from './api/assets.ts';
import App from './App.tsx';
import Catalog from './routes/catalog/Catalog.tsx';
import Elisometer from './routes/elisometer/Elisometer.tsx';
import ErrorPage from './routes/error-page/ErrorPage.tsx';
import Form from './routes/form/Form.tsx';
import Index from './routes/index/Index.tsx';
import Offering from './routes/property/Property.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { fetchLeads } from './api/leads.ts';
import isSessionActive from './api/users.ts';
import './index.scss';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'properties',
    element: <Catalog />,
    loader: fetchAssets,
    errorElement: <ErrorPage />,
  },
  {
    path: 'admin/properties',
    element: <Index />,
    loader: fetchAssets,
    errorElement: <ErrorPage />,
  },
  {
    path: 'admin/leads',
    element: <Elisometer />,
    loader: async (): Promise<Lead[] | void> => {
      isSessionActive();

      return await fetchLeads()
        .then((leads) => leads.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()))
        .catch((error) => alert(error.message));
    },
    errorElement: <ErrorPage />,
  },
  {
    path: 'properties/:propertyId',
    element: <Form />,
    loader: async ({ params }): Promise<Property> => pickAsset(params.propertyId).then((property) => property),
    errorElement: <ErrorPage />,
  },
  {
    path: 'test',
    element: <Offering />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
