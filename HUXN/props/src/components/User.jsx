import React from 'react'

function User(props) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Age:{props.age}</h1>
      <h1>Email:{props.email}</h1>
      <h1>Address:{props.address}</h1>
     
    </div>
  )
}

export default User;
