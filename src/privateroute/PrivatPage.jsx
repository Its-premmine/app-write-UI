import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivatePage = () => {
    let loging = true
    if(loging){
        return <Outlet/>
    }else{
        return <Navigate path={"/"}/>
    }
}

export default PrivatePage


