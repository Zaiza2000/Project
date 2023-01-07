import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

export default function UserRoutes({children}) {
    const {user} = useSelector((state) => ({...state}))

    return(user && user.token 
        ? children
        : <LoadingToRedirect/>)
        
}