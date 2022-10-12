import React, { ChangeEvent, useState } from "react";
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Box,
    Rating,
    TextField,
    Typography,
    Autocomplete
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



interface FormValues {
    Prénom?: string;
    Nom?: string;
    Profession?: string;
    headset?: string;
    review?: number;
}
const reviewName = 'review';

function FilledContractCandidateForm() {
    const [formValues, setFormValues] = useState<FormValues>({});
    const handleTextFieldChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleAutoCompleteChange = (e: React.SyntheticEvent<Element, Event>): void => {
        const professionSelected = e.target as HTMLInputElement;
        setFormValues({
            ...formValues,
            Profession: professionSelected.textContent as string,
        });
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        checked?: boolean
    ) => {
        const { name } = event.target;
        if (!checked) {
            //@ts-ignore still working on the typing
            delete formValues[name]
        } else {
            setFormValues({
                ...formValues,
                [name]: checked,
            });
        }
    };
    const handleRatingChange = (
        value: number | null,
        name: string
    ) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = () => {
        console.log(formValues);
    }



    return (
        <div className='page-container'>
            <h1>FilledContractCandidateForm</h1>
            <form>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="50vh"
                    flexDirection="column"
                    className="Box"
                >
                    <Box>
                        <TextField
                            sx={{ paddingBottom: 2, paddingRight: 1 }}
                            name="Prénom"
                            variant="outlined"
                            placeholder="Prénom"
                            onChange={handleTextFieldChange}
                            required
                        />
                        <TextField
                            sx={{ paddingBottom: 2, paddingLeft: 1 }}
                            name="Nom"
                            variant="outlined"
                            placeholder="Nom"
                            onChange={handleTextFieldChange}
                            required
                        />
                    </Box>
                    <Box width='100%'>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={jobs}
                            onChange={handleAutoCompleteChange}
                            renderInput={(params) => <TextField {...params} label="Profession" name="Profession" required
                            />}
                        />
                    </Box>
                    <FormLabel component="legend">Product</FormLabel>
                    <FormGroup row sx={{ paddingBottom: 2 }} >
                        <FormControlLabel
                            control={<Checkbox name="laptop" value="laptop" onChange={handleCheckboxChange} />}
                            label="Laptop"
                        />
                        <FormControlLabel
                            control={<Checkbox name="headset" value="headset" onChange={handleCheckboxChange} />}
                            label="Head Set"
                        />
                    </FormGroup>
                    <Typography component="legend">Notez la qualité de l'échange autour de la signature du contrat</Typography>
                    <Rating name={reviewName} sx={{ paddingBottom: 2 }} onChange={(event, value) => handleRatingChange(value, reviewName)} />
                    <Button variant="outlined" onClick={handleSubmit}>Envoyer</Button>
                </Box>
            </form>
        </div>
    )
}
export default FilledContractCandidateForm


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
