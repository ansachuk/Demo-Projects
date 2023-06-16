import Homepage from "pages/Homepage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</>
	);
};
