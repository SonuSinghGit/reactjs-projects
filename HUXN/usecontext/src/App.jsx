import React from 'react'
import UserProfile from './components/UserProfile'
import { UserProvider } from './UserContext'
import UpdateUser from './components/UpdateUser'
const App = () => {
  return (
    <UserProvider>
      <h1>Create Contect and use it</h1>
      <UserProfile/>
      <UpdateUser/>
    </UserProvider>
  )
}

export default App;
