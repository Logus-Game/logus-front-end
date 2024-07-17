import React, { useState } from "react";
import "../style/Login.css"

const Login = () => {
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="Login">
        <div className="container">
            <div className="login-form">
                <h1>Login</h1>
                <div className="input-style">
                <input name="username" type="text" placeholder="Usuário" onChange={(e)=>{setEmail(e.target.value)}}/>
                <div className="input-bar"/>
                </div>
                <div className="input-style">
                <input name="password" type="password" placeholder="Senha" onChange={(e)=>{setPassword(e.target.value)}}/>
                <div className="input-bar"/>
                </div>
                <button className="login-button">Entrar</button>
            </div>
        </div>
        <div className="footer-login"></div>
        </div>
    )
}

export default Login;