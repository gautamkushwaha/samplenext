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
           Content Writer
          </p>
     
      <p className='text-bold text-center mx-[100px] md:mx-[250px] mt-5 text-white font-serif flex justify-center items-center text-xl'>
      As a content writer, I have the privilege of crafting words that captivate and engage audiences. It's a thrilling experience to dive deep into various topics, conducting research and extracting valuable information to create compelling and informative content. Whether it's an engaging blog post, a persuasive sales copy, or an educational article, I strive to deliver content that not only meets the client's objectives but also resonates with the target audience. <br></br>
      <br></br>IIt's an art of storytelling, where I carefully choose the right words, structure sentences, and create a flow that keeps readers hooked till the very end. Being a content writer allows me to continuously expand my knowledge and explore different industries, and I take pride in knowing that my words can make a meaningful impact on readers.
      </p>
      <p className='text-bold text-center mx-[100px] md:mx-[250px] mt-5 text-white font-serif flex justify-center items-center text-xl'>
      One of the most rewarding aspects of being a content writer is the opportunity to connect with people through my words. I have the privilege of giving a voice to businesses, organizations, and individuals, helping them communicate their ideas, products, and stories effectively. <br></br>I<br></br>IIt's an incredible feeling when readers resonate with the content I create, leaving comments, sharing it on social media, or reaching out for further information. I believe in the power of words to inspire, educate, and influence, and as a content writer, I'm dedicated to creating content that adds value to the lives of readers. From researching and brainstorming ideas to meticulously editing and proofreading, I put my heart and soul into every piece of content I write, aiming to leave a lasting impression on the minds of readers.
      </p>
     
     
      

      </div>

      </>
  )
}


