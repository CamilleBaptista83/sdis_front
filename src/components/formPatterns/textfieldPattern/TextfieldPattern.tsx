import React from 'react'
import { useForm, Controller, useFormContext } from "react-hook-form";
import { Checkbox, Input, TextField, Autocomplete, Select, MenuItem, InputLabel, Button, FormHelperText, FormControl } from "@mui/material";


interface TextFieldProps {
    name: string;
    control: any;
    label?: string;
    required?: boolean;
    rows?: string;
    multiline?: boolean;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
}


const TextfieldPattern = ({ name, control, label, required, multiline, rows, fullWidth, error, helperText }: TextFieldProps) => {
    return (
        <FormControl fullWidth={fullWidth}>
            <Controller name={name} control={control} render={({ field: { onChange, value } }) => <TextField required={required} onChange={onChange} defaultValue={""} value={value} label={label} variant="outlined" className="item" rows={rows} multiline={multiline} fullWidth={fullWidth} error={error}
                helperText={helperText} />} />
        </FormControl>
    )
}

export default TextfieldPattern