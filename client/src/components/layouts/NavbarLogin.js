// rafce
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

import { UserOutlined } from "@ant-design/icons";

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
            </div> 
            <div className=" text-[#000000] hover:text-red-500 text-[20px]  pl-[40px] flex flex-row" >
                    <UserOutlined className="pt-1" /><Link to="/login"> Login</Link>
                  </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
