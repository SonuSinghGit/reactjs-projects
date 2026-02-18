import React, { useEffect, useState } from 'react'

function GitHubFollowers() {
  const [data,setData]=useState();
  useEffect( ()=>{
    fetch("https://api.github.com/user/SonuSinghGit")
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data)
      setData(data)
    })
  },[])
  return (
    <div>
      GitHub Followers:
    </div>
  )
}

export default GitHubFollowers
