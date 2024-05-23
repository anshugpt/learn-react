import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile () {
    const {user} = useContext(UserContext)
    if(!user) return (<div>Please Login</div>)
    return (
        <div>
            <p>Welcome {user.username} your password is {user.password}</p>
        </div>
    )
}