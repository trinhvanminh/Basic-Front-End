import React, { useEffect, useState } from "react";

const formatDate = (date) => {
	return date.toLocaleTimeString().slice(0, -2);
};

const useClock = () => {
	const [timeString, setTimeString] = useState("");

	useEffect(() => {
		const intervalID = setInterval(() => {
			const now = new Date();
			const timeString = formatDate(now);
			setTimeString(timeString);
		}, 1000);
		return () => {
			clearInterval(intervalID);
		};
	}, []);

	return { timeString };
};

export default useClock;
