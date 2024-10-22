import React, { useEffect, useState } from "react";
import maintanceGif from '../assets/website-maintenance-gif-2.gif'
import "../style/SoonPage.css"
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const SoonPage = () => {
    const history = useNavigate();

    useEffect(()=> {
        if(!(Cookies.get('token'))) {
            history('/')
        }
    },[])
    return (
        <div className="SoonPage">
            <h1>Essa página ainda está em desenvolvimento, mas estará pronta em breve!</h1>
            
        </div>
    )
}

export default SoonPage;