import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex p-3 justify-between bg-slate-950 text-white'>
        <div>
            <span className='font-bold text-xl'>iTask</span>
        </div>
        <ul className='flex gap-8'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}
