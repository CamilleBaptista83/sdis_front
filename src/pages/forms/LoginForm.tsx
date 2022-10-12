import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


interface IFormInputs {
    email: string;
    password: string;
}

const SignupSchema = yup
    .object({
        email: yup.string().required(),
        password: yup.string().defined(),
    })
    .required();


const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(SignupSchema)
    });

    const onSubmit = (data: IFormInputs) => {
        alert(JSON.stringify(data));
    };


    return (
        <>
            <div>LoginForm</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input {...register("email")} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Last Name</label>
                    <input {...register("password")} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default LoginForm