import React, { useState } from "react";
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

	function changeValue(position) {
		setValue(!value);
	}

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
							changeValue(0);
							setValue1(true);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value2 == false) {
							changeValue(1);
							setValue2(true);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value3 == false) {
							changeValue(2);
							setValue3(true);
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
							changeValue(3);
							setValue4(true);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value5 == false) {
							changeValue(4);
							setValue5(true);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value6 == false) {
							changeValue(5);
							setValue6(true);
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
							changeValue(6);
							setValue7(true);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value8 == false) {
							changeValue(7);
							setValue8(true);
						}
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						if (value9 == false) {
							changeValue(8);
							setValue9(true);
						}
					}}>
					<PrintValue value={value} />
				</div>
			</div>
		</div>
	);
};

export default Board;
