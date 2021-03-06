import React, { useState } from "react";
import PropTypes from "prop-types";
const PrintValue = props => {
	const [value, setValue] = useState(null);
	let print = "";
	if (value == true) {
		print = "fas fa-sun";
	} else if (value == false) {
		print = "fas fa-moon";
	}
	return (
		<div
			className="value"
			onClick={() => {
				if (print == "") {
					setValue(props.value);
				}
			}}>
			<i className={print}></i>
		</div>
	);
};
export default PrintValue;

PrintValue.propTypes = {
	value: PropTypes.bool
};
