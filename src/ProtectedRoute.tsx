import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom"
import { useAuth } from "./Context/AuthContext";


interface Props {
    isAuthenticated:boolean;
    children:ReactNode;
}

const ProtectedRoute = ({children}:Props) => {

    const {state:{isAuthenticated}} = useAuth()

    if(!isAuthenticated){
        return <Navigate to={"/login"}/>;
    }

  return (
 children
  )
}

export default ProtectedRoute
