import React from "react";
import styled from "styled-components"

function Todo({ todo }) {
	return <Li>{todo}</Li>;
}

const Li = styled.li`
    background-Color: red;
    list-style: none;
    width: 20vw;
`

export default Todo;
