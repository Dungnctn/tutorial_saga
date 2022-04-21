import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticate } from '../../features/auth/checkAuth/checkAuth';

const PrivateRoute = (props) => {
  // console.log('prop', props);
  // console.log(localStorage.getItem("access_token"));
  const isCheckAdmin = JSON.parse(localStorage.getItem("access_token"));
  // console.log('admin',isCheckAdmin);
  // console.log('logger',isLogger);
  if(isCheckAdmin){
    if(isCheckAdmin.user.role === 0){
      return <Navigate to={'/'} />
    }else{
      return props.children
    }
  }
  
  return <Navigate to={'/'} />
}

export default PrivateRoute