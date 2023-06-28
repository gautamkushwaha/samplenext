import React from 'react';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import Cards from './Home/Cards';


export default function About() {
  return (
    <>
    
      <div className=' w-[100vw] h-screeen bg-black my-[150px] font-serif' >
        <h1 className='text-center text-3xl text-bold my-5 text-white' >About</h1>
        <div className=" ">
          <h1 className=" font-bold text-white">
            <img  src='/gautam.jpeg'  alt='gautam' className='w-[90%] md:w-[30%] h-[90%] md:h-[30%] mx-auto'/>
          </h1>
        </div>
      <p className="text-3xl text-bold  text-center text-white my-3">Hello My name is Gautam</p>
      <p className="text-white text-center font-bold text-5xl pt-4">
           SEO Analyzer
          </p>
     
      <p className='text-bold text-center mx-[100px] md:mx-[250px] mt-5 text-white font-serif flex justify-center items-center '>
      An SEO analyzer is an essential tool for optimizing your website's performance in search engine rankings. By evaluating various aspects of your site, such as keyword usage, meta tags, backlinks, and page load speed, an SEO analyzer provides valuable insights into areas that require improvement. <br></br><br></br>It helps identify opportunities to enhance your site's visibility, traffic, and overall search engine optimization strategy. With the help of an SEO analyzer, you can make data-driven decisions to boost your website's organic search performance, outrank competitors, and attract a larger audience to your online presence.
      </p>
      <p className='text-bold text-center mx-[100px] md:mx-[250px] mt-5 text-white font-serif flex justify-center items-center '>
      Achieving higher search engine rankings is crucial for driving organic traffic and increasing your online visibility. An SEO analyzer helps you understand the factors that impact your search engine rankings, such as keyword relevance, content quality, and website structure.<br></br><br></br> By analyzing these elements, you can identify optimization opportunities to improve your website's ranking potential. With accurate data and actionable recommendations provided by an SEO analyzer, you can fine-tune your website's on-page and off-page SEO elements to align with search engine algorithms and maximize your chances of appearing in top search results.
      </p>
     
    

      </div>

      </>
  )
}


