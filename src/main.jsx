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
import CreateAccountForm from './routes/createAccount.jsx';
import { LogIn } from './routes/LogIn.jsx';
import ProtectedRoute from './routes/Authenticator.jsx';

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
    path: "/app",
    element: 
    <ProtectedRoute >
      <SideNav />
    </ProtectedRoute>,
    children: [
      {
        path: "/app/send",
        element: <Send />,
      },
      {
        path: "/app/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/app/deposit",
        element: <Deposit />,
      },
      {
        path: "/app/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/app/unique",
        element: <Unique />,
      },
      {
        path: "/app/create-user",
        element: <CreateAccountForm />,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
