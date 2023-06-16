import { useParams } from "react-router-dom";

import checkCurrentProject from "utils/checkCurrentProject";

export default function ProjectPage() {
	const projectName = useParams("projectName").projectName.split("-").join(" ");

	const currentProject = checkCurrentProject(projectName);

	return <>{currentProject}</>;
}
