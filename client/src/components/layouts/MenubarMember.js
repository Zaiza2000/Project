// rafce
import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';

export default function MenubarMember() {

  return (

    <aside className=" top-auto left-0 w-12 md:w-96 h-full" aria-label="Sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex  justify-between flex-grow">
        <div className=" py-4 px-5 rounded bg-gray-200 group-hover:selection:bg-gray-600">
          <ul className="space-y-2">
            <li className="flex flex-row">
              <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path
                fill="currentColor"
                d="M10 1a7 7 0 110 14v-1.5c1.469 0 2.85-.572 3.889-1.611S15.5 9.469 15.5 8c0-1.469-.572-2.85-1.611-3.889S11.469 2.5 10 2.5c-1.469 0-2.85.572-3.889 1.611A5.455 5.455 0 004.591 7H7.5L4 11 .5 7h2.571A7.001 7.001 0 0110 1zm3 6v2H9V4h2v3z"
              /></svg>
              <Link to="/OrderUser" className="ml-3">ประวัติการซื้อ</Link>
            </li>           
          </ul>
        </div>
      </div>
    </aside>

  )
}

