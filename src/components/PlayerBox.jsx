import React, { useEffect, useState } from "react";
import '../style/Box.css'

const PlayerBox = ({ id, title, email, level, coins, onButtonClick }) => {
    
    return (
        <div className="Box">
            <div className="fr1"><span className="title">{title}</span></div>
            <div className="fr4"><button onClick={()=> {onButtonClick(id)}}>Ver player</button></div>

        </div>
    )
}

export default PlayerBox;