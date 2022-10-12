import React from 'react'
import { Controller } from "react-hook-form";
import { Rating, Typography } from "@mui/material";


interface RatingProps {
    name: string;
    control: any;
    legend?: string;
    required?: boolean;
}


const RatingPattern = ({ name, control, legend, required }: RatingProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => (
                <div className='item'>
                    <Typography component="legend">{legend}</Typography>
                    <Rating sx={{ paddingBottom: 2 }} onChange={onChange} value={value} />
                </div>
            )}
        />
    )
}

export default RatingPattern