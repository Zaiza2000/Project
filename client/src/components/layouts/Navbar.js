// rafce
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import { Transition } from '@headlessui/react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white-800 shadow-xl">
        <div className="mx-auto py-0 px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center h-[58px]">
            <div className="flex flex-row w-full">
              {/* <img className="mb-5 mt-4 mr-2" src="/images/logo-none-bg.png" alt="logo" /> */}
              <div className="flex-grow py-3">
                <a href="/" className="text-red-600 text-[28px] font-bold ">
                  ปรีชา
                </a>
                <a href="/" className="text-[#000000] text-[28px] font-bold ">
                  พานิชย์
                </a>
              </div>

              <div className="invisible md:visible">
                <div className="ml-10 space-x-4 flex flex-row mt-3">
                  <a
                    href="/login"
                    className="hover:bg-[#e1dfdf] px-5 py-[8px] rounded-[8px] text-[14px] font-medium">
                    Login
                  </a>
                  <a
                    href="/sign-up"
                    className="bg-[#4060FF] text-[#ffffff] hover:bg-[#3951c7] px-5 py-[8px] rounded-[8px] text-[14px] font-medium">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-[8px] text-gray-400 hover:text-gray hover:bg-gray-100"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden " id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col text-center">
                <a
                  href="/login"
                  className="w-full hover:bg-gray-200 rounded-[8px] px-5 py-[8px] text-[14px] font-medium">
                  Login
                </a>
                <a
                  href="/sign-up"
                  className="w-full bg-[#4060FF] text-[#ffffff] hover:bg-[#3951c7] px-5 py-[8px] rounded-[8px] text-[14px] font-medium">
                  SignUp
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

