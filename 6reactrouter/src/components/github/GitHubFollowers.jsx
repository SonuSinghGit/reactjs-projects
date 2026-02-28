import React, { useEffect, useState } from 'react'

function GitHubFollowers() {
  const [data,setData]=useState();
  useEffect( ()=>{
    fetch("https://api.github.com/users/SonuSinghGit")
    .then((res)=> res.json())
    .then((data)=>{
      console.log("data",data)
      setData(data)
    })
  },[])
  return (
    <div>
      GitHub Followers:{data?.followers}
    </div>
  )
}

export default GitHubFollowers
