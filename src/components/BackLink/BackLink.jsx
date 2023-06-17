import { Link } from "react-router-dom";

import css from "./BackLink.module.scss";

export default function BackLink() {
	return (
		<Link className={css.backLink} to={"/"}>
			Back
		</Link>
	);
}
