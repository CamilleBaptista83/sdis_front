import React from 'react'
import { useForm, Controller, useFormContext } from "react-hook-form";
import { Checkbox, Input, TextField, Autocomplete, Select, MenuItem, InputLabel, Button, FormHelperText, FormControl } from "@mui/material";


interface AutocompleteProps {
    name: string;
    control: any;
    placeholder?: string;
    label: string;
    required?: boolean;
    jobs?: string[];
    content: string[];
    optionsSelected?: any;
    setOptionsSelected?: any;

}

const AutoCompletePattern = ({ name, control, label, required, jobs, content, optionsSelected, setOptionsSelected, placeholder }: AutocompleteProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => (
                <Autocomplete
                    className="item"
                    placeholder={placeholder}
                    onChange={(event, item) => {
                        onChange(item);
                        setOptionsSelected(item)
                    }}
                    options={content}
                    isOptionEqualToValue={(option, value) => {
                        return option === value;
                    }}
                    value={value || null}
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                label={label}
                                margin="normal"
                                variant="outlined"
                                required={required}
                            />
                        );
                    }}

                />
            )}
        />
    )
}

export default AutoCompletePattern