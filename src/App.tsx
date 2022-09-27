import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./services/traduction/i18n";
import RadioPattern from "./components/formPatterns/radioPattern/RadioPattern";

function App() {
	const { t } = useTranslation();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("TITRES.confirmation")}
					Learn React
				</a>

				<RadioPattern
					label="test"
					datas={["test", "tata", "toto"]}
					defaultChecked="tata"
				/>
			</header>
		</div>
	);
}

export default App;
