import React from 'react'
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';

export default function Main() {
  return (
    <div className='flex flex-col h-full w-full justify-between bg-slate-800'>
        <Header/>
        <hr/>
        <Navbar/>
        <hr/>
        <Body/>
        <hr/>
        <Contact/>
        <hr/>
        <Footer/>
        <hr className='pb-2'/>
    </div>
  )
}
