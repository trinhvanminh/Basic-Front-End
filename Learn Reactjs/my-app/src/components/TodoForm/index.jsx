import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
	const { onSubmit } = props;
	const [value, setValue] = useState("");
	const handleOnInputChange = (e) => {
		setValue(e.target.value);
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!onSubmit) return;

		const formValues = {
			title: value,
		};

		onSubmit(formValues);
		setValue("");
	};
	return (
		<form onSubmit={handleOnSubmit}>
			<input type="text" value={value} onChange={handleOnInputChange} />
		</form>
	);
}

TodoForm.propTypes = {
	onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
	onSubmit: null,
};

export default TodoForm;
