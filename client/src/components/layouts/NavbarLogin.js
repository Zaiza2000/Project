// rafce
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Transition } from "@headlessui/react";

export default function NavbarLogin() {
  const [isOpen, setIsOpen] = useState(false);

  function logout() {
    localStorage.clear();
  }

  return (
    <div>
      <nav className="bg-white-800 shadow-xl">
        <div className="mx-auto py-0 px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center h-[58px]">
            <div className="flex flex-row w-full justify-between">
              {/* <img className="mb-5 mt-6 mr-2 h-[28px]" src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/271791862_4906494072748391_4394616534573215469_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDv4YojGq2t5flr31AGZPPldJkmPskw76V0mSY-yTDvqYvewIVrSWu9z-1uVpCymZL1MGkBWld5k5IM5H99BnN&_nc_ohc=aO9RmexlAc0AX_uOHfp&tn=WFq8HKQEynlLiRDA&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfBqPEjJFn4BfPEbPLquoEdyZ7XtdKP1BnU45kfHNPddBw&oe=63C19005" alt="logo" /> */}
              <div className="flex-grow-1 py-3">
                <a href="/" className="text-red-600 text-[28px] font-bold ">
                  ปรีชา
                </a>
                <a href="/" className="text-[#000000] text-[28px] font-bold ">
                  พานิชย์
                </a>
              </div>

              <div className="invisible md:visible ">
                <div className="ml-10 space-x-4 flex flex-row mt-3">
                <ul className="pr-2 pt-2 ">
                  <li>
                    <Link to="/cart">
                      <svg aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 text-black transition duration-75  hover:text-red-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
                      </svg>

                    </Link>
                  </li>
                </ul>
                  <a
                    href="/"
                    className=" hover:bg-gray-200 rounded-[8px] px-5 py-[8px] text-[14px] font-medium flex flex-row items-center"
                    onClick={logout}
                  >
                    {/* <IoIosLogOut className="mx-1" /> */}
                    Logout
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
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
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
                    aria-hidden="true"
                  >
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
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col text-center"
              >
                <a
                  href="/"
                  className="w-full bg-[#4060FF] text-[#ffffff] hover:bg-[#3951c7] px-5 py-[18px] rounded-[8px] text-[14px] font-medium"
                >
                  Username
                </a>
                <a
                  href="/"
                  className="w-full hover:bg-gray-200 rounded-[8px] px-5 py-[8px] text-[14px] font-mediumm"
                  onClick={logout}
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
