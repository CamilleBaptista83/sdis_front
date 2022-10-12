import React from 'react'
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input, TextField, Autocomplete, Select, MenuItem, InputLabel, Button } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/fr'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { maxWidth } from '@mui/system';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    prenom: string;
    nom: string;
    date: any;
    profession: any;
    dureeMission?: string;
    descriptionMission?: string;
    environnementTechnique?: string;
    argumentsEntretien?: string;
}
const FeedbackOnClientItw = () => {
    const { control, handleSubmit, reset, setValue } = useForm<IFormInput>();
    const navigate = useNavigate();
    const onSubmit = (data: IFormInput) => {
        console.log(data)
        navigate('/');
    };


    return (
        <div className='page-container'>
            <h1>FeedbackOnClientItw</h1>
            <form style={{ margin: "20px auto", width: "100%", maxWidth: "1200px" }} onSubmit={(e) => {
                handleSubmit(onSubmit)(e)
                    // you will have to catch those error and handle them
                    .catch(() => { console.log('marche pas') });
            }} >
                <div style={{ width: "100%", display: "flex", gap: "20px" }}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                        <div>
                            <Controller name="prenom" control={control} render={({ field }) => <TextField {...field} fullWidth required label="Prénom" variant="outlined" className="item" />} />
                        </div>
                        <div>
                            <Controller name="nom" control={control} render={({ field }) => <TextField {...field} fullWidth required label="Nom" variant="outlined" className="item" />} />
                        </div>
                    </div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                        <div style={{ width: '100%' }}>
                            <Controller
                                control={control}
                                name="dureeMission"
                                render={({ field: { onChange, value } }) => (
                                    <TextField required select label="Durée de la mission" className="item"
                                        style={{ width: '100%' }} value={value} onChange={onChange}>
                                        {dureeMissionOptions.map((dureeMission, index) => (
                                            <MenuItem key={index} value={dureeMission}>
                                                {dureeMission}
                                            </MenuItem>
                                        )
                                        )}
                                    </TextField>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="date"
                                control={control}
                                defaultValue={new Date()}
                                render={({
                                    field: { onChange, value }
                                }) => (
                                    <LocalizationProvider dateAdapter={AdapterDayjs} locale='fr'
                                    >
                                        <DatePicker
                                            className="item"
                                            label="Date de démarrage de la mission"
                                            disableFuture
                                            value={value}
                                            onChange={onChange}
                                            renderInput={(params) => (
                                                (
                                                    <TextField
                                                        variant="outlined"
                                                        margin="dense"
                                                        required
                                                        fullWidth
                                                        color="primary"
                                                        {...params}
                                                    />
                                                )
                                            )}
                                        />
                                    </LocalizationProvider>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Controller
                        name="profession"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Autocomplete
                                className="item"
                                options={jobs}
                                renderInput={(params) => {
                                    return (
                                        <TextField
                                            {...params}
                                            label={"Profession"}
                                            margin="normal"
                                            variant="outlined"
                                            required={true}
                                        />
                                    );
                                }}
                                onChange={(event, values, reason) => onChange(values)}
                                value={value}
                            />
                        )}
                    />
                </div>
                <div style={{ width: '100%' }}>
                    <Controller name="descriptionMission" control={control} render={({ field }) => <TextField {...field} className="item" required fullWidth label="Compréhension et description de la mission" variant="outlined" multiline rows="10" />} />
                </div>
                <div style={{ width: '100%' }}>
                    <Controller name="environnementTechnique" control={control} render={({ field }) => <TextField {...field} className="item" required fullWidth label="Environnement technique" variant="outlined" multiline rows="10" />} />
                </div>
                <div style={{ width: '100%' }}>
                    <Controller name="argumentsEntretien" control={control} render={({ field }) => <TextField {...field} className="item" required fullWidth label="Points importants à développer lors de l’entretien" variant="outlined" multiline rows="10" />} />
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <Button type="submit" variant="contained">Envoyer</Button>
                    <Button type="reset" variant="outlined" onClick={() => reset()}>Réinitialiser</Button>
                </div>
            </form>
        </div>
    )
}
export default FeedbackOnClientItw
const jobs = [
    "Administrateur/Administratrice de base de données",
    "Administrateur/Administratrice de réseau",
    "Architecte des systèmes d'information",
    "Architecte réseau",
    "Chef/Cheffe de projet informatique",
    "Consultant/Consultante en système d'information",
    "Développeur/Développeuse informatique",
    "Expert/Experte en sécurité informatique",
    "Formateur/Formatrice en informatique",
    "Gestionnaire de parc micro-informatique",
    "Informaticien industriel/Informaticienne industrielle",
    "Ingénieur/Ingénieure cloud computing",
    "Ingénieur/Ingénieure en métrologie",
    "Ingénieur/Ingénieure études et développement en logiciel de simulation",
    "Ingénieur/Ingénieure système",
    "Ingénieur/Ingénieure télécoms et réseaux",
    "Ingénieur/Ingénieure technico-commercial en informatique",
    "Technicien/Technicienne de maintenance en informatique",
    "Technicien/Technicienne télécoms et réseaux",
    "Testeur/Testeuse"
]
const dureeMissionOptions = [
    "moins de 1 mois",
    "entre 1 et 3 mois",
    "entre 3 et 6 mois",
    "entre 6 et 9 mois",
    "entre 9 et 12 mois",
    "plus d'un an"
]