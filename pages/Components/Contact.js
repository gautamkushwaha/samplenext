import Link from 'next/link'
import React, { useRef, useState } from "react";




export default function App() {


  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const mobileRef = useRef(null);
  const descriptionRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
  
    setSubmitted(true);
    // Additional form submission logic if needed
    (setSubmitted(true) &  alert("Thank you for contacting!"))
  };
  
  function Submit(e) {
    e.preventDefault();



    const formEle = document.querySelector("form");
    const name = nameRef?.current?.value;
    const mobile = mobileRef?.current?.value;
    const mail = mailRef?.current?.value;
    const description = descriptionRef?.current?.value;

    console.log(name, mobile, mail, description)

    // pushing data to google sheet

    const formDatab = new FormData(formEle);
    console.log(formDatab);

    setLoading(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbzIK8u7fc8Fri6RQ5XYnmKH0kN6Or3x0La_RWzucuRb6r0nlCGxh8w5hfqNqiVsf9SC/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        console.log(data);
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });

  }
  return (
    <>

      <div className=" w-[100vw] bg-black relative mt-[100px] md:mt-[200px]" id="contact">
        <div className="w-[100%] my-[100px] md:my-[100px] flex-col flex md:flex-row items-center ">
          <div className=" w-[70%] md:w-[50%]  ml-[10px] md:ml-[100px] md:mr-[-50px]">
            <img className=" w-[220%] md:w-[90%]  md:h-[500%] ml-50 my-10" src="https://i.pinimg.com/564x/68/b1/a3/68b1a3ed75001d1c92da4eb8a0e7545e.jpg" />

          </div>

          <div className="w-[90%] md:mr-[60px] ">
            <div className=" bg-black text-center font-serif">
              <h1 className="text-center text-4xl md:text-6xl text-white ">Contact Me Form</h1>
              <h2 className="text-center text-sm md:text-2xl my-5 md:my-10 text-white ">
                Leave your message here. I will get back to you .
              </h2>
            </div>
            <form className=" flex  flex-col" onSubmit={(e) => Submit(e)}>
              <input placeholder="Your Name"
                ref={nameRef}
                required={true} name="Name" type="text" className=" w-[100%] md:w-[80%] h-[50px] mx-auto border border-black rounded p-2" />
              <input placeholder="Your Email" name="Email" type="text"
                ref={mailRef}
                required={true}
                className="  w-[100%]  md:w-[80%]  h-[50px] mx-auto border border-black mt-10 rounded p-2" />
              <input placeholder="9876543210" name="Message" type="text"
                ref={mobileRef}
                required={true}

                className="   w-[100%]   md:w-[80%] h-[50px] mx-auto border border-black mt-10 rounded p-2" />
              <textarea placeholder="Your Message" name="Message"
                ref={descriptionRef}
                required={true} type="text" className="  w-[100%] md:w-[80%]  h-[70px] mx-auto border border-black mt-10 rounded p-2" />
              <input name="Name" type="submit" className="  w-[100%]  md:w-[80%] h-[70px] mx-auto border border-black bg-indigo-500 hover:bg-blue-700 mt-10 rounded"
                loading={loading} />
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

{/* //contact
      <div className="w-[100vw]  grid grid-cols-2 gap-1 mx-[100px]">
         <div className="w-[50%] App mt-[300px] bg-black font-serif">
            <img className=" w-[100%]  h-[100%] mb-5 " src="https://i.pinimg.com/564x/44/8e/7f/448e7f1922ff759eab7bb97d94bba410.jpg" />
         </div>
        <div className="font-sans mt-[150px] bg-black text-center grid">
           <h1 className="text-center text-4xl p-5 text-white ">Contact Me Form</h1>
           <h2 className="text-center text-2xl mx-auto my-1 text-white 0">
              Leave your message here. I will get back to you .
           </h2>
      
          <div className=" m-10 ">
           <form className=" flex  flex-col p-10" onSubmit={(e) => Submit(e)}>
            <input placeholder="Your Name" name="Name" type="text" className=" w-[90%] h-[50px] mx-auto border border-black rounded p-2"/>
            <input placeholder="Your Email" name="Email" type="text" className="  w-[90%] h-[50px] mx-auto border border-black mt-10 rounded p-2"/>
            <input placeholder="9876543210" name="Message" type="text" className="   w-[90%] h-[50px] mx-auto border border-black mt-10 rounded p-2"/>
            <textarea placeholder="Your Message" name="Message" type="text"  className="  w-[90%] h-[70px] mx-auto border border-black mt-10 rounded p-2"/>
            <input name="Name" type="submit" className="  w-[100%] h-[70px] border border-black bg-indigo-500 hover:bg-blue-700 mt-10 rounded"/>
           </form>
          </div>
        </div>
      </div>
      </>
    ); */}
