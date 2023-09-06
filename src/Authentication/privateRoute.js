import React, {useContext} from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../store/authContext';

const PrivateRoute = () => {
  const authCtx = useContext(AuthContext);

  
  return authCtx.isLoggedIn ? <Outlet />  : <Navigate to={"/"} />
};

export default PrivateRoute;
