import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, FormControl } from "@mui/material";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { loggedActions } from "../../redux/actions/loggedActions";

import { bindActionCreators } from "redux";


interface MyForm {
    // firstName: string;
    // lastName: string;
    email: string;
    password: string;
}

const YupSchema = yup.object().shape({
    // firstName: yup.string().required('Un prénom est requis !'),
    // lastName: yup.string().required('Un nom est requis !'),
    email: yup
        .string()
        .email('Entrez un format d\'email valide !')
        .required('Un email est requis !'),
    password: yup
        .string()
        .min(4, 'Le mot de passe doit contenir au moins 4 caractères.')
        .required('Un mot de passe est requis !'),
});


const defaultValues = {
    // firstName: "",
    // lastName: "",
    email: "",
    password: ""
}





const LoginForm = () => {
    const dispatch = useDispatch();
    const { getLogged } = bindActionCreators(loggedActions, dispatch);

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<MyForm>({
        resolver: yupResolver(YupSchema),
        defaultValues: defaultValues
    });

    //  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
    // const { handleSubmit, reset, control, setValue, watch, formState: { errors } } = methods;



    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(defaultValues);
    }, [defaultValues]);


    const onSubmit = (data: MyForm) => {
        console.log(data)
        getLogged(data);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "40px", backgroundColor: "white", borderRadius: "5px" }}>
            <FormControl fullWidth>
                {/* <Controller name={'firstName'} control={control} render={({ field: { onChange, value } }) => <TextField required onChange={onChange} value={value} label={'Prénom'} variant="outlined" className="item" error={!!errors.firstName}
                    helperText={errors.firstName && errors?.firstName?.message} />} />
                <Controller name={'lastName'} control={control} render={({ field: { onChange, value } }) => <TextField required onChange={onChange} value={value} label={'Nom'} variant="outlined" className="item" error={!!errors.lastName}
                    helperText={errors.lastName && errors?.lastName?.message} />} /> */}
                <Controller name={'email'} control={control} render={({ field: { onChange, value } }) => <TextField required onChange={onChange} value={value} label={'Email'} variant="outlined" className="item" error={!!errors.email}
                    helperText={errors.email && errors?.email?.message} />} />
                <Controller name={'password'} control={control} render={({ field: { onChange, value } }) => <TextField required onChange={onChange} value={value} label={'Mot de passe'} variant="outlined" className="item" error={!!errors.password}
                    helperText={errors.password && errors?.password?.message} />} />
            </FormControl>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Button type="submit" variant={"outlined"}>Envoyer</Button>
                <Button onClick={() => reset()} variant={"outlined"}>
                    Réinitialiser
                </Button>
            </div>
        </form>
    )
}

export default LoginForm