import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { fetchAssets, pickAsset } from './api/assets.ts';
import App from './App.tsx';
import ErrorPage from './routes/error-page/ErrorPage.tsx';
import Form from './routes/form/Form.tsx';
import Index from './routes/index/Index.tsx';
import type { Property } from './shared/types/common.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
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
    element: <Index />,
    loader: fetchAssets,
    errorElement: <ErrorPage />,
  },
  {
    path: 'properties/:propertyId',
    element: <Form />,
    loader: async ({ params }): Promise<Property> => pickAsset(params.propertyId).then((property) => property),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
