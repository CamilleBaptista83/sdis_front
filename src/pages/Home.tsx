import { Button, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import LoginForm from "./forms/LoginForm";
import PersonalityInterview from "./forms/PersonalityInterview";
import CardActionPattern from '../components/formPatterns/cardActionPattern/CardActionPattern'
import { useSelector } from "react-redux";


import FileImportCardIllustration from '../style/img/importing-csv-file-illustrationl.jpg'
import AppointmentCreationCardIllustration from '../style/img/appointment-creation-form.jpg'

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
                    <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
                        <CardActionPattern title="Ajouter une nouvelle commande" text="Importation d'une liste via un fichier CSV" link="/admin/import-fichier" image={FileImportCardIllustration} />
                        <CardActionPattern title="Créer de nouveaux créneaux de prise de rendez-vous" text="Formulaire à saisir" link="/admin/creation-rdv" image={AppointmentCreationCardIllustration} />
                    </div>
                </>)}

        </div >
    )
};
export default Home;