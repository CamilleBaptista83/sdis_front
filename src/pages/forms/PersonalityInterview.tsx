import React from 'react'
import { FormProvider, useForm } from "react-hook-form";
import { Button } from '@mui/material';
import TextfieldPattern from '../../components/formPatterns/textfieldPattern/TextfieldPattern';
import DatePickerPattern from '../../components/formPatterns/datePickerPattern/datePickerPattern';
import AutoCompletePattern from '../../components/formPatterns/autocompletePattern/AutoCompletePattern';
import AutoCompleteMultiplePattern from '../../components/formPatterns/autoCompleteMultiplePattern/AutoCompleteMultiplePattern';
import RadioPattern from '../../components/formPatterns/radioPattern/RadioPattern'
import RatingPattern from '../../components/formPatterns/ratingPattern/RatingPattern';

import "./forms.scss";

interface IFormInput {
    prenom: string;
    nom: string;
    poste: string;
    date: Date;
    interviewFormat: string;
    responsables: any;
    interviewSummary: string,
    rating: string
}

const defaultValues = {
    prenom: "",
    nom: "",
    poste: "",
    date: new Date(),
    responsables: [],
    interviewFormat: "",
    technicalTest: "",
    interviewSummary: "",
    rating: "0"
}

const PersonalityInterview = () => {
    const methods = useForm<IFormInput>({ defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue, watch, formState: { errors } } = methods;
    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <div className='page-container' >
            <h1>Personality Interview</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className='form-container'>
                    <div className='form-group'>
                        <div className='form-row'>
                            <TextfieldPattern name={"prenom"} control={control} label={"Prénom"} required={true} fullWidth={true} />
                            <DatePickerPattern name={"date"} control={control} label={"Date de l'entretien"} required={true} />
                        </div>
                        <div className='form-row'>
                            <TextfieldPattern name={"nom"} control={control} label={"Nom"} required={true} />
                            <AutoCompletePattern name={"poste"} control={control} label={"Poste recherché"} required={true} jobs={jobs} />
                        </div>
                    </div>
                    <div className='form-row'>
                        <AutoCompleteMultiplePattern name={"responsables"} control={control} label={"Responsable(s) rencontré(s)"} responsablesSelection={responsablesSelection} placeholder={'responsable'} />
                    </div>
                    <div className='form-group'>
                        <RadioPattern control={control} name={"interviewFormat"} label={"Entretien Physique"} radioButtonsData={toggleRadioButtonsYesOrNo} labelPlacement={"end"} row={true} />
                        <RadioPattern control={control} name={"technicalTest"} label={"Dossier technique rédigé"} radioButtonsData={toggleRadioButtonsYesOrNo} labelPlacement={"end"} row={true} />
                    </div>
                    <div className='form-row'>
                        <TextfieldPattern name={"interviewSummary"} control={control} label={"Résumé de l'entretien"} required={true} multiline={true} rows={"10"} fullWidth={true} />
                    </div>
                    <div className='form-row'>
                        <RatingPattern name={"rating"} control={control} legend={"Notez sur 5 étoiles la qualité de l'échange autour de la signature du contrat"} />
                    </div>
                    <div className='form-row'>
                        <Button type="submit" variant={"contained"}>
                            Envoyer
                        </Button>
                        <Button onClick={() => reset()} variant={"outlined"}>
                            Réinitialiser
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
export default PersonalityInterview

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
    "Ingénieur technico-commercial en informatique/Ingénieure technico-commerciale en informatique",
    "Technicien/Technicienne de maintenance en informatique",
    "Technicien/Technicienne télécoms et réseaux",
    "Testeur/Testeuse"
]

const responsablesSelection = ["Livia Morton", "Everardo Robinette", "Alan Baez", "Keith Liu", "Dewayne Cobb", "Camila Post", "Alina Blair", "Rashawn Rush", "Amiya Borges", "Tyshawn Root"]

const toggleRadioButtonsYesOrNo = ["Oui", "Non"];