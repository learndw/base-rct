import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Login = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(identifier, password).then(
                () => {
                    window.location.reload();
                    navigate('/');
                },
                (error) => {
                    console.log(error);
                }
                );
            } catch (err) {
                console.log(err);
            }
        };
        
        
        
        
        return (
            <div>
            <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <input
                    type="text"
                    placeholder="identifier"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    );
};

export default Login;