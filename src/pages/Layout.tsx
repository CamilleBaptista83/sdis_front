import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
const Layout = () => {
    return (
        <div className="layout">
            <nav className="nav-layout">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/formulaires">Liste des formulaires</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <footer style={{ display: "flex", justifyContent: "center", background: "grey" }}>
                <p>Dashboard RH</p>
            </footer>
        </div>
    )
};
export default Layout;
