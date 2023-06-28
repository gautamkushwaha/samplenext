
import React from "react";
import { CgWebsite } from 'react-icons/cg';
import { SiGoogleoptimize } from 'react-icons/si';
import { TfiWrite } from 'react-icons/tfi';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';


import styles from '@/styles/Home.module.css';

export default function Cards() {
    return (
        <div className="w-[100vw] bg-white mx-auto my-[150px]">
            <div className="mx-auto  ">
                <div className=" w-[45%]  font-serif mx-auto">

                    {/* Heading and paragraph */}
                    <div className="text-6xl my-5 text-bold">
                        <h2 className="text-center">Make a Name for Your </h2>
                        <h2 className="text-center"> Website. Literally.</h2>
                    </div>
                    <div className="mx-auto text-center">
                        <p className="text-[20px]"> Your domain help people find you online.</p>
                    </div>

                    {/* search domain */}
                    <div className=" w-[80%] flex items-center shadow-xl hover:shadow-2xl mt-[30px] mb-[15px] mx-auto ">
                        <div className="p-5 bg-[#274961] rounded-lg">
                            <FaSearch className="text-white" />
                        </div>
                        <input
                            type="text"
                            placeholder="example.com"
                            className="flex-grow bg-white  outline-none rounded-l-lg px-2 "
                        />
                        <div className="p-4 bg-[#274961] rounded-lg">
                            <button className="text-white">Search Domain</button>
                        </div>
                    </div>
                    {/* Domain Output */}


                    {/* grid pricing  */}
                    <div className=" w-[70%]  mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-5">
                        <div className="text-center flex p-2 text-[20px]">
                            <p className="text-[#9372F0] px-2">.com</p> 
                            $5
                        </div>
                        <div className="text-center flex p-2 text-[20px]">
                            <p className="text-[#9372F0] px-2">.com</p> 
                            $5
                        </div>
                        <div className="text-center flex p-2 text-[20px]">
                            <p className="text-[#9372F0] px-2">.com</p> 
                            $5
                        </div>
                        <div className="text-center flex p-2 text-[20px]">
                            <p className="text-[#9372F0] px-2">.com</p> 
                            $5
                        </div>
                        <div className="text-center flex p-2 text-[20px]">
                            <p className="text-[#9372F0] px-2">.com</p> 
                            $5
                        </div>
                    </div>


                </div>



            </div>

        </div>
    )
}

