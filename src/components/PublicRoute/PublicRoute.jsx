import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../utils/auth/auth';

const PublicRoute = ({ children }) => {
    const user = useAuthStore((state) => state.user);
    if (user) {
        return <Navigate to="/Session" />;
    }
    return children;
};

export default PublicRoute;
