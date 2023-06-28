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
            <img src='/gautam.jpeg' alt='gautam' className='w-[90%] md:w-[30%] h-[90%] md:h-[30%] mx-auto' />
          </h1>
        </div>
        <p className="text-3xl text-bold  text-center text-white my-3">Hello My name is Gautam</p>
        <p className="text-white text-center font-bold text-5xl pt-4">
          Web Developer
        </p>

        <p className='text-bold text-centermx-[100px] md:mx-[250px] mt-5 text-white font-serif flex justify-center items-center '>As a MERN stack developer, I am a skilled professional who specializes in creating web applications using the powerful combination of MongoDB, Express.js, React, and Node.js. With extensive knowledge of both frontend and backend development, I excel in building robust and scalable applications from the ground up.

          <br></br>
          <br></br>
          On the frontend, I leverage my expertise in React to craft engaging user interfaces. By utilizing React's component-based architecture and virtual DOM manipulation, I create dynamic and interactive experiences for users. I have a keen eye for design and strive to deliver pixel-perfect layouts that not only look visually appealing but also provide seamless functionality.</p>
        <p className='text-bold text-center mx-[100px] md:mx-[250px] mt-5 text-white font-serif  '>
          On the backend, I utilize Node.js and Express.js to handle server-side logic and API integrations. I work closely with databases, particularly MongoDB, to store and retrieve data efficiently. With a deep understanding of RESTful API development, I ensure smooth communication between the frontend and backend components of the application.
          <br></br>
          <br></br>
          In addition to my technical skills, I am a strong collaborator and effective problem solver. I enjoy working in agile environments, collaborating with cross-functional teams to deliver high-quality products. With a passion for learning and staying updated with the latest industry trends, I am dedicated to continuously improving my skills and delivering exceptional results as a MERN stack developer.</p>
      </div>

    </>
  )
}


