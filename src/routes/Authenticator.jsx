import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    if (isLoggedIn) {
        return children
    } else {
        console.log('log in is false');
        return <Navigate to="/log-in" />;
    }
}

export default ProtectedRoute