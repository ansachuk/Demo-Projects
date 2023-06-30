import { Navigate, Route, Routes } from "react-router-dom";

import Homepage from "pages/Homepage/Homepage";
import ProjectPage from "pages/ProjectPage/ProjectPage";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/:projectName" element={<ProjectPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};
