import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

import './SdisDashboard.scss'

const SdisDashboard = () => {

    const navigate = useNavigate();

    const isLogged = useSelector((state: any) => state.logged);
    useEffect(() => {
        if (!isLogged) { navigate("/") }
    }, [isLogged])

    return isLogged && (
        <div className='page-container'>
            <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Button variant="contained" onClick={() => navigate("/admin/import-fichier")}>Import d'un fichier d'utilisateurs</Button>
                <Button variant="contained" onClick={() => navigate("/admin/creation-rdv")}>Création d'un planning de planning de rendez-vous</Button>
            </nav>
            <div className='submenu-content'>
                <Outlet />
            </div>
        </div>
    )
}

export default SdisDashboard