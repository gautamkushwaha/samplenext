import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const cardData = [
  {
    heading: 'Resource Protection',
    subheading: 'Even if there are other websites on the shared server, your site’s performance stays protected and unaffected.',
    icon: <FaDribbbleSquare className="w-[40%] h-[50%] mr-4 transition duration-300 ease-in-out transform hover:scale-110 bg-blue-500 hover:bg-gray-500 text-white rounded-full p-2" />,
  },
  {
    heading: 'Domain Manager',
    subheading: 'Our domain manager makes it easy to update, transfer, purchase and manage your domains in one place.',
    icon: <FaFacebookSquare className="w-[40%] h-[50%] mr-4 transition duration-300 ease-in-out transform hover:scale-110 bg-blue-500 hover:bg-gray-500 text-white rounded-full p-2" />,
  },
  {
    heading: 'SSL Certificates',
    subheading: 'Keep personal information, e-commerce transactions and other sensitive data safeguarded with encrypted connections.',
    icon: <FaGithubSquare className="w-[40%] h-[50%] mr-4 transition duration-300 ease-in-out transform hover:scale-110 bg-blue-800 hover:bg-gray-500 text-white rounded-full p-2" />,
  },
  {
    heading: 'Google Ads',
    subheading: 'Give your campaign an extra kick with a Google Ads match credit up to $150 on your first campaign',
    icon: <FaInstagram className="w-[40%] h-[50%] mr-4 transition duration-300 ease-in-out transform hover:scale-110 bg-blue-500 hover:bg-gray-500 text-white rounded-full p-2" />,
  },
];

export default function Technology() {
  return (
    <div className="w-[100vw] my-[100px]" id="technology">
      <div className="mx-[150px]">
        <h1 className="text-4xl font-bold text-center">Hosting Features</h1>
        <h2 className="text-lg text-gray-500 text-center">All Plans Included</h2>

        <div className=" w-[100%] grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-4 mx-auto my-2 md:mx-0 md:my-4 flex md:flex-col items-center justify-center hover:shadow-2xl"
            >
              <div className="md:flex md:items-center md:justify-start p-5">
                {card.icon}
                <div>
                  <h3 className="text-2xl font-bold my-5 mx-5">{card.heading}</h3>
                  <p className="text-gray-600 font-serif text-[18px] mx-5">{card.subheading}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
