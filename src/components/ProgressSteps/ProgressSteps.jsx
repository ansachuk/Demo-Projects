import { useRef, useState } from "react";
import css from "./ProgressSteps.module.scss";

export default function ProgressSteps() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const prevButtonsRef = useRef();
	const nextButtonsRef = useRef();

	// const ACTIVE_CLASS = "steps_active";

	function prevStepButtonClickHandler() {
		nextButtonsRef.removeAttribute("disabled");

		// stepsRef[currentActiveStepIndex].classList.remove(ACTIVE_CLASS);
		setCurrentIndex(prev => prev - 1);

		if (currentIndex === 0) {
			prevButtonsRef.setAttribute("disabled", "true");
			return;
		}
	}

	function nextStepButtonClickHandler() {
		prevButtonsRef.removeAttribute("disabled");

		setCurrentIndex(prev => prev + 1);

		// stepsRef[currentActiveStepIndex].classList.add(ACTIVE_CLASS);

		if (currentIndex === stepsRef.length - 1) {
			nextButtonsRef.setAttribute("disabled", "true");
			return;
		}
	}

	return (
		<>
			<h1>{currentIndex}</h1>
			<ul className={css.list}>
				{/* <li className="steps__item steps_active">1</li> */}
				<li className={css.item}>1</li>
				<li className={css.item}>2</li>
				<li className={css.item}>3</li>
				<li className={css.item}>4</li>
				{/* You can add <li>. This will work if screen width allow */}
			</ul>
			<div className={css.wrapper}>
				<button className={css.button} onClick={prevStepButtonClickHandler} data-action="prev" disabled>
					Prev
				</button>
				<button className={css.button} onClick={nextStepButtonClickHandler} data-action="next">
					Next
				</button>
			</div>
		</>
	);
}
