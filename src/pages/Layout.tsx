import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
import { useSelector } from "react-redux";
import Logo from '../style/img/logo_com_network.png'
const Layout = () => {

    const isLogged = useSelector((state: any) => state.logged);
    // const user = useSelector((state: any) => state.user.user[0]);
    // console.log(user)

    return (
        <div className="layout">
            <nav className="nav-layout">
                {isLogged ? (<ul>
                    <li>
                        <Link to="/"><img src={Logo} width={100} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin-sdis">Administration des rendez-vous</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>) : <ul><img src={Logo} width={100} /></ul>}
            </nav>
            <Outlet />
            <footer >
                <p>Application SDIS 13</p>
            </footer>
        </div>
    )
};
export default Layout;
