import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({ children }) {
  return (
   <div class="content">
    <Navbar/>
   { children }
    <Footer/>
   </div>
  );
}
