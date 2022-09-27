import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface ICheckboxPatternProps {
	label: string;
	checked?: boolean;
	disabled?: boolean;
	labelPlacement?: "start" | "top" | "end" | "bottom";
}

const defaultProps: ICheckboxPatternProps = {
	checked: false,
	disabled: false,
	label: "",
	labelPlacement: "end",
};

const CheckboxPattern: React.FC<ICheckboxPatternProps> = (props) => {
	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Checkbox
						checked={props.checked}
						disabled={props.disabled}
					/>
				}
				label={props.label}
				labelPlacement={props.labelPlacement}
			/>
		</FormGroup>
	);
};

CheckboxPattern.defaultProps = defaultProps;

export default CheckboxPattern;
