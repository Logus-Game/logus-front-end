import React from "react";
import '../style/Footer.css'
import taskIcon from "../assets/task.png"
import chatIcon from "../assets/chat.png"
import exploreIcon from "../assets/explore.png"
import notificationIcon from "../assets/notify.png"
import chartIcon from "../assets/chart.png"
import { Link, useLocation } from "react-router-dom";


const FooterAdmin = () => {
    const location = useLocation();
    return (
        <div className="FooterAdmin">
            
            <ul>
            <li>
                <Link to="/quests"><img src={taskIcon} alt="" />{location.pathname == '/quests' 
                ?
                    <div className="indicator" /> 
                    :
                    <div className="indicator-white">
                    </div>
                }</Link>
            </li>

            <li><Link to="/admin/"><img src={chatIcon} alt="" />{location.pathname == '/chat' ?
                <div className="indicator" /> :
                <div className="indicator-white"></div>}</Link></li>
            <li><Link to="/admin/"><img src={exploreIcon} alt="" />{location.pathname == '/explore' ?
                <div className="indicator" /> :
                <div className="indicator-white"></div>}</Link></li>
            <li><Link to="/admin/"><img src={notificationIcon} alt="" />{location.pathname == '/notifications' ?
                <div className="indicator" /> :
                <div className="indicator-white"></div>}</Link></li>
            <li><Link to="/admin/"><img src={chartIcon} alt="" />{location.pathname == '/statistcs' ?
                <div className="indicator" /> :
                <div className="indicator-white"></div>}</Link></li>
        </ul>
            </div>



    )
}

export default FooterAdmin;