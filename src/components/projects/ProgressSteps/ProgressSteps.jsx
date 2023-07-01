import { useEffect, useRef, useState } from "react";
import css from "./ProgressSteps.module.scss";

export default function ProgressSteps({ numberOfElements = 4 }) {
	const [currentIndex, setCurrentIndex] = useState(1);

	const prevBtnRef = useRef();
	const nextBtnRef = useRef();
	const liElements = useRef([]);

	useEffect(() => {
		prevBtnRef.current.setAttribute("disabled", "true");
	}, []);
	console.log("liElements.current", liElements.current);

	function onPrevClick() {
		nextBtnRef.current.removeAttribute("disabled");

		if (currentIndex === 2) {
			prevBtnRef.current.setAttribute("disabled", "true");
			setCurrentIndex(prev => prev - 1);

			return;
		}

		setCurrentIndex(prev => prev - 1);
	}

	function onNextClick() {
		prevBtnRef.current.removeAttribute("disabled");

		setCurrentIndex(prev => prev + 1);

		if (currentIndex === 3) {
			nextBtnRef.current.setAttribute("disabled", "true");
			return;
		}
	}

	return (
		<>
			<h1>{currentIndex}</h1>
			<ul className={css.list}>
				{liElements.current.map(li => (
					<li key={li} className={css.item}>
						{li}
					</li>
				))}
				{/* <li className="steps__item steps_active">1</li> */}

				{/* You can add <li>. This will work if screen width allow */}
			</ul>
			<div className={css.wrapper}>
				<button ref={prevBtnRef} className={css.button} onClick={onPrevClick} data-action="prev">
					Prev
				</button>
				<button ref={nextBtnRef} className={css.button} onClick={onNextClick} data-action="next">
					Next
				</button>
			</div>
		</>
	);
}
