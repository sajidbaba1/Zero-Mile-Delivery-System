import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ element, requiredRoles = [] }) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
        return <Navigate to="/parcels" replace />;
    }

    return element;
}

export default PrivateRoute;
