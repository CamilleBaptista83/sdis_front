import React from 'react'
import { useForm, Controller, useFormContext } from "react-hook-form";
import { Checkbox, Input, TextField, Autocomplete, Select, MenuItem, InputLabel, Button, FormHelperText, FormControl } from "@mui/material";


interface AutocompleteMultipleProps {
    name: string;
    control: any;
    label?: string;
    required?: boolean;
    content?: any;
    placeholder: string;
    optionsSelected?: any;
    setOptionsSelected?: any;
    disabled?: boolean;
    // commandesSelected?: any;
}

const AutoCompleteMultiplePattern = ({ name, control, label, required, content, placeholder, optionsSelected, disabled, setOptionsSelected }: AutocompleteMultipleProps) => {


    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => (
                <Autocomplete
                    style={{ margin: "0" }}
                    sx={{ margin: 0 }}
                    multiple
                    defaultValue={[]}
                    value={value || [null]}
                    disabled={disabled}
                    onChange={(event: any, newValue: any | null) => {
                        // optionsSelected.current = newValue
                        setOptionsSelected(newValue)
                        console.log(newValue)
                        onChange(newValue.map((option: any | null) => option.value || option));
                    }}
                    className="item"
                    options={content?.length > 0 ? content?.map((el: any) => el) : ['']}
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                sx={{ margin: 0 }}
                                label={label}
                                placeholder={placeholder}
                                margin="normal"
                                variant="standard"
                                required={value?.length === 0}
                                style={{ margin: "0" }}
                            />
                        );
                    }}
                />
            )
            }
        />
    )
}

export default AutoCompleteMultiplePattern


