import React, { useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { useFormContext } from "react-hook-form"

const FileInput = props => {
    const { name, label = name } = props
    const { register, unregister, setValue, watch } = useFormContext()
    const files = watch(name)
    const onDrop = useCallback(
        droppedFiles => {
            setValue(name, droppedFiles, { shouldValidate: true })
        },
        [setValue, name]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: props.accept,
    })
    useEffect(() => {
        register(name)
        return () => {
            unregister(name)
        }
    }, [register, unregister, name])
    return (
        <div style={{ background: "lightgrey", padding: "20px", borderRadius: "10px" }}>
            <label className=" " htmlFor={name}>
                {label}
            </label>
            <div
                {...getRootProps()}
                type="file"
                role="button"
                aria-label="File Upload"
                id={name}
            >
                {!!files?.length && (
                    <div className=" ">
                        {files.map(file => {
                            console.log(file)
                            return (
                                <div key={file.name}>
                                    <p>{file.name} - {file.size} octets</p>
                                    {/* <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        style={{
                                            height: "200px",
                                        }}
                                    /> */}
                                </div>
                            )
                        })}
                    </div>
                )}
                <input {...props} {...getInputProps()} />
                <div
                    style={{ width: "500px", height: "200px", border: "black solid 2px", display: "flex", alignItems: "center" }}
                    className={" " + (isDragActive ? " " : " ")}
                >
                    <img />
                    <p style={{ textAlign: "center" }}>Ajoutez le fichier à cet emplacement</p>

                </div>
            </div>
        </div>
    )
}

export default FileInput