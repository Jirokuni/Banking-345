import { Outlet, Link } from "react-router-dom";

export default function SideNav() {
    return (
      <>
        <div id="sidebar">
          <h1>Manage Users</h1>
          <nav>
          <ul>
            <li>
              <Link to={`/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`/send`}>Send</Link>
            </li>
            <li>
              <Link to={`/withdraw`}>Withdraw</Link>
            </li>
            <li>
              <Link to={`/deposit`}>Deposit</Link>
            </li>
            <li>
              <Link to={`/unique`}>Feature</Link>
            </li>
          </ul>
        </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    )
  }