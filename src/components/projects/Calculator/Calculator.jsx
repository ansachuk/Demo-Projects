// import { numbers, mainOptions, secondlyOptions } from "data/calculatorData";
// import css from "./Calculator.module.scss";
import { useState } from "react";

export default function Calculator() {
	// const [output] = useState(0);
	const [black, setBlack] = useState(0);
	const [red, setRed] = useState(0);
	//const [output, setOutput] = useState(0);
	//TODO: ProggressSTeps make as vocabulary {1:true,2:false,etc...}

	const total = black + red;
	const blackPersent = black / (total / 100) || 0;

	return (
		// <div className={css.calculator}>
		// 	<div className={css.wrapper__output}>
		// 		<p className={css.output}>{output}</p>
		// 	</div>
		// 	<div className={css.calc}>
		// 		<div className={css.calc__mainWrapper}>
		// 			<div className={css.calc__numbers}>
		// 				{numbers.map(num => (
		// 					<button key={num} data-value={num}>
		// 						{num}
		// 					</button>
		// 				))}
		// 			</div>
		// 			<div className={css.calc__mainOption}>
		// 				{mainOptions.map(opt => (
		// 					<button key={opt} data-value={opt}>
		// 						{opt}
		// 					</button>
		// 				))}
		// 			</div>
		// 		</div>
		// 		<div className={css.calc__bottomOption}>
		// 			{secondlyOptions.map(opt => (
		// 				<button key={opt} data-value={opt}>
		// 					{opt}
		// 				</button>
		// 			))}
		// 		</div>
		// 	</div>
		// 	<button type="button" className={css.clear}>
		// 		CLEAR
		// 	</button>
		// </div>
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div style={{ display: "flex", gap: 30, marginBottom: 24 }}>
					<div
						onClick={() => setBlack(prev => prev + 1)}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: 32,
							color: "white",
							width: 120,
							height: 120,
							padding: 20,
							borderRadius: 20,
							textAlign: "center",
							flexDirection: "column",
							gap: 10,
							backgroundColor: "black",
							userSelect: "none",
							cursor: "pointer",
						}}
					>
						black
						<span>{black}</span>
					</div>
					<div
						onClick={() => setRed(prev => prev + 1)}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: 32,
							color: "white",
							width: 120,
							height: 120,
							padding: 20,
							borderRadius: 20,
							textAlign: "center",
							flexDirection: "column",
							gap: 10,
							backgroundColor: "red",
							userSelect: "none",
							cursor: "pointer",
						}}
					>
						red
						<span>{red}</span>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: 32,
							color: "white",
							width: 120,
							height: 120,
							padding: 20,
							borderRadius: 20,
							textAlign: "center",
							flexDirection: "column",
							gap: 10,
							backgroundColor: "teal",
							userSelect: "none",
						}}
					>
						total
						<span>{total}</span>
					</div>
				</div>
				<div
					style={{
						width: 700,
						height: 60,
						backgroundColor: "red",
						borderRadius: 12,
						position: "relative",
						overflow: "hidden",
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: `${blackPersent}%`,
							height: "100%",
							backgroundColor: "black",
							borderRight: "1px solid gold",
						}}
					></div>
				</div>
			</div>
		</>
	);
}
