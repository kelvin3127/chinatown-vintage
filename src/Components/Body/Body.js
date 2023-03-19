import React from 'react'
import feature1 from '../../Assets/Photos/Feature/bag1.jpg'
import sale1 from '../../Assets/Photos/Sale/sale1.jpg'


export default function Body() {
  return (
    <body className='self-center text-slate-400 flex-grow'>
        <div className='text-center'>
          <div className='pt-8 px-10 text-lg font-bold'>
                  <p>Welcome to Chinatown Vintage Pawn Shop in Toronto, 
                    Canada! Our store is located in the heart of Chinatown, and we specialize in buying, 
                    selling, and trading unique and valuable vintage items. 
                    We pride ourselves on providing exceptional customer service and offering 
                    the best deals on high-quality vintage items.</p>
          </div>
          <hr className='mt-8'/>
          <div className='flex flex-row m-8'>
            <div className='flex flex-col space-y-10 w-1/2 m-4'>
              <div>
                <p className='text-start font-bold'>About Us</p>
                <p className='text-s text-start'>Our store was founded by Jorgen Wong, 
                a passionate collector of vintage items who has over 30 years of experience in the pawn shop industry. 
                He has built a reputation for being a trustworthy and knowledgeable expert in vintage collectibles. 
                His passion for collecting has led him to travel around the world in search of unique and valuable items to 
                add to his collection and sell to his customers.</p>
              </div>  
              <div>
                <p className='text-start font-bold'>What We Do</p>
                <p className='text-s text-start'>At Chinatown Vintage Pawn Shop, 
                we specialize in buying, selling, and trading a wide variety of vintage items,
                 including antique furniture, vintage clothing, rare collectibles, 
                 and much more. We take pride in offering fair prices 
                 and top-quality items to our customers. We also offer appraisal services 
                 for those looking to get a value for their vintage items.</p>
              </div> 
              <div>
                <p className='text-start font-bold'>What You Can Expect</p>
                <p className='text-s text-start'>When you visit our store, you can expect to find a wide selection of unique and valuable vintage items
                   that you won't find anywhere else. Our staff is friendly and knowledgeable, 
                   and we're always happy to answer any questions you may have about our items. 
                   We also offer a layaway program for those who want to make payments on their purchases over time.</p>
              </div>
            </div>
            <div className='flex flex-col space-y-10 w-1/2 m-4'>
              <div>
                <p className='text-start font-bold'>Feature Product</p>
                <p className='text-s text-start'>We have a constantly changing inventory of featured products, 
                so be sure to check back often to see what's new in our store. Some of our current featured items include a vintage Rolex watch, 
                a rare 1950s jukebox, and an antique Chinese tea set.</p>
              </div>
              <div className='flex flex-row space-x-2'>
                <img className="w-28 h-28" src={feature1}/>
                <img className="w-28 h-28" src={feature1}/>
                <img className="w-28 h-28" src={feature1}/>
                <img className="w-28 h-28" src={feature1}/>
              </div>
              <div>
              <p className='text-start font-bold'>Products on Sale.</p>
                <p className='text-s text-start'>We often have sales on selected items in our store,
                 so be sure to check our website or visit our store to see what's on sale. Currently,
                we have a 20% off sale on all vintage clothing and accessories.</p>
              </div>
              <div className='flex flex-row space-x-2'>
                <div className='flex flex-row space-x-2'>
                <img className="w-28 h-28" src={sale1}/>
                <img className="w-28 h-28" src={sale1}/>
                <img className="w-28 h-28" src={sale1}/>
                <img className="w-28 h-28" src={sale1}/>
              </div>
              </div>
            </div>

          </div>
        </div>
    </body>
  )
}
