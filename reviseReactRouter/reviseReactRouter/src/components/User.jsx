import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {id} = useParams()
    return (
        <>
          <h1 className="bg-gray-700 text-black-700 p-4 text-3xl">User : {id}</h1>
        </>
    )
}