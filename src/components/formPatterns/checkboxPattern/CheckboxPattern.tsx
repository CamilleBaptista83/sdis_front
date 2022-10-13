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



const CheckboxPattern: React.FC<ICheckboxPatternProps> = ({ label, checked, disabled, labelPlacement }) => {

	const [check, setCheck] = React.useState<boolean | undefined>(false);


	// React.useEffect(() => {
	// 	//APPEL AU WEB SERVICE OU JSON
	// 	console.log(check)
	// }, [check])

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Checkbox
						checked={check}
						disabled={disabled}
						onChange={(e) => {
							setCheck(!check)
						}}
						className="item"
					/>
				}
				label={label}
				labelPlacement={"start"}
			/>
		</FormGroup>
	);
};

export default CheckboxPattern;
