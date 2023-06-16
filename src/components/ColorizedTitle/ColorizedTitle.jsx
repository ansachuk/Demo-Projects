import css from "./ColorizedTitle.module.scss";

export default function ColorizedTitle({ title }) {
	return <h1 className={css.title}>{title}</h1>;
}
