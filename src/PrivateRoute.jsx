import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) 
        return <Loading></Loading>

    if (!user?.email) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;