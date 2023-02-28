// rafce
import React, { useState } from "react";
import '../../App.css';
import { Badge } from "antd";
//redux

import {
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
// Router
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "../card/Search";


export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  const { user, cart, cartAdmin } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("user Navbar", user);

  const logout = () => {
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/");
  };
  // const auth = localStorage.getItem('user');
  return (

    <div>
      <nav className="bg-white-800 shadow-xl">
        <div className="mx-auto py-0 px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center h-[60px]">
            <div className="flex flex-row w-full justify-between ">
              {/* <img className="mb-5 mt-6 mr-2 h-[28px]" src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/271791862_4906494072748391_4394616534573215469_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDv4YojGq2t5flr31AGZPPldJkmPskw76V0mSY-yTDvqYvewIVrSWu9z-1uVpCymZL1MGkBWld5k5IM5H99BnN&_nc_ohc=aO9RmexlAc0AX_uOHfp&tn=WFq8HKQEynlLiRDA&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfBqPEjJFn4BfPEbPLquoEdyZ7XtdKP1BnU45kfHNPddBw&oe=63C19005" alt="logo" /> */}
              <div className="flex-grow-1 py-3 ">
                <a href="/" className="text-red-600 text-[28px] font-bold ">
                  ปรีชา
                </a>
                <a href="/" className="text-[#000000] text-[28px] font-bold ">
                  พานิชย์
                </a>
              </div>
              <div className="invisible md:visible text-[#000000]  text-[20px]  pl-[40px] flex flex-row pt-4 ">

                {user && (
                  <>
                    {
                      user.role === "admin" ? (
                        <div className="flex flex-row">
                          <ul className="pr-5 hover:text-red-500">
                            <li>
                              <Link to="/admin/index"> หน้าหลัก </Link>
                            </li>
                          </ul>
                          <ul className="pl-4 pt-2">
                            <li>
                              <Link to="/requisitionDetails">
                                <Badge count={cartAdmin.length}>
                                  <svg
                                    className="flex-shrink-0 w-6 h-6 text-black transition duration-75  hover:text-red-500 "
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                  >
                                    <path d="M480 580H372a8 8 0 00-8 8v48a8 8 0 008 8h108v108a8 8 0 008 8h48a8 8 0 008-8V644h108a8 8 0 008-8v-48a8 8 0 00-8-8H544V472a8 8 0 00-8-8h-48a8 8 0 00-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z" />
                                  </svg>
                                </Badge>

                              </Link>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div className="flex flex-row">
                          <ul className="pr-5 hover:text-red-500">
                            <li>
                              <Link to="/"> หน้าหลัก </Link>
                            </li>
                          </ul>
                          <ul className="pl-4 pt-2">
                            <li>
                              <Link to="/cart">
                                <Badge count={cart.length}>
                                  <svg aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-black transition duration-75  hover:text-red-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
                                  </svg>

                                </Badge>

                              </Link>
                            </li>
                          </ul>
                        </div>
                      )
                    }
                  </>
                )}
                {!user && (
                  <>
                    <div className="flex flex-row">
                      <ul className="pr-4 hover:text-red-500">
                        <li>
                          <Link to="/shop">Shop</Link>
                        </li>
                      </ul>
                      <ul className="pl-4 pt-2">
                        <li>
                          <Link to="/cart">
                            <Badge count={cart.length}>
                              <svg aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-black transition duration-75  hover:text-red-500 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
                              </svg>

                            </Badge>

                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
                {user && (
                  <>
                    <div className="invisible md:visible text-[#000000]  text-[20px]  pl-[40px] flex flex-row " title={user.username} icon={<DownOutlined />}>
                      {

                        user.role === "admin" ? (
                          <Link to="/admin/index"><UserOutlined /></Link>

                        ) : (
                          <Link to="/member/index"><UserOutlined /></Link>
                        )
                      }
                      <div onClick={logout}>
                        Logout
                      </div>
                    </div>
                  </>
                )}
                {!user && (
                  <>
                    <div className=" text-[#000000] hover:text-red-500 text-[20px]  pl-[40px] flex flex-row " >
                      <UserOutlined className="pt-1" /><Link to="/login"> Login</Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

