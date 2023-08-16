import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './routes/error-page/ErrorPage.tsx';
import Form from './routes/form/Form.tsx';
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
    path: '/form',
    element: <Form />,
  },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
