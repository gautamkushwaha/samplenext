import React, { useState } from 'react';

export default function Header() {
  const [showSubheadings, setShowSubheadings] = useState(false);
  const [showDoubleDropdown, setShowDoubleDropdown] = useState(false);

  const handleHeadingClick = () => {
    setShowSubheadings(!showSubheadings);
  };

  const handleDoubleDropdownClick = () => {
    setShowDoubleDropdown(!showDoubleDropdown);
  };

  return (
    <div className='bg-[#2699fb] top-0 z-50 fixed w-full transition-all duration-300 mb-[50px]'>
      <div className='w-full mx-auto flex flex-row justify-between p-2'>
        {/* Left Side */}
        <div className='flex items-center'>
          <div className='text-3xl font-bold mr-4'>Logo</div>
          <button
            id='multiLevelDropdownButton'
            data-dropdown-toggle='dropdown'
            className='text-black bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'
            onClick={handleHeadingClick}
          >
            Dropdown button
            <svg
              className='w-4 h-4 ml-2'
              aria-hidden='true'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </button>
          {/* Dropdown menu */}
          {showSubheadings && (
            <div
              id='dropdown'
              className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
            >
              <ul
                className='py-2 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='multiLevelDropdownButton'
              >
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <button
                    id='doubleDropdownButton'
                    data-dropdown-toggle='doubleDropdown'
                    data-dropdown-placement='right-start'
                    type='button'
                    className='flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    onClick={handleDoubleDropdownClick}
                  >
                    Dropdown
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                  {/* Double Dropdown */}
                  {showDoubleDropdown && (
                    <div
                      id='doubleDropdown'
                      className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
                    >
                      <ul
                        className='py-2 text-sm text-gray-700 dark:text-gray-200'
                        aria-labelledby='doubleDropdownButton'
                      >
                        <li>
                          <a
                            href='#'
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Right Side */}
        <ul className='hidden md:flex gap-6 items-center'>
          <li>
            <a href='/contact'>Contact</a>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <a href='/signin'>Sign In</a>
          </li>
          <li>
            <a href='/cart'>Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
