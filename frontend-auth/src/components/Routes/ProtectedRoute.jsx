import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Appcontent } from '../AppContext';

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(Appcontent); // Assuming you might have a loading state
    const location = useLocation();
    if (!token) {
        return <Navigate to="/"  replace />;
    }
    return children;
};

export default ProtectedRoute;