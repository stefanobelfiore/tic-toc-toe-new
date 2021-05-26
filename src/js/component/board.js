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
	const [winner, setWinner] = useState(null);

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

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
							calculateWinner(positions);
							console.log(winner);
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
							calculateWinner(positions);
							console.log(winner);
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
							calculateWinner(positions);
							console.log(winner);
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
							calculateWinner(positions);
							console.log(winner);
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
							calculateWinner(positions);
							console.log(winner);
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
							calculateWinner(positions);
							console.log(winner);
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
							calculateWinner(positions);

							console.log(winner);
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
							calculateWinner(positions);

							console.log(winner);
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
							calculateWinner(positions);

							console.log(winner);
						}
					}}>
					<PrintValue value={value} />
				</div>
			</div>
		</div>
	);
};

export default Board;
