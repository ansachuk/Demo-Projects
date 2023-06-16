import { Navigate } from "react-router-dom";

import Calculator from "components/Calculator/Calculator";
import ExpandingCards from "components/ExpandingCards/ExpandingCards";
import ProgressSteps from "components/ProgressSteps/ProgressSteps";

export default function checkCurrentProject(projectName) {
	switch (projectName) {
		case "Expanding Cards":
			return <ExpandingCards />;

		case "Progress Steps":
			return <ProgressSteps />;

		case "Calculator":
			return <Calculator />;

		default:
			return <Navigate to="/" />;
	}
}
