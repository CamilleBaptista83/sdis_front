import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@mui/material'
import Folder from '../../style/img/folder.png'
import FileIcon from '../../style/img/csv-file.png'
import DeleteIcon from '@mui/icons-material/Delete';

import './DropZoneComponent.scss'

const DropZoneComponent = () => {
    const [file, setFile] = useState({
        path: "",
        name: "",
        size: "",
        type: ""
    });


    const sizeInMb = (bytes: any): string => `${((bytes / 1000).toFixed(2))} Ko`;

    const onDrop = useCallback(
        (acceptedFiles: any) => {
            setFile(acceptedFiles[0])
        }, []);

    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        multiple: false,
        accept: { "text/csv": [".csv"], },
    });


    const handleSubmit = (file: any) => {
        console.log("File Uploaded =>", file)
        const formData = new FormData();
        formData.append('asset', file);
        console.log("formData =>", formData.getAll('asset'))

    }

    const removeFile = (file: any) => {
        setFile({
            path: "",
            name: "",
            size: "",
            type: ""
        })
    }

    interface IBorderStyle {
        border: string;
    }
    const [borderDropZone, setBorderDropZone] = useState<IBorderStyle>({
        border: "dashed white"
    })

    useEffect(() => {

        isDragReject === true && setBorderDropZone({
            border: "dashed red"
        })
        isDragAccept === true && setBorderDropZone({
            border: "dashed green"
        })

        if (isDragAccept === false && isDragReject === false) {
            setBorderDropZone({
                border: "dashed white"
            })
        }

    }, [isDragAccept, isDragReject])

    return (
        <div className='dropzone-component-container'>
            <div className='dropzone-tool-container' >

                <div className='drag-drop-zone' {...getRootProps()} style={borderDropZone}>
                    <input {...getInputProps()} />
                    {/* Dropzone */}
                    <img src={Folder} style={{ width: "35px", margin: "10px" }} />
                    <p className='title-drag-drop'>Déposez votre fichier ici.</p>
                    {isDragReject ? <p className='description-drag-drop'>Désolé, votre fichier n'est pas adapté au format .CSV</p> :
                        <p className='description-drag-drop'>Seuls les fichiers .CSV sont acceptées.</p>}
                </div>
                {/* Render file */}
                {file?.name.length > 1 &&
                    <div className='drag-drop-submit-container'>
                        <div className='drag-drop-file-element'>
                            <img src={FileIcon} style={{ width: "25px" }} />
                            <span>{file?.name} - {sizeInMb(file?.size)}</span>
                            <DeleteIcon onClick={() => removeFile(file)} sx={{
                                cursor: "pointer",
                                '&:hover': {
                                    opacity: '0.5'
                                },
                            }} />
                        </div>
                        <div>
                            <Button variant="contained" onClick={() => handleSubmit(file)}>Envoyer</Button>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default DropZoneComponent