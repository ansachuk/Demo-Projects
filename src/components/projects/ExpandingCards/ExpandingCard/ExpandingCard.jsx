import css from "./ExpandingCard.module.scss";

export default function ExpandingCard({ href, title }) {
	return (
		<li className={css.item}>
			<img height="400" src={href} alt={title} />
			{/*TODO: add capitalize => */}
			<p>{title}</p>
		</li>
	);
}
