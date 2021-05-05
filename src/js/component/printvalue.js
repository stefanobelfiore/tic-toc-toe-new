import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const PrintValue = props => {
	const [value, setValue] = useState("polla");
	let print = "";

	//let check = 0;
	if (props.value == true /*&& check == 0*/) {
		print = "X";
		console.log(print);
		//check = check + 1;
	}
	if (value == false /*&& check == 0*/) {
		print = "O";
		console.log(print);
		//check = check + 1;
	}
	return (
		<div className="value" onClick={props.onClick}>
			{print}
		</div>
	);
};
export default PrintValue;

PrintValue.propTypes = {
	value: PropTypes.bool,
	onClick: PropTypes.func
};
