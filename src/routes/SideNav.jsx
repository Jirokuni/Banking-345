import { Outlet, Link } from "react-router-dom";
import App from "../Router";

export default function SideNav() {
  return (
    <>
      <App />
      <div className="dash-container">
      <div id="sidebar">
        <h1>Manage Users</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/user/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`/user/send`}>Send</Link>
            </li>
            <li>
              <Link to={`/user/withdraw`}>Withdraw</Link>
            </li>
            <li>
              <Link to={`/user/deposit`}>Deposit</Link>
            </li>
            <li>
              <Link to={`/user/unique`}>Feature</Link>
            </li>
            <li>
              <Link to={`/user/create-user`}>Create User</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="dash-display">
        <Outlet />
      </div>
      </div>
    </>
  );
}
