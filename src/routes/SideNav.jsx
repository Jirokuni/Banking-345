import { Outlet, Link } from "react-router-dom";
import App from "../Router";
import NavBar from "./NavBar";

export default function SideNav() {
  return (
    <>
    <NavBar />
      <div className="dash-container">
      <div id="sidebar">
        <h1>Manage Users</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/app/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`/app/send`}>Send</Link>
            </li>
            <li>
              <Link to={`/app/withdraw`}>Withdraw or Deposit</Link>
            </li>
            <li>
              <Link to={`/app/deposit`}>Deposit</Link>
            </li>
            <li>
              <Link to={`/app/unique`}>Feature</Link>
            </li>
            <li>
              <Link to={`/app/create-user`}>Create User</Link>
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
