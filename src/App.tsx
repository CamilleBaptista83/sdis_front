import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./services/traduction/i18n";
import RadioPattern from "./components/formPatterns/radioPattern/RadioPattern";
import CheckboxPattern from "./components/formPatterns/checkboxPattern/CheckboxPattern";

function App() {
	const { t } = useTranslation();
	return (
		<div className="App">
			<div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", gap: "30px" }}>
				<div>
					<p>Boutons Radio</p>
					<RadioPattern
						label=""
						datas={["test", "tata", "toto"]}
						defaultChecked="tata"
					/>
				</div>
				<br />
				<div>
					<p>Boutons Checkbox</p>
					<CheckboxPattern label="test" />
					<CheckboxPattern label="test2" />
				</div>
			</div>
		</div >
	);
}

export default App;
