import { Navigate } from "react-router-dom";

import Calculator from "components/projects/Calculator/Calculator";
import ExpandingCards from "components/projects/ExpandingCards/ExpandingCards";
import ProgressSteps from "components/projects/ProgressSteps/ProgressSteps";

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
