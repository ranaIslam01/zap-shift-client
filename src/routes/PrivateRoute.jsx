import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import { ClipLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
   const {user,loading} = useAuth();
   const location = useLocation();


   if(loading) {
      return <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#A3D139" size={50} />
    </div>
   }

   if(!user){
      return <Navigate state={{from: location.pathname}} to ="/login"></Navigate>
   }

   return children
};

export default PrivateRoute;