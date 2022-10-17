import { Button, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import LoginForm from "./forms/LoginForm";
import PersonalityInterview from "./forms/PersonalityInterview";
import CardActionPattern from '../components/formPatterns/cardActionPattern/CardActionPattern'
import { useSelector } from "react-redux";

import "./Home.scss"

const Home = () => {

    const isLogged = useSelector((state: any) => state.logged);


    const [isLoading, setIsLoading] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        console.log(checked)
    };



    return (
        <div className="page-container">
            {!isLogged ? (
                <>
                    <h1>Connexion</h1>
                    <LoginForm isLoading={isLoading} setIsLoading={setIsLoading} />
                </>) :
                (<>
                    <h1>Dashboard</h1>
                    <CardActionPattern title="Ajouter des nouveaux utilisateurs" text="Importation d'une liste de contact via un fichier CSV" link="/admin-sdis/import-fichier" />
                    {/* <Button variant="contained" endIcon={<SendIcon />} >Envoyer le lien d'inscription</Button> */}
                </>)}

        </div >
    )
};
export default Home;