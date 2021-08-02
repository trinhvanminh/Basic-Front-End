import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	//state
	const [theme, setTheme] = useState({
		isLightTheme: true,
		light: {
			backgroundColor: "rgb(240, 240, 240)",
			color: "black",
		},
		dark: {
			backgroundColor: "rgb(40, 40, 40)",
			color: "white",
		},
	});
	//data
	const themeContextData = {
		theme,
		setTheme,
	};
	//return provider
	return (
		<ThemeContext.Provider value={themeContextData}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
