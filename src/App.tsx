import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./services/traduction/i18n";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout, Home, Contact, NoPage, FormList } from './pages'
import PersonalityInterview from "./pages/forms/PersonalityInterview";
import FilledContractCandidateForm from "./pages/forms/FilledContractCandidateForm";
import FeedbackOnClientItw from "./pages/forms/FeedbackOnClitItw";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/formulaires" element={<FormList />} />
					<Route path="/formulaires/candidat-entretien-personnalité" element={<PersonalityInterview />} />
					<Route path="/formulaires/candidat-signature-contrat" element={<FilledContractCandidateForm />} />
					<Route path="/formulaires/retour-entretien-client" element={<FeedbackOnClientItw />} />
					<Route path="/contact" element={<Contact />} />
					{/* <Route path="*" element={<NoPage />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
