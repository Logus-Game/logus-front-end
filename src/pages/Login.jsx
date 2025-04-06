import React, { useState } from "react";
import "../style/Login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import BASE_URL from "../scripts/api";
import { showAlert } from '../scripts/alertservice';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true)
        if (email.length==0 || password.length==0) {
            showAlert('Erro', 'Preecha todos os campos', 'info')
        } else {
            try {
                const response = await axios.post(`http://localhost:5000/login`, {
                    email: email,
                    password: password
                })
                    console.log(response)
                if (response.status === 200) {
                    Cookies.set('token', response.data.access_token);
                    if(response.data.nivel == 'AA') {
                        history('/admin/players')
                    } else {
                        history('/quests')
                    }
                    
                } else {
                    showAlert('Erro', 'Credenciais inválidas', 'error')
                    
                }
            } catch (err) {
                showAlert('Erro', 'Credenciais inválidas', 'error')
                console.log(err)
            }
    
        }

        
        setLoading(false);


    }



    return (
        <div className="Login">
            <div className="container">

                <div className="login-form" >
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-style">
                            <input name="email" type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                            <div className="input-bar" />
                        </div>
                        <div className="input-style">
                            <input name="password" type="password" placeholder="Senha" onChange={(e) => { setPassword(e.target.value) }} />
                            <div className="input-bar" />
                        </div>
                        <button className="login-button" type="submit" disabled={loading}>Entrar</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;