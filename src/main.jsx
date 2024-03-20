import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import './App.css'
import Send from './routes/Send.jsx';
import SideNav from './routes/SideNav.jsx';
import Withdraw from './routes/Withdraw.jsx';
import Deposit from './routes/Deposit.jsx';
import ErrorPage from './ErrorPage.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Unique from './routes/Unique.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideNav />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "send",
        element: <Send />,
      },
      {
        path: "withdraw",
        element: <Withdraw />,
      },
      {
        path: "deposit",
        element: <Deposit />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "unique",
        element: <Unique />,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
