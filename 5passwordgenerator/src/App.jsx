import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen text-3xl text-amber-300 px-4 py-4 text-center'>
      Password Generator
    </div>
  )
}

export default App
