import React from 'react'
import TextfieldPattern from '../components/formPatterns/textfieldPattern/TextfieldPattern'
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from '@mui/material'


interface IFormInput {
    password: string;
}

const defaultValues = {
    password: "",
}


const PasswordCreationPage = () => {

    const YupSchema = yup.object().shape({
        // firstName: yup.string().required('Un prénom est requis !'),
        // lastName: yup.string().required('Un nom est requis !'),
        password: yup
            .string()
            .min(5, 'Le mot de passe doit contenir au moins 4 caractères.')
            .required('Un mot de passe est requis !'),
    });



    const methods = useForm<IFormInput>({ resolver: yupResolver(YupSchema), defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue, watch, formState: { errors } } = methods;

    const onSubmit = (data: IFormInput) => console.log(data);


    return (
        <div className='page-container'>
            <h1>
                Créez votre mot de passe
            </h1>
            <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className='form-container'>
                        <TextfieldPattern name="" control={control} label="Mot de passe" fullWidth={true} error={!!errors.password}
                            helperText={errors.password && errors?.password?.message} />
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                            <Button type="submit" variant={"contained"}>
                                Envoyer
                            </Button>
                            <Button type="reset" onClick={() => reset()} variant={"outlined"}>
                                Réinitialiser
                            </Button>
                        </div>
                    </form>
                    <p>NB. Le mot de passe doit contenir 5 caractères minimum.</p>
                </FormProvider>
            </div>
        </div>
    )
}

export default PasswordCreationPage