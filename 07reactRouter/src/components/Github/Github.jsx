import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/suyashmishra20003').then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div>
      <div className='text-center m-4 bg-gray-600 text-white' >Github Followers : {data.followers}

      <img src={data.avatar_url} alt="Git Profile Pic" width={300} />
      </div>

     
    </div>
  )
}

export default Github


export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/suyashmishra20003')
    const data = await response.json()
    return data
}