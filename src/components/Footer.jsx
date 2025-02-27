import React from "react";
import '../style/Footer.css'
import {useLocation } from "react-router-dom";
import FooterPlayer from "./FooterPlayer";
import FooterAdmin from "./FooterAdmin";


const Footer = () => {
    const location = useLocation();
    return (
        <div className="Footer">
            {location.pathname.includes('/admin') ? 
            <FooterAdmin/>
            :
            <FooterPlayer/>}
            </div>



    )
}

export default Footer;