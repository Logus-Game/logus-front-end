import React from "react";
import '../style/Header.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'

const Header = () => {
    return (
        <div className="Header">
            <div className="container-header">
                <div className="menu-content">
                    <img className="menu-icon" src={menuIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;