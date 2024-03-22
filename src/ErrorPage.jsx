import { Link, useRouteError } from "react-router-dom";
import "./error.css";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div>
        <h1 className="error-heading">Oops!</h1>
        <h3 className="error-subheading">Sorry, an unexpected error has occurred.</h3>
        <p>
          The link you are accessing is unfortuately{" "}
          <i>{error.statusText || error.message}</i>
        </p>
      </div>

      <div className="return-btn">
        <Link to="/"><p>Return to Home Page</p></Link>
      </div>
    </div>
  );
}
