import { Link } from "react-router-dom";

import ColorizedTitle from "components/ColorizedTitle/ColorizedTitle";

import projectsData from "data/projectsData";
import css from "./Homepage.module.scss";

export default function Homepage() {
	document.title = "Demo projects";

	return (
		<main>
			<ColorizedTitle title="welcome"></ColorizedTitle>
			<nav className={css.nav}>
				{projectsData.map(project => {
					const href = project.split(" ").join("-");
					return (
						<Link className={css.link} key={project} to={`/${href}`}>
							{project}
						</Link>
					);
				})}
			</nav>
		</main>
	);
}
