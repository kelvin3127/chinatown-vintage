import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row text-slate-400 p-2 justify-center'>
        <p>Home</p>
        <div className='border-l-2 border-slate-400 mx-2 '></div>
        <p>Feature</p>
        <div className='border-l-2 border-slate-400 mx-2 '></div>
        <p>Sale</p>
        <div className='border-l-2 border-slate-400 mx-2 '></div>
        <p>Contact</p>
        <div className='border-l-2 border-slate-400 mx-2 '></div>
        <p>Terms</p>
    </div>
  )
}
