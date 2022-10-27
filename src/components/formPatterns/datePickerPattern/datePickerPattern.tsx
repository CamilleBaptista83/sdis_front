import React, { useState } from 'react'
import { Controller } from "react-hook-form";
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/fr'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



interface DatePickerProps {
    name: string;
    control: any;
    label?: string;
    required?: boolean;
    optionsSelected?: any;
    setOptionsSelected?: any;
    disableFuture?: boolean;
    disablePast?: boolean
    minDate?: any
    maxDate?: any
}


const DatePickerPattern = ({ name, control, label, required, optionsSelected, setOptionsSelected, disableFuture, disablePast, minDate, maxDate }: DatePickerProps) => {

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value }
            }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs} locale='fr'
                >
                    <DatePicker
                        className="item"
                        label={label}
                        disablePast={disablePast}
                        disableFuture={disableFuture}
                        value={value}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={(newValue) => {
                            onChange(newValue);
                            setOptionsSelected(newValue)
                        }}
                        renderInput={(params) => (
                            (
                                <TextField
                                    variant="outlined"
                                    margin="dense"
                                    required
                                    fullWidth
                                    color="primary"
                                    {...params}
                                />
                            )
                        )}
                    />
                </LocalizationProvider>
            )}
        />
    )
}

export default DatePickerPattern