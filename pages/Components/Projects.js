import React from "react";
import Link from "next/link";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";
import { BsFillForwardFill } from "react-icons/bs";

// create a hover button using tailwind css

const hoverButton = () => {
    // create a hover button using taiwind css

    return (
        <div>
            <div class="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#ff0000] text-base font-medium text-white hover:bg-[#ff0000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                        Options
                        {/* <!-- Heroicon name: solid/chevron-do ̰wn --> */}
                        <svg
                            class="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#ff0000"
                            aria-hidden="true"
                        >
                            <path fill-rule="evenodd" d="M10 14l5-5m0 0l-5-5m5 5H5" />
                        </svg>
                    </button>
                </div>

                {/* <!--
                    Dropdown panel, show/hide based on dropdown state.

                    Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                --> */}
                <div class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"></div>
            </div>
        </div>
    );
};


//Featured Projects sections the whole parts

export default function Projects() {
    return (
        <div className="w-[100vw] my-[100px] md:my-[200px]" id="projects">

            {/* the first parts */}
            <div className=" w-[90%] md:w-[60%]  grid grid-cols-10 gap-[5%] justify-center items-center mx-auto my-[50px]">
                <div className=" w-[100%] col-span-8 flex flex-col justify-center items-center py-5 m-auto">
                    <h2 className="text-white text-xl  md:text-6xl font-bold font-serif py-5 left-0">
                        Featured Projects
                    </h2>
                    <p className="text-white font-serif text-[20px]">
                        {" "}
                        These are some featured project, which exemplify my expertise and
                        achievements, representing the successful culmination of my efforts
                        and innovative approach.
                    </p>
                </div>

                {/* Button alongside the featured project */}
                <div className=" w-[100%] col-span-2  py-5  float-right  m-auto">
                    <div className="m-auto text-center ">
                        <Link
                            className="bg-indigo-500 hover:bg-blue-700 text-black rounded  p-3 my-auto font-serif text-[15px]"
                            href="https://vercel.com/dashboard"
                            target="_blank"
                        >
                            More on vercel
                        </Link>
                    </div>
                </div>
            </div>


            {/* starting with the project pics and hover and clickable things */}

            {/* 1.spotmies */}
            <div className=" w-[100%]  flex-col flex md:flex-row flex-2 items-center justify-center">
                <div className=" w-[90%] md:w-[60%]  grid grid-cols-2 gap-[5%] justify-center items-center">
                    <div class="relative inset-0 bg-black opacity-100 hover:opacity-50">
                        <img src="spotmies.png" alt="Image" class=" w-[60%] md:w-full" />
                        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start text-white p-4 opacity-0 hover:opacity-100">
                            <h1 class="text-2xl font-bold ">Spotmies</h1>
                            <p class>
                                Its business Solution Company that works on web and web 3.0
                            </p>
                            <div class="absolute w-full  bottom-0 right-0 p-4 text-black opacity-0 hover:opacity-100 flex">
                                <Link
                                    href="https://www.spotmies.com/"
                                    target="_blank"
                                    class="text-white mr-4 bottom-1"
                                >
                                    <BsFillForwardFill
                                        size={30}
                                        className="text-white hover:text-black"
                                    />
                                </Link>
                                <a href="#" class="text-gray-500 hover:text-gray-800">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div class="relative inset-0 bg-black opacity-100 hover:opacity-50">
                        <img src="weat.png" alt="Image" class="w-[60%] md:w-full" />
                        {/* <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50"></div> */}
                        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100">
                            <h1 class="text-2xl font-bold text-white">Weather App</h1>
                            <p>
                                This app fetch the real time weater condition of the given place
                            </p>
                            <div class="absolute w-full  bottom-0 right-0 p-4 text-black opacity-0 hover:opacity-100 flex">
                                <Link
                                    href="https://weather-app-alpha-lyart-23.vercel.app/"
                                    target="_blank"
                                    class="text-gray-500 hover:text-gray-800 mr-4 bottom-1"
                                >
                                    <BsFillForwardFill
                                        size={30}
                                        className="text-white hover:text-black"
                                    />
                                </Link>
                                <a href="#" class="text-gray-500 hover:text-gray-800">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="relative inset-0 bg-black opacity-100 hover:opacity-50">
                        <img src="NestNepal.png" alt="Image" class="w-[60%] md:w-full" />
                        {/* <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50"></div> */}
                        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-black opacity-0 hover:opacity-100">
                            <h1 class="text-2xl font-bold">NestNepal</h1>
                            <p>
                                A web Hosting company based in Nepal that offers a range of
                                services.
                            </p>
                            <div class="absolute w-full  bottom-0 right-0 p-4 text-black opacity-0 hover:opacity-100 flex">
                                {/* <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100"> */}
                                {/* <Link href="https://github.com/pdkkg/weather-app.git"  target="_blank" class="text-gray-500 hover:text-gray-800 mr-4">
                                <FaGithubSquare  size={30} className="text-white hover:text-black"/>
                                </Link> */}
                                <Link
                                    href="https://nestnepal.com/"
                                    target="_blank"
                                    class="text-gray-500 hover:text-gray-800 mr-4"
                                >
                                    <BsFillForwardFill
                                        size={30}
                                        className="text-white hover:text-black"
                                    />
                                </Link>
                                <a href="#" class="text-gray-500 hover:text-black">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative inset-0 bg-black opacity-100 hover:opacity-50">
                        <img src="calc.png" alt="Image" className="w-[70%] md:w-full" />
                        {/* <div class="absolute top-0 left-0 full h-full bg-black opacity-0 hover:opacity-50"></div> */}
                        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100">
                            <h1 class="text-2xl font-bold text-black">Dictionary App</h1>
                            <p class="text-black">
                                You can search for words to get their meaning.
                            </p>
                            <div class="absolute w-full  bottom-0 right-0 p-4 text-white opacity-0 hover:opacity-100 flex">
                                {/* <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-4 text-white opacity-0 hover:opacity-100"> */}
                                <Link
                                    href="https://github.com/pdkkg/calculator"
                                    target="_blank"
                                    class="text-gray-500 hover:text-gray-800 mr-4"
                                >
                                    <FaGithubSquare
                                        size={30}
                                        className="text-white hover:text-black"
                                    />
                                </Link>
                                <Link
                                    href="https://calculator-umber-seven.vercel.app/"
                                    target="_blank"
                                    class="text-gray-500 hover:text-gray-800 mr-4"
                                >
                                    <BsFillForwardFill
                                        size={30}
                                        className="text-white hover:text-black"
                                    />
                                </Link>
                                <a href="#" class="text-gray-500 hover:text-gray-800">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Explore more section button */}
            <div className="w-[90%] md:w-[60%]  flex justify-center items-center mx-auto my-[50px] md:my-[100px] text-center">
                <Link
                    className=" bg-indigo-500 hover:bg-blue-700 rounded  p-3 my-auto text-bold text-white"
                    href="#contact"
                >
                    {" "}
                    Explore More
                </Link>
            </div>


            {/* lets work together on your next project  */}
            <div className=" w-[100%]  items-center justify-center mx-auto ">
                <div className=" w-[70%] m-auto bg-slate-800 hover:bg-slate-900 grid grid-cols-10 gap-[20px] shadow-sky-50 p-5 ">


                    <div className=" w-[100%] flex-col justify-center col-span-6 ">
                        <h1 className="text-white text-5xl font-serif p-5">
                            Lets Work Together on Your Next Project
                        </h1>
                        <p className="text-white font-serif text-[20px] mb-10 p-5">
                            I'm eager to partner with you on your next project. Our combined
                            skills and collaboration will yield exceptional results. Let's
                            work together and make it a remarkable success.
                        </p>
                        <div className="text-center"><Link
                            className=" text-black bg-indigo-500 hover:bg-blue-700 rounded  p-3 m my-[200px] text-[20px] font-serif"
                            href="#contact"
                        >
                            Contact
                        </Link></div>
                    </div>
                    <div className=" my-5 col-span-4 text-center  flex justify-content items-center">
                        {/* <Link
                            className=" text-black bg-indigo-500 hover:bg-blue-700 rounded  p-3 my-auto"
                            href="#contact"
                        >
                            Contact
                        </Link> */}
                        <img src ="https://i.pinimg.com/564x/76/f3/84/76f3847851d316b20c5cf79e5f573e0e.jpg" className= "h-[100%] w-[100%]"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
