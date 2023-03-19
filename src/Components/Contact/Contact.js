import React from 'react'

export default function Contact() {
  return (
    <div className='m-2 text-slate-400'>
        <div className='flex flex-row'>
          <div className='p-6 w-2/4'>
           <p className='text-center font-bold pb-2'>Contact Us</p>
           <p>If you have any questions or comments about our store, 
            our products, or our services, please feel free to contact us using our online contact form.
            We'll get back to you as soon as possible.</p>
            <hr className='my-2'/>  
            <div className='flex flex-row pt-2 space-x-8'>
              <div>
                <p className='font-bold pb-2'>Contact</p>
                <p>Phone Number: 123123123</p>
                <p>Fax: 24332254</p>
                <p>Email: 12313123</p>
              </div>
              <div>
                <p className='font-bold pb-2'>Location</p>
                <p>Chinatown Vintage Inc.</p>
                <p>222 Spidina C16</p>
                <p>Toronto, ON</p>
              </div>
            </div>
            <hr className='my-2'/>
           <div className='flex flex-row space-x-4'>
                  <a href="">Insta</a>
                  <a href="">Facebook</a>
                  <a href="">Twitter</a>
                  <a href="">Kjiji</a>
                  <a href="">Other</a>
            </div>
          </div>
          <div className='p-6 w-1/4'>
            <form className='flex flex-col space-y-2'>
              <label className='text-start'>Name:</label>
              <input className="px-2" type="text" placeholder='Name'/>
              <label className='text-start'>Email:</label>
              <input className="px-2" type="email" placeholder='Email'/>
              <label className='text-start'>Message:</label>
              <input className="px-2 h-20" type="text" placeholder=''/>
            </form>
            <button className='bg-slate-700 rounded mt-6 w-full'>Submit</button>
          </div>
          <div className='p-6 w-2/4'>
            <p className='font-bold text-center'>Map</p>
          </div>
        </div>
    </div>
  )
}
