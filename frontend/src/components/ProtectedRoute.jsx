import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth';

const ProtectedRoute = ({children, allowedRole}) => {
    const { user, loading } = useAuth();


    if(loading) {
      return <div>Loading ...</div>
    }

    if (!user) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRole && user.role !== allowedRole) {
      return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute