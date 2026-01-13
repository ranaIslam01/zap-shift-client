import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
   const {user,loading} = useAuth();

   if(loading) {
      return <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#A3D139" size={50} />
    </div>
   }

   if(!user){
      return <Navigate to ="/login"></Navigate>
   }

   return children
};

export default PrivateRoute;