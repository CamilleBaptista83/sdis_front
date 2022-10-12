import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
import { useSelector } from "react-redux";
import Logo from '../style/img/logo-reel-it.png'
const Layout = () => {

    const isLogged = useSelector((state: any) => state.logged);
    const user = useSelector((state: any) => state.user.user[0]);
    console.log(user)

    return (
        <div className="layout">
            <nav className="nav-layout">
                {isLogged ? (<ul>
                    <li>
                        <Link to="/"><img src={Logo} width="100px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/formulaires">Liste des formulaires</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>) : <ul><img src={Logo} /></ul>}
            </nav>
            <Outlet />
            <footer >
                <p>Application RH</p>
            </footer>
        </div>
    )
};
export default Layout;
