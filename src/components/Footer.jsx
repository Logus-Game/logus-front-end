import React from "react";
import '../style/Footer.css'
import taskIcon from "../assets/task.png"
import chatIcon from "../assets/chat.png"
import notificationIcon from "../assets/notify.png"
import chartIcon from "../assets/chart.png"
import { useLocation } from "react-router-dom";


const Footer = () => {
    const location = useLocation();
    return (
        <div className="Footer">
           
            <ul>
                <li><img src={taskIcon} alt="" />{location.pathname == '/quests' ? 
                <div className="indicator"/>:
                <div className="indicator-white"></div>}</li>
                
                <li><img src={chatIcon} alt="" />{location.pathname == '/chat' ? 
                <div className="indicator"/>:
                <div className="indicator-white"></div>}</li>
                <li><img src={notificationIcon} alt="" />{location.pathname == '/notifications' ? 
                <div className="indicator"/>:
                <div className="indicator-white"></div>}</li>
                <li><img src={chartIcon} alt="" />{location.pathname == '/statistcs' ? 
                <div className="indicator"/>:
                <div className="indicator-white"></div>}</li>
            </ul></div>
        
        
       
    )
}

export default Footer;