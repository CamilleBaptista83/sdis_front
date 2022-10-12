import React from "react";
import { Link } from "react-router-dom";
const FormList = () => {
    return (
        <div className="page-container">
            <h1>Liste des formulaires</h1>
            <ul className="list-container">
                <li>
                    <Link to='/formulaires/candidat-entretien-personnalité'>
                        Questionnaire candidat après l’entretien de personnalité
                    </Link>
                </li>
                <li>
                    <Link to='/formulaires/candidat-signature-contrat'>
                        Questionnaire candidat après signature du contrat
                    </Link>
                </li>
                <li>
                    <Link to='/formulaires/retour-entretien-client'>
                        Retour sur la préparation d'entretien client
                    </Link>
                </li>
                <li>
                    Formulaire de Check list onbording
                </li>
                <li>
                    Formulaire de Check list onbording
                </li>
                <li>
                    Questionnaire candidat après processus de onbording (1 mois)
                </li>
                <li>
                    Formulaire RI pour checklist Welcome pack
                </li>
                <li>Questionnaire candidat après la préparation à l’entretien</li>
                <li>
                    Formulaire des entretiens programmés trimestriel et annuel (Consultant et manager)
                </li>
            </ul>
        </div>
    )
};
export default FormList;
