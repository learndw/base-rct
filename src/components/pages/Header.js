import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Header = () => {

    const [currentUser, setCurrentUser] = useState(false);

    const navigate = useNavigate();
    
    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
        console.log(user);
    }, []);


    const logout = async (e) => {
        e.preventDefault();
        try {
            await AuthService.logout();
            window.location.reload();
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <header>
            <nav id="menu">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-team">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Our services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/request-new-service">Service Request</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news-and-advices">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-1">Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>

                    <div style={{ display: currentUser === true ? "block" : "none" }}>
                        <li className='right-menu'>
                            <a onClick={logout} href="/">Cerrar sesion</a>
                        </li>
                    </div>
                    <div style={{ display: currentUser === true ? "none" : "block" }}>
                        <li className='right-menu'>
                            <NavLink to="/login">Iniciar sesion</NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )

}

export default Header