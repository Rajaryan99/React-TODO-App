import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className='container mx-auto bg-slate-200 rounded-xl p-3 m-5 min-h-[80vh]'>
        <div className="addTodo">
          <h2 className='font-bold text-xl'>Add a Todo</h2>
          <input type="text" placeholder='Enter Todos' className='bg-white p-2 rounded-2xl w-2xl mt-3 mb-3' />
          <button className='bg-slate-950 text-white  rounded-2xl  px-4 py-2 font-bold ml-3'>Add</button>
        </div>
        <h1 className='font-bold text-xl'>Your Todo's</h1>
        <div className="todos ">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className='buttons'>
              <button onClick={handleEdit}><i className="fa-solid fa-pen-to-square ml-3"></i></button>
              <button onClick={habdleDelete}><i className="fa-solid fa-trash ml-3 hover:text-red-600 "></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
