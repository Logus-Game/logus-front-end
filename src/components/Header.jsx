import React from "react";
import '../style/Header.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'
import userIcon from '../assets/user-icon.png'
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <div className="Header">
            <div className="container-header">

                <img className="menu-icon" src={menuIcon} alt="" />


                <Link to={location.pathname.includes('/admin') ? 'admin/account': '/account'}><img src={userIcon} alt="" /></Link>
            </div>
        </div>
    )
}

export default Header;