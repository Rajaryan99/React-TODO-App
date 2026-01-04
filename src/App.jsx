import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  

  return (
    <>
     <Navbar/>
     <div className='container mx-auto bg-slate-200 rounded-xl p-3 m-5'>
      <div>
        <h1 className='font-bold'>Your Todo's</h1>
      </div>
     </div>
    </>
  )
}

export default App
