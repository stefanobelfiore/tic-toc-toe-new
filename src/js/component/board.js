import React, { useState } from "react";
import PropTypes from "prop-types";

const Board = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-4 square"></div>
				<div className="col-4 square"></div>
				<div className="col-4 square"></div>
			</div>
			<div className="row">
				<div className="col-4 square"></div>
				<div className="col-4 square"></div>
				<div className="col-4 square"></div>
			</div>
			<div className="row">
				<div className="col-4 square"></div>
				<div className="col-4 square"></div>
				<div className="col-4 square"></div>
			</div>
		</div>
	);
};

export default Board;
