import React from 'react'
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
}


const DatePickerPattern = ({ name, control, label, required }: DatePickerProps) => {
    return (
        <Controller
            name="date"
            control={control}
            render={({
                field: { onChange, value }
            }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs} locale='fr'
                >
                    <DatePicker
                        className="item"
                        label="Date de démarrage de la mission"
                        disableFuture
                        value={value.toString()}
                        onChange={onChange}
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