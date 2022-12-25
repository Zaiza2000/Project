// rafce
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

export default class MenubarMember extends Component {
  render() {
    return (
      <nav>
        <ul className="nav flex-column">

          <li className="nav-item">
            <Link to="/user/history">ประวัติการซื้อ</Link>
          </li>

          <li className="nav-item">
            <Link to="/user/wishlist">สินค้าที่สนใจ</Link>
          </li>

        </ul>
      </nav>
    )
  }
}
