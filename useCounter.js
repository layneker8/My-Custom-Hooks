import { useState } from "react";
import PropTypes from "prop-types";

export const useCounter = (initial) => {
	const [counter, setCounter] = useState(initial);

	const increment = () => {
		setCounter(counter + 1);
	};
	const decrement = () => {
		setCounter(counter - 1);
	};
	const reset = () => {
        setCounter(initial);
    };
	return {
		counter,
		increment,
		decrement,
        reset
	};
};
useCounter.propTypes = {
	initial: PropTypes.number.isRequired,
};
