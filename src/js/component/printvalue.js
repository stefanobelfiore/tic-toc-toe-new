import React, { useState } from "react";
import PropTypes from "prop-types";
const PrintValue = props => {
	const [value, setValue] = useState("polla");
	let print = "";
	if (value == true) {
		print = "X";
	}
	if (value == false) {
		print = "O";
	}
	return (
		<div className="value" onClick={() => setValue(props.value)}>
			{print}
		</div>
	);
};
export default PrintValue;

PrintValue.propTypes = {
	value: PropTypes.bool
};
