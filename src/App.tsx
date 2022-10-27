import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./services/traduction/i18n";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout, Home, Contact, NoPage } from './pages'
import SdisDashboard from "./pages/SdisDashboard";
import AppointmentForm from "./pages/forms/AppointmentForm";
import PasswordCreationPage from "./pages/PasswordCreationPage";
import ImportByFile from "./components/ImportByFile";
import AppointmentCreationForm from "./components/AppointmentCreationForm";

function App() {


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/admin" element={<SdisDashboard />} >
						<Route path="/admin/import-fichier" element={<ImportByFile />} />
						<Route path="/admin/creation-rdv" element={<AppointmentCreationForm />} />
					</Route>
					<Route path="/prise-de-rendez-vous" element={<AppointmentForm />} />
					<Route path="/creation-compte-utilisateur" element={<PasswordCreationPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
