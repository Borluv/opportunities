import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './routes/error-page/ErrorPage.tsx';
import Form from './routes/form/Form.tsx';
import Index from './routes/index/Index.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { fetchAssets, pickAsset } from './api/assets.ts';

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
    loader: async ({ params }) => pickAsset(params.propertyId).then((property) => property),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
