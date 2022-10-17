import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import FileInput from "./FileInput"

const DragDropFilePattern = () => {
    const methods = useForm({
        mode: "onBlur",
    })
    const onSubmit = methods.handleSubmit(values => {
        console.log("values", values)
    })

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <div className="">
                    <FileInput
                        accept=".csv, application/vnd.ms-excel, text/csv"
                        name="file alt text"
                        label="Import du fichier"
                    />
                </div>
            </form>
        </FormProvider>
    )
}

export default DragDropFilePattern