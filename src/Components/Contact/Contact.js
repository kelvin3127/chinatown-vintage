import React from 'react'

export default function Contact() {
  return (
    <div className='m-2 text-slate-400'>
        <div className='flex flex-row'>
          <div className='w-2/4'>
           <p></p>
           <p></p>
           <p></p>
          </div>
          <div className='p-6 w-1/4'>
            <p className='text-center'>Contact Us</p>
            <form className='flex flex-col space-y-2'>
              <label className='text-start'>Name</label>
              <input className="px-2" type="text" placeholder='Name'/>
              <label className='text-start'>Email</label>
              <input className="px-2" type="email" placeholder='Email'/>
              <label className='text-start'>Message</label>
              <input className="px-2" type="text" placeholder='Message'/>
              <button className='bg-slate-700 rounded my-4'>Submit</button>
            </form>
          </div>
        </div>
    </div>
  )
}
