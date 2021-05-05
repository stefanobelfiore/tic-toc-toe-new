import React, { useState } from "react";
import PropTypes, { func } from "prop-types";
import PrintValue from "./printvalue.js";

const Board = () => {
	const [value, setValue] = useState(true);
	const [allValues, setAllValues] = useState();
	let arrayD = new Array(9);
	arrayD.fill(null);

	function fill(arrayD) {
		for (let index in arrayD) {
			//for (let index = 0; index < arrayD.lenght; index++) {
			if (arrayD[index] == null) {
				arrayD.splice(arrayD[index], 0, PrintValue);
				console.log(arrayD);
			} else {
				//que no deje pintarlo
			}
			return arrayD;
		}
	}
	function changeValue(position) {
		/*if (value == true) {setValue(false);}
		if (value == false) {setValue(true);}*/
		setValue(!value);
		//allValues[position] = value;
		//setAllValues((allValues[position] = "olla"));
		console.log(value);
	}
	return (
		<div className="container">
			<div className="row">
				<div
					className="col-4 square"
					/*onClick={() => {
                    //changeValue(0);
                }}/*/
				>
					<PrintValue
						value={value}
						//arrayD={arrayD}
						onClick={() => {
							changeValue(0);
							llenar(arrayD);
						}}
					/>
				</div>
				<div className="col-4 square">
					<PrintValue
						value={value}
						onClick={() => {
							changeValue(1);
							llenar(arrayD);
						}}
					/>
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(2);
						llenar(arrayD);
					}}>
					<PrintValue value={value} />
				</div>
			</div>
			<div className="row">
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(3);
						llenar(arrayD);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(4);
						llenar(arrayD);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(5);
						llenar(arrayD);
					}}>
					<PrintValue value={value} />
				</div>
			</div>
			<div className="row">
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(6);
						llenar(arrayD);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(7);
						llenar(arrayD);
					}}>
					<PrintValue value={value} />
				</div>
				<div
					className="col-4 square"
					onClick={() => {
						changeValue(8);
						llenar(arrayD);
					}}>
					<PrintValue value={value} />
				</div>
			</div>
		</div>
	);
};

export default Board;
