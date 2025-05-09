import React from "react";
import '../style/Footer.css'
import taskIcon from "../assets/task.png"
import playersIcon from "../assets/players-icon.png"
import bankIcon from "../assets/bank-icon.png"
import { Link, useLocation } from "react-router-dom";
import aprovado from '../assets/aprovado.png'; 


const FooterAdmin = () => {
    const location = useLocation();
    return (
        <div className="FooterAdmin">
            
            <ul>
            <li>
                <Link to="/admin/players"><img src={playersIcon} alt="" />{location.pathname == '/admin/players' 
                ?
                    <div className="indicator" /> 
                    :
                    <div className="indicator-white">
                    </div>
                }</Link>
            </li>

            <li><Link to="/admin/bank"><img src={bankIcon} alt="" />{location.pathname == '/admin/bank' ?
                <div className="indicator" /> :
                <div className="indicator-white"></div>}</Link></li>
            <li><Link to="/admin/quests"><img src={taskIcon} alt="" />{location.pathname == '/admin/quests' ?
                <div className="indicator" /> :
                <div className="indicator-white"></div>}</Link></li>

                <li>
                    <Link to="/admin/submissionsPage">
                        <img src={aprovado} alt="Submissões" />
                        {location.pathname === '/admin/submissionsPage' ? (
                            <div className="indicator" />
                        ) : (
                            <div className="indicator-white" />
                        )}
                    </Link>
                </li>
        </ul>
            </div>



    )
}

export default FooterAdmin;