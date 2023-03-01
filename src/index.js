import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormComponent from './Form';
import KendoPage from './Kendo';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactComponent from './Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/form",
    element: <FormComponent/>,
  },
  {
    path: "/contact",
    element: <ContactComponent/>,
  },
  {
    path: "/kendo",
    element: <KendoPage />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();