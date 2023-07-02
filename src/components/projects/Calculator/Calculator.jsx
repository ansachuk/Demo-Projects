import { numbers, mainOptions, secondlyOptions } from "data/calculatorData";
import css from "./Calculator.module.scss";
import { useState } from "react";

export default function Calculator() {
	const [output] = useState(0);
  //const [output, setOutput] = useState(0);
  //TODO: ProggressSTeps make as vocabulary {1:true,2:false,etc...}
	return (
		<div className={css.calculator}>
			<div className={css.wrapper__output}>
				<p className={css.output}>{output}</p>
			</div>
			<div className={css.calc}>
				<div className={css.calc__mainWrapper}>
					<div className={css.calc__numbers}>
						{numbers.map(num => (
							<button key={num} data-value={num}>
								{num}
							</button>
						))}
					</div>
					<div className={css.calc__mainOption}>
						{mainOptions.map(opt => (
							<button key={opt} data-value={opt}>
								{opt}
							</button>
						))}
					</div>
				</div>
				<div className={css.calc__bottomOption}>
					{secondlyOptions.map(opt => (
						<button key={opt} data-value={opt}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<button type="button" className={css.clear}>
				CLEAR
			</button>
		</div>
	);
}
