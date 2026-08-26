import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
const UserProfile = () => {
   const {user}=useContext(UserContext);

  return (
    <div>
      <h1>User Profile !</h1>
      <p>NAME: {user.name} </p>
    </div>
  )
}

export default UserProfile
