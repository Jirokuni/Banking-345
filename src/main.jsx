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
import { Login } from './login.jsx';
import ProtectedRoute from './routes/Authenticator.jsx';
import BudgetForm, { budgetLoader } from './routes/BudgetApp/BudgetForm.jsx';
import BudgetBreakdown from './routes/BudgetApp/BudgetBreakdown.jsx';
import RecentFunds from './routes/BudgetApp/RecentFunds.jsx';
import FutureFunds from './routes/BudgetApp/DisplayAccounts.jsx';
import Account from './Depwi.jsx';
import FAQ from './routes/FAQ.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/FAQs",
    element: <FAQ />
  },
  {
    path: "/app",
    element: 
    // <ProtectedRoute >
      <SideNav />,
    /* </ProtectedRoute>, */
    children: [
      {
        path: "/app/send",
        element: <Send />,
      },
      {
        path: "/app/withdraw-deposit",
        element: <Account />,
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
      },
      {
        path: "/app/budget",
        element: <BudgetForm />,
        loader: budgetLoader,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
