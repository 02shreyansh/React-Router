import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/02shreyansh')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img className="flex justify-center items-center " src={data.avatar_url} alt="Github Profile" width={300} />
    <p>{data.bio} , {data.name}</p></div>
  )
}

export default Github
export const githubINfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/02shreyansh')
    return response.json();
}