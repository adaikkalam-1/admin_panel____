import React from 'react'
import Layout from '../Layout';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
const user=sessionStorage.getItem("user_data");
const result=user ? <Outlet/> : <Navigate to='/login'/> 
return result
}

export default ProtectedRoute