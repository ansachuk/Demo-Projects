import cardsInfo from "data/expandingCardsData";
import css from "./ExpandingCards.module.scss";
import ExpandingCard from "./ExpandingCard/ExpandingCard";

export default function ExpandingCards() {
	return (
		<>
			<ul className={css.list}>
				{cardsInfo.map(({ href, title }) => (
					<ExpandingCard key={href} href={href} title={title} />
				))}
			</ul>
		</>
	);
}
