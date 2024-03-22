import { Navigate } from "react-router-dom";

function ProtectedRoute({children, email}) {
    const isAdmin = JSON.parse(localStorage.getItem('allAccounts')).find(user => user.email === email );

    if (isAdmin) {
        return children
    } else {
        console.log('log in is false');
        return <Navigate to="/log-in" />;
    }
}

export default ProtectedRoute