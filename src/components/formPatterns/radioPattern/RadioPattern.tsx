import FormControl from "@mui/material/FormControl/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import Radio from "@mui/material/Radio/Radio";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import React from "react";

import { Controller } from "react-hook-form";

interface IRadioPatternProps {
	label: string;
	defaultChecked?: string;
	control: any;
	name: string;
	disabled?: boolean;
	labelPlacement?: string;
	radioButtonsData: string[];
	row?: boolean;
}



const RadioPattern: React.FC<IRadioPatternProps> = ({ name, label, control, radioButtonsData, labelPlacement, disabled, row }) => {
	return (
		<Controller control={control} name={name}
			render={({ field }) => (
				<RadioGroup {...field} row={row}>
					{label}
					{radioButtonsData.map((data, index) => (
						<FormControlLabel
							key={index}
							labelPlacement={labelPlacement}
							value={data}
							control={<Radio />}
							label={data}
						/>
					))}
				</RadioGroup>
			)}
		/>
	);
};


export default RadioPattern;
