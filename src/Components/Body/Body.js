import React from 'react'

export default function Body() {
  return (
    <body className='self-center text-slate-400 flex-grow'>
        <div className='text-center'>
          <p className='pt-8 text-2xl'>A Vintage store</p>
          <div className='flex flex-row m-8'>
            <div className='flex flex-col space-y-10 w-1/2 m-4'>
              <div>
                <p>Aliquam ultrices sagittis.</p>
                <p className='text-xs'>Elementum integer enim neque volutpat ac
                                       Sodales neque sodales ut etiam. 
                                       Faucibus ornare suspendisse sed nisi lacus sed.</p>
              </div>  
              <div>
                <p>Interdum velit euismod in pellentesque massa placerat duis.</p>
              </div> 
              <div>Elementum integer enim neque volutpat</div>
            </div>
            <div className='flex flex-col space-y-10 w-1/2 m-4'>
              <div>
                <p>Aliquam ultrices sagittis orci a scelerisque purus.</p>
                <p className='text-xs'>Cras adipiscing enim eu turpis egestas. Vel pretium lectus quam id leo in. 
                   Felis bibendum ut tristique et. Donec massa sapien faucibus et molestie ac. 
                   Nunc lobortis mattis aliquam faucibus purus in massa. 
                   Ac tortor dignissim convallis aenean et tortor at.
                   Pellentesque nec nam aliquam sem. </p>
              </div>
              <div>
              <p>Aliquam ultrices sagittis orci a scelerisque purus.</p>
                <p className='text-xs'>Cras adipiscing enim eu turpis egestas. Vel pretium lectus quam id leo in. 
                   Felis bibendum ut tristique et. Donec massa sapien faucibus et molestie ac. 
                   Pellentesque nec nam aliquam sem. </p>
              </div>
            </div>

          </div>
        </div>
    </body>
  )
}
