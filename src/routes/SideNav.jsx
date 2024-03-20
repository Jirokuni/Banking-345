import { Outlet, Link } from "react-router-dom";

export default function SideNav() {
    return (
      <>
        <div id="sidebar">
          <h1>Manage Users</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
          <nav>
          <ul>
            <li>
              <Link to={`/send`}>Send</Link>
            </li>
            <li>
              <Link to={`/withdraw`}>Withdraw</Link>
            </li>
            <li>
              <Link to={`/deposit`}>Deposit</Link>
            </li>
          </ul>
        </nav>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }