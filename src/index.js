import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={Router} >
    <App />
  </RouterProvider>
);
