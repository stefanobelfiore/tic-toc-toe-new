import React, { useState } from "react";
import PropTypes from "prop-types";
import PrintValue from "./printvalue.js";

const Board = () => {
	const [value, setValue] = useState(true);
	const changeValue = () => {
		if (value == true) {
			setValue(false);
		}
		if (value == false) {
			setValue(true);
		}
		return 0;
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
			</div>
			<div className="row">
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
			</div>
			<div className="row">
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
				<div className="col-4 square" onClick={changeValue}>
					<PrintValue value={value} />
				</div>
			</div>
		</div>
	);
};

export default Board;
