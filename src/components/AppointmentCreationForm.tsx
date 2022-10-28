import React, { useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from "react-hook-form";
import { Button, Typography, Stepper, Step, StepLabel, Box, CircularProgress } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { green } from '@mui/material/colors';


import AutoCompleteMultiplePattern from '../components/formPatterns/autoCompleteMultiplePattern/AutoCompleteMultiplePattern';

import AutoCompletePattern from '../components/formPatterns/autocompletePattern/AutoCompletePattern';
import DatePickerPattern from './formPatterns/datePickerPattern/DatePickerPattern';
import TextfieldPattern from './formPatterns/textfieldPattern/TextfieldPattern';


interface IFormInput {
    commandes: string[] | null,
    sites: string | null,
    intervention: string | null,
    debutPeriode: string | null,
    finPeriode: string | Date | null,
    sauvegarde: string | Date | null,
    // nom: string;
    // poste: string;
    // date: Date;
    // interviewFormat: string;
    // responsables: any;
    // interviewSummary: string,
    // rating: string
}

const defaultValues = {
    intervention: "",
    commandes: [],
    sites: "",
    debutPeriode: null,
    finPeriode: null,
    sauvegarde: "",
    // nom: "",
    // poste: "",
    // date: new Date(),
    // responsables: [],
    // interviewFormat: "",
    // technicalTest: "",
    // interviewSummary: "",
    // rating: "0"
}


//Dummy data 
const typologieInterventionsData = ["Installation d'équipements - 1H", "Installation d'équipements - 2H", "SAV - 1H", "SAV - 2H"]
const commandesData = ['commande 1', 'commande 2', 'commande 3']
const sitesData = ["Marseille", "Aix", "Vitrolles", "Toulon", "Aubagne", "Ciotat", "Nice", "Cannes", "Antibes"]

//Titres du spinner
const steps = [
    "Sélection de la typologie d'intervention",
    "Sélection d'une ou plusieurs commande(s)",
    "Sélection du lieu d'intervention",
    "Sélection de la période d'intervention"
];

const AppointmentCreationForm = () => {

    //Appel des méthodes de React Hook Form
    const methods = useForm<IFormInput>({ defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue, watch, formState: { errors } } = methods;

    //Fonction au Submit du formulaire
    const onSubmit = (data: IFormInput) => console.log(data);

    //UseState des options sélectionnés dans chaque champ
    const [interventionSelectionned, setInterventionSelectionned] = React.useState<string>()
    const [commmandesSelectionned, setCommmandesSelectionned] = React.useState<string[]>()
    const [sitesSelectionned, setSitesSelectionned] = React.useState<string>()
    const [startPeriodSelectionned, setStartPeriodSelectionned] = React.useState<Date>()
    const [endPeriodSelectionned, setEndPeriodSelectionned] = React.useState<Date>()



    //Gestion de l'état des étapes du formulaire
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const [disableNextButton, setDisableNextButton] = React.useState(true);
    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };


    //Gestion des état à la sauvegarde de la sélection
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef<number>();

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClickOnSave = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };




    //Création d'un useRef pour éviter le first render du UseEffect au chargement de la page
    const didMountRef = useRef(false);
    let startDate: string = "";
    let endDate: string = "";

    useEffect(() => {

        //Après le first render du UseEffect
        if (didMountRef.current) {
            //On bloque le bouton "Suivant" si aucune sélection a été effectuée
            if (activeStep === 0) {
                if (interventionSelectionned?.length === 0 || interventionSelectionned === undefined || interventionSelectionned === null) {
                    setDisableNextButton(true)
                } else {
                    setDisableNextButton(false)
                }
            } else if (activeStep === 1) {
                if (commmandesSelectionned?.length === 0 || commmandesSelectionned === undefined) {
                    setDisableNextButton(true)
                } else {
                    setDisableNextButton(false)
                }
            } else if (activeStep === 2) {
                if (sitesSelectionned?.length === 0 || sitesSelectionned === undefined || sitesSelectionned === null) {
                    setDisableNextButton(true)
                } else {
                    setDisableNextButton(false)
                }
            } else if (activeStep === 3) {
                console.log(startPeriodSelectionned)
                console.log(endPeriodSelectionned);

                if (startPeriodSelectionned === undefined || startPeriodSelectionned === null) {
                    setDisableNextButton(true)
                } else {
                    setDisableNextButton(false)
                }
            }
        }

        //Convertion des states de période d'intervention en objet Date
        let copyOfStartDateObject: any = { ...startPeriodSelectionned };
        startDate = new Date(copyOfStartDateObject.$d).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
        let copyOfEndDateObject: any = { ...endPeriodSelectionned };
        endDate = new Date(copyOfEndDateObject.$d).toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })


        //Au premier chargement, on passe le useRef à true pour activer les actions au changement d'état des States
        didMountRef.current = true;
        console.log(activeStep)

    }, [interventionSelectionned, commmandesSelectionned, sitesSelectionned, startPeriodSelectionned, endPeriodSelectionned, activeStep])

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    // const handleReset = () => {
    //     setActiveStep(0);
    // };


    return (
        <div style={{ background: "white", padding: "20px", width: "80%", borderRadius: "20px" }}>
            <h3 style={{ color: "white" }}>Création d'un nouveau planning de rendez-vous</h3>
            <div>
                {/* Stepper */}
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>



                <div>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className='form-container'>
                            {/* Si les étapes sont complétées, on affiche un message de confirmation. Sinon on affiches les étapes du formulaire*/}
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "150px" }}>

                                        {success ?
                                            <p style={{ textAlign: "center" }}>
                                                Votre sélection a bien été sauvegardée. Vous pouvez désormais y assigner des techniciens ou retourner sur le tableau de bord.</p> :
                                            (<React.Fragment>
                                                <p style={{ textAlign: "center", display: "flex", alignItems: "center", gap: "5px" }}> <span>{<ReportProblemIcon color="warning" />}</span>Avant de cliquer sur le bouton "Enregister", veuillez relire attentivement la sélection que vous venez d'effectuer :</p>
                                                <ul>
                                                    <li>Type d'intervention - <span style={{ fontWeight: "bold" }}>{interventionSelectionned}</span></li>
                                                    <li>Commande(s) - {commmandesSelectionned?.map(commande => <span style={{ fontWeight: "bold" }}>{commande}</span>)}
                                                    </li>
                                                    <li>Lieu - <span style={{ fontWeight: "bold" }}>{sitesSelectionned}</span></li>
                                                    <li>Période - Du <span style={{ fontWeight: "bold" }}>{startPeriodSelectionned?.toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span> au <span style={{ fontWeight: "bold" }}>{endPeriodSelectionned?.toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span></li>
                                                </ul>
                                                <p>Si la sélection vous convient, cliquez sur le bouton "Enregister" pour confirmer la création des créneaux d'intervention. Sinon, vous pouvez soit revenir en arrière en cliquant sur "Retour" ou  soit réinitialiser totalement la sélection en cliquant sur "Réinitialiser".</p>
                                                {/* <TextfieldPattern name={"sauvegarde"} control={control} required={true} multiline={false} label={"Nom de sauvegarde"} /> */}
                                            </React.Fragment>)
                                        }
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {/* <Button onClick={handleReset}>Reset</Button> */}
                                    </Box>
                                    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                                        <Box>
                                            <Button
                                                variant="contained"
                                                sx={buttonSx}
                                                disabled={loading}
                                                onClick={(e) => {
                                                    if (!success) {
                                                        handleButtonClickOnSave()
                                                    } else {
                                                        e.preventDefault()
                                                    }
                                                }}
                                                startIcon={<SaveIcon />}
                                                type="submit"
                                            >
                                                {success ? "Sélection sauvegardée" : "Enregistrer"}
                                            </Button>
                                            {loading && (
                                                <CircularProgress
                                                    size={24}
                                                    sx={{
                                                        color: green[500],
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        marginTop: '-12px',
                                                        marginLeft: '-12px',
                                                    }}
                                                />
                                            )}
                                        </Box>
                                        {!success ? <Button onClick={() => {
                                            reset();
                                            setActiveStep(0);
                                        }} variant={"outlined"}>
                                            Réinitialiser
                                        </Button> : <Button variant={"contained"} endIcon={<EngineeringIcon />}>
                                            Assigner des techniciens
                                        </Button>
                                        }
                                    </div>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <div style={{ display: activeStep === 0 ? 'block' : 'none' }}>
                                        <AutoCompletePattern name={"intervention"} control={control} label={"Sélection du type d'intervention"} required={true} content={typologieInterventionsData} placeholder={"Type d'intervention"} optionsSelected={interventionSelectionned} setOptionsSelected={setInterventionSelectionned} />
                                    </div>
                                    <br />
                                    <div style={{ display: activeStep === 1 ? 'block' : 'none' }}>
                                        <AutoCompleteMultiplePattern name={"commandes"} control={control} label={"Sélection des commandes"} required={true} content={commandesData} placeholder={"Commande"} optionsSelected={commmandesSelectionned} setOptionsSelected={setCommmandesSelectionned} />
                                    </div>
                                    <br />
                                    <div style={{ display: activeStep === 2 ? 'block' : 'none' }}>
                                        <AutoCompletePattern name={"sites"} control={control} label={"Sélection des sites"} required={true} content={sitesData} placeholder={"Site"} optionsSelected={sitesSelectionned} setOptionsSelected={setSitesSelectionned} />
                                    </div>
                                    <br />
                                    <div style={{ display: activeStep === 3 ? 'block' : 'none' }}>
                                        <div>
                                            <DatePickerPattern name={"debutPeriode"} control={control} label={"Date de début d'intervention"} required={true} optionsSelected={startPeriodSelectionned} setOptionsSelected={setStartPeriodSelectionned} disableFuture={false} disablePast={true} maxDate={endPeriodSelectionned} />
                                        </div>
                                        <div>
                                            <DatePickerPattern name={"finPeriode"} control={control} label={"Date de fin d'intervention"} required={true} optionsSelected={endPeriodSelectionned} setOptionsSelected={setEndPeriodSelectionned} disableFuture={false} disablePast={true} minDate={startPeriodSelectionned} />
                                        </div>
                                    </div>
                                </React.Fragment>)}
                        </form>
                    </FormProvider>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Retour
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
                        {activeStep !== steps.length &&
                            <Button onClick={handleNext} disabled={disableNextButton}>
                                {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
                            </Button>
                        }
                    </Box>

                </div>
            </div>
        </div>
    )
}

export default AppointmentCreationForm