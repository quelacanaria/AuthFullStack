import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Appcontent } from '../AppContext';

const AdminOnly = ({ children }) => {
    const { userInformation } = useContext(Appcontent); // Assuming you might have a loading state
    const location = useLocation();
    if (userInformation?.role !== 'admin') {
        return <Navigate to="/Dashboard" replace />;
    }
    return children;
};

export default AdminOnly;