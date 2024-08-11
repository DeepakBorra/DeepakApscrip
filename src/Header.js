import React from "react";
import {BsSearch} from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md"
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className="headercontainer">
                <h1>1</h1>
                <div className="Logo">
                <h1>LOGO</h1>
                </div>
            <div className="header-icons">
            <BsSearch />
            <IoIosHeartEmpty />
            <BiShoppingBag />
            <MdOutlinePersonOutline />
            </div>
            </div>
        <div>
    <nav>
    <ul className="headingcontent">
    <li>Shop</li>
    <li>Skills</li>
    <li>Stories</li>
    <li>About</li>
    <li>Contact Us</li>
    </ul>
     </nav>
       </div>
        </header>
    );
};
export default Header;