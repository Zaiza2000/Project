import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingToRedirect(){
    const [count ,setCount] = useState(3)
    const navigate = useNavigate();

    useEffect(() =>{
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        },1000)

        //Redirect
        if (count === 0) {
            navigate("/")
        }
        return () => clearInterval(interval)

    },[count, navigate])

    return (
        <div>
            <h1>No Permission, Redirect in {count}</h1>
            
        </div>
    )
}