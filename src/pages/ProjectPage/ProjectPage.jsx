import { useParams } from "react-router-dom";
import BackLink from "components/BackLink/BackLink";

import checkCurrentProject from "utils/checkCurrentProject";

export default function ProjectPage() {
	const projectName = useParams("projectName").projectName.split("-").join(" ");

	const currentProject = checkCurrentProject(projectName);

	return (
		<>
			<BackLink />
			<main>{currentProject}</main>
		</>
	);
}
