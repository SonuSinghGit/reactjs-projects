import React,{useContext} from 'react'
import UserContext from '../src/context/Context'

function Profile() {

    const {user}=useContext(UserContext);
    if(!user) return <div>please login</div>

  return (
    <div>
      Welcome: {user.username}
      <p>password:{user.password}</p>
    </div>
  )
}

export default Profile
