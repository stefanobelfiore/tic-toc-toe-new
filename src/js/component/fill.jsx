import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


const Fill = props => {
    const [value, setValue] = useState("polla");
    let arrayD = new Array(9);
    arrayD.fill(null);

    function llenar(arrayD) {
        for (let index in arrayD) {
            //for (let index = 0; index < arrayD.lenght; index++) {
            if (arrayD[index] == null) {
                arrayD.splice(arrayD[index], 0, PrintValue);
            } else {
                //que no deje pintarlo
            }
            return arrayD;
        }
    }

    export default Fill;

    PrintValue.propTypes = {
        fill: PropTypes.fill

    };
