import { Outlet, Link } from "react-router-dom";
import App from "../Router";
import NavBar from "./NavBar";
import { useState } from "react";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <NavBar />
      <div className={`dash-container ${isOpen ? "menu-open" : ""}`}>
      <div id="sidebar" className={isOpen ? "open" : ""}>
        <h1>Manage Users</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/app/dashboard`} onClick={toggleMenu}>Dashboard</Link>
            </li>
            <li>
              <Link to={`/app/send`} onClick={toggleMenu}>Transfer</Link>
            </li>
            <li>
              <Link to={`/app/withdraw-deposit`} onClick={toggleMenu}>Withdraw or Deposit</Link>
            </li>
            <li>
              <Link to={`/app/unique`} onClick={toggleMenu}>Feature</Link>
            </li>
            <li>
              <Link to={`/app/create-user`} onClick={toggleMenu}>Create User</Link>
            </li>
            <li>
              <Link to={`/app/budget`} onClick={toggleMenu}>Budget</Link>
            </li>
          </ul>
          <button className="burger-menu-btn" onClick={toggleMenu}>
            Close
          </button>
        </nav>
      </div>
      <div id="dash-display">
        <Outlet />
      </div>
      </div>
      <button className={isOpen ? "toggle-btn open": "toggle-btn"} onClick={toggleMenu}>
        Toggle Sidebar
      </button>
    </>
  );
}
