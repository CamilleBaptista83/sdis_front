import React from 'react'
import { useForm, Controller, useFormContext } from "react-hook-form";
import { Checkbox, Input, TextField, Autocomplete, Select, MenuItem, InputLabel, Button, FormHelperText, FormControl } from "@mui/material";


interface AutocompleteMultipleProps {
    name: string;
    control: any;
    label?: string;
    required?: boolean;
    responsablesSelection: string[];
    placeholder: string;
}

const AutoCompleteMultiplePattern = ({ name, control, label, required, responsablesSelection, placeholder }: AutocompleteMultipleProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => (
                <Autocomplete
                    style={{ margin: "0" }}
                    sx={{ margin: 0 }}
                    multiple
                    value={value}
                    onChange={(event: any, newValue: any | null) => {
                        onChange(newValue.map((option: any | null) => option.value || option));
                    }}
                    className="item"
                    options={responsablesSelection}
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                sx={{ margin: 0 }}

                                label={label}
                                placeholder={placeholder}
                                margin="normal"
                                variant="standard"
                                required={value.length === 0}
                                style={{ margin: "0" }}
                            />
                        );
                    }}
                />
            )}
        />
    )
}

export default AutoCompleteMultiplePattern


