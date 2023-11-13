import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
   <AuthProvider>
   <div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={router}></RouterProvider>
  </div>
   </AuthProvider>
  </HelmetProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)
