import React from "react";
import { useLoaderData } from "react-router-dom";

export default function News(){
    const {result} = useLoaderData()
    return (
        <>
          <p className="bg-gray-700 text-black-700 p-4">{result}</p>
        </>
    )
}

export const getNews = async () => {
    const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0a3116fc5dmsh9367957187f18e7p1f6110jsn9e0a8e6c26c5',
		'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	return result
} catch (error) {
	console.error(error);
}
}