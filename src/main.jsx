import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './Components/Cadastro';
import Login from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Ajuda from './Components/Ajuda';

import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/cadastro',
      element: <Cadastro />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/ajuda',
      element: <Ajuda />
    }
  ]
);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}