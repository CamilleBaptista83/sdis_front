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
            <nav>
                <Button variant="contained" onClick={() => navigate("/admin-sdis/import-fichier")}>Import par fichier</Button>
                <Button variant="contained" onClick={() => navigate("/admin-sdis/import-formulaire")}>Import par formulaire</Button>
            </nav>
            <div className='submenu-content'>
                <Outlet />
            </div>
        </div>
    )
}

export default SdisDashboard