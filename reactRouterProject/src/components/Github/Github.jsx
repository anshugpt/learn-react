import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function GitHub(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/anshugpt")
    //     .then(res => res.json())
    //     .then(res => {setData(res)})
    // }, [])
    return (
        <>
            <div className="bg-gray-600 text-white-700 text-xl">
            <h1>Github Followers: {data.followers}</h1>
            <h1>Github Following: {data.following}</h1>
            <img src={data.avatar_url} alt="Anshu" width={300}/>
            </div>
            
        </>
    )
}

export default GitHub

export const githubInfo = async function (){
    const res = await fetch('https://api.github.com/users/anshugpt')
    return res.json()
}