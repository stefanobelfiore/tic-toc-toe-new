import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PrintValue from "./printvalue.js";

const Board = () => {
	const [value, setValue] = useState(true);
	const [value1, setValue1] = useState(false);
	const [value2, setValue2] = useState(false);
	const [value3, setValue3] = useState(false);
	const [value4, setValue4] = useState(false);
	const [value5, setValue5] = useState(false);
	const [value6, setValue6] = useState(false);
	const [value7, setValue7] = useState(false);
	const [value8, setValue8] = useState(false);
	const [value9, setValue9] = useState(false);
	const [positions, setPositions] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);

	useEffect(() => {
		for (let i in positions) {
			if (
				(positions[0] == true) &
				(positions[1] == true) &
				(positions[2] == true)
			) {
				console.log("cazzooooooooooooo");
			}
			if (
				(positions[3] == true) &
				(positions[4] == true) &
				(positions[5] == true)
			) {
				console.log("cazzooooooooooooo");
			}
			if (
				(positions[6] == true) &
				(positions[7] == true) &
				(positions[8] == true)
			) {
				console.log("cazzooooooooooooo");
			}
			if (
				(positions[0] == true) &
				(positions[3] == true) &
				(positions[6] == true)
			) {
				console.log("cazzooooooooooooo");
			}
			if (
				(positions[1] == true) &
				(positions[4] == true) &
				(positions[7] == true)
			) {
				console.log("cazzooooooooooooo");
			}
			if (
				(positions[2] == true) &
				(positions[5] == true) &
				(positions[8] == true)
			) {
				console.log("cazzooooooooooooo");
			}
			if (
				(positions[0] == true) &
				(positions[4] == true) &
				(positions[8] == true)
			) {
				console.log("cazzooooooooooooo");
			}
			if (
				(positions[2] == true) &
				(positions[4] == true) &
				(positions[6] == true)
			) {
				console.log("cazzooooooooooooo");
			}
		}
	}, [value]);

	// useEffect(() => {
	// 	for (let i in positions) {
	// 		if (
	// 			(positions[0] == false) &
	// 			(positions[1] == false) &
	// 			(positions[2] == false)
	// 		) {
	// 			console.log(positions);
	// 		}
	// 		if (
	// 			(positions[3] == false) &
	// 			(positions[4] == false) &
	// 			(positions[5] == false)
	// 		) {
	// 			console.log(positions);
	// 		}
	// 		if (
	// 			(positions[6] == false) &
	// 			(positions[7] == false) &
	// 			(positions[8] == false)
	// 		) {
	// 			console.log(positions);
	// 		}
	// 		if (
	// 			(positions[0] == false) &
	// 			(positions[3] == false) &
	// 			(positions[6] == false)
	// 		) {
	// 			console.log(positions);
	// 		}
	// 		if (
	// 			(positions[1] == false) &
	// 			(positions[4] == false) &
	// 			(positions[7] == false)
	// 		) {
	// 			console.log(positions);
	// 		}
	// 		if (
	// 			(positions[2] == false) &
	// 			(positions[5] == false) &
	// 			(positions[8] == false)
	// 		) {
	// 			console.log(positions);
	// 		}
	// 		if (
	// 			(positions[0] == false) &
	// 			(positions[4] == false) &
	// 			(positions[8] == false)
	// 		) {
	// 			console.log(positions);
	// 		}
	// 		if (
	// 			(positions[2] == false) &
	// 			(positions[4] == false) &
	// 			(positions[6] == false)
	// 		) {
	// 			console.log(positions);
	// 		}
	// 	}
	// }, [positions]);

	return (
		<div className="container">
			<h1 className={value ? "fas fa-sun" : "fas fa-moon"}>
				<h1>{value ? "es el turno de sol" : "es el turno de luna"}</h1>
			</h1>
			<div className="row">
				<div
					className="col-4 square"
					onClick={() => {
						if (value1 == false) {
							setValue(!value);
							setValue1(true);
							positions.splice(0, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value2 == false) {
							setValue(!value);
							setValue2(true);
							positions.splice(1, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value3 == false) {
							setValue(!value);
							setValue3(true);
							positions.splice(2, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
			</div>
			<div className="row">
				<div
					className="col-4 square"
					onClick={() => {
						if (value4 == false) {
							setValue(!value);
							setValue4(true);
							positions.splice(3, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value5 == false) {
							setValue(!value);
							setValue5(true);
							positions.splice(4, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value6 == false) {
							setValue(!value);
							setValue6(true);
							positions.splice(5, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
			</div>
			<div className="row">
				<div
					className="col-4 square"
					onClick={() => {
						if (value7 == false) {
							setValue(!value);
							setValue7(true);
							positions.splice(6, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value8 == false) {
							setValue(!value);
							setValue8(true);
							positions.splice(7, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value9 == false) {
							setValue(!value);
							setValue9(true);
							positions.splice(8, 1, value);
						}
					}}>
					<PrintValue value={value} />
				</div>
			</div>
		</div>
	);
};

export default Board;
