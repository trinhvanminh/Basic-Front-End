import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

function PostFiltersForm(props) {
	const { onSubmit } = props;
	const [searchTerm, setSearchTerm] = useState("");
	const typingTimeOutRef = useRef(null); //save setTimeOut id

	//debounce
	const handleSearchTermChange = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);

		if (!onSubmit) return;

		if (typingTimeOutRef.current) clearTimeout(typingTimeOutRef.current);

		typingTimeOutRef.current = setTimeout(() => {
			const formValues = {
				searchTerm: e.target.value,
			};
			onSubmit(formValues);
		}, 300);
	};

	return (
		<form>
			<input
				type="text"
				value={searchTerm}
				onChange={handleSearchTermChange}
                placeholder='search here...'
			/>
		</form>
	);
}

PostFiltersForm.propTypes = {
	onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
	onSubmit: null,
};

export default PostFiltersForm;
