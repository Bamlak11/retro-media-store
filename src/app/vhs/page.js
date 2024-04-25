import React from 'react'
import Navbar from '../components/Navbar';

const vhs = () => {
  return (
    <main className="flex min-h-screen bg-blue-400">
    <div className='mt-2 mx-auto px-2 py-2 max-w-screen w-full'>
      <Navbar />
      <h1>VHS Page</h1>
    </div>
    </main>
  )
}

export default vhs
