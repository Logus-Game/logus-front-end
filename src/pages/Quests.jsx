import React, { useEffect } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
// import "../style/Quests.css"

const Quests = () => {
    useEffect(() => {
        
        const fetchQuests = async () => {
        const response = await fetch('http://localhost:5000/quests', {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`,
              },
        });
        console.log(response)
    }
    setTimeout(() => {
         fetchQuests();   
    }, 1000);
        
    },[])
    return (
        <div className="Quests">
        
        </div>
    )
}

export default Quests;