import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers || "error"}
    <img className="flex justify-center items-center " src={data.avatar_url || "Img"} alt="Github Profile" width={300} />
    <p>{data.bio || "Bio"} , {data.name || "Name"}</p></div>
  )
}

export default Github
export const githubINfoLoader=async ()=>{
    try{
      const response=await fetch('https://api.github.com/users/02shreyansh')
      return response.json();
    }catch{
      return "error";
    }
}