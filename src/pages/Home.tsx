import { Button, Switch } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./forms/LoginForm";
import PersonalityInterview from "./forms/PersonalityInterview";
const Home = () => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        console.log(checked)
    };


    const label = { inputProps: { 'aria-label': 'Switch' } };

    return (
        <div className="page-container">
            <h1>Dashboard</h1>
            <LoginForm />
            <div className="personality-interview-sending-form-container">
                <p>Souhaitez-vous envoyer le questionnaire au candidat, suite à l'entretien de personnalité ?</p>
                <Switch checked={checked}
                    onChange={handleChange} />
                {checked && <PersonalityInterview />}
            </div>
        </div >
    )
};
export default Home;