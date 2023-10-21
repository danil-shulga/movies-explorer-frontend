import React from 'react';
import { Navigate } from 'react-router-dom'

function ProtectedRoute(props) {
  if (!props.loggedIn) return <Navigate to='/' />
  return props.children;
}

export default ProtectedRoute;
