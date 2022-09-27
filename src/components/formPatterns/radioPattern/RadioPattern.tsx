import FormControl from "@mui/material/FormControl/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import Radio from "@mui/material/Radio/Radio";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import React from "react";

interface IRadioPatternProps {
	label: string;
	defaultChecked?: string;
	disabled?: boolean;
	labelPlacement?: "start" | "top" | "end" | "bottom";
	datas: Array<string>;
}

const defaultProps: IRadioPatternProps = {
	defaultChecked: "",
	disabled: false,
	label: "",
	labelPlacement: "end",
	datas: [],
};

const RadioPattern: React.FC<IRadioPatternProps> = (props) => {
	return (
		<FormControl>
			<FormLabel id="demo-radio-buttons-group-label">
				{props.label}
			</FormLabel>
			<RadioGroup
				aria-labelledby="demo-radio-buttons-group-label"
				defaultValue={props.defaultChecked}
				name="radio-buttons-group"
			>
				{props.datas.map((data) => (
					<FormControlLabel
						value={data}
						control={<Radio />}
						label={data.charAt(0).toUpperCase() + data.slice(1)}
						labelPlacement={props.labelPlacement}
						disabled={props.disabled}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

RadioPattern.defaultProps = defaultProps;

export default RadioPattern;
