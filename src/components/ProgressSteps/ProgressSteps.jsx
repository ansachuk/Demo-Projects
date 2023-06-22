import { useRef, useState } from "react";
import css from "./ProgressSteps.module.scss";

export default function ProgressSteps() {
	const [currentIndex, setCurrentIndex] = useState(1);

	const prevBtnRef = useRef();
	const nextBtnRef = useRef();

	// const ACTIVE_CLASS = "steps_active";

	// function onButtonClick(e) {
	// 	const btn = e.currentTarget;

	// 	if (btn.dataset.action === "next") {
	// 		setCurrentIndex(prev => prev + 1);

	// 		if (currentIndex === 4) {
	// 			nextBtnRef.setAttribute("disabled", "true");
	// 		}
	// 	} else {
	// 		setCurrentIndex(prev => prev - 1);

	// 		if (currentIndex === 1) {
	// 			prevBtnRef.setAttribute("disabled", "true");
	// 		}
	// 	}
	// }

	function onPrevClick() {
		nextBtnRef.current.removeAttribute("disabled");

		// debugger;

		// stepsRef[currentActiveStepIndex].classList.remove(ACTIVE_CLASS);
		setCurrentIndex(prev => prev - 1);

		if (currentIndex === 0) {
			prevBtnRef.current.setAttribute("disabled", "true");
			return;
		}
	}

	function onNextClick() {
		prevBtnRef.current.removeAttribute("disabled");

		setCurrentIndex(prev => prev + 1);

		// stepsRef[currentActiveStepIndex].classList.add(ACTIVE_CLASS);

		if (currentIndex === 3) {
			nextBtnRef.current.setAttribute("disabled", "true");
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
