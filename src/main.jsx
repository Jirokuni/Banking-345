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
import Home from './home.jsx';
import LogIn from './routes/LogIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/user",
    element: <SideNav />,
    children: [
      {
        path: "/user/send",
        element: <Send />,
      },
      {
        path: "/user/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/user/deposit",
        element: <Deposit />,
      },
      {
        path: "/user/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/unique",
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
