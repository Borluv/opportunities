import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './routes/error-page/ErrorPage.tsx';
import Form from './routes/form/Form.tsx';
import Index from './routes/index/Index.tsx';
import type { Property } from './shared/types/common.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import properties from './assets/properties.ts';
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
    path: 'index',
    element: <Index />,
  },
  {
    path: 'properties/:propertyId',
    element: <Form />,
    loader: ({ params }): Property => {
      const property = properties.filter((property) => property.id === params.propertyId)[0];
      if (!property) throw new Error('Property not found');
      return property;
    },
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
