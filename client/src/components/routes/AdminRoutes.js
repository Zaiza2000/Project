import React, {useState , useEffect} from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from "../functions/auth";

export default function AdminRoutes({children}) {
    const {user} = useSelector((state) => ({...state}))
    const [status , setstatus] = useState(false)

    useEffect(()=>{

        if(user && user.token){
            currentAdmin(user.token)
            .then((res)=>{
                console.log(res);
                setstatus(true)

            }).catch((err =>{
                console.log(err)
                setstatus(false)
               
            }))
        }

    },[user])

    return(status 
        ? children
        : <LoadingToRedirect/>)
        
}