import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	//state
	const [theme, setTheme] = useState({
		isLightTheme: true,
		light: {
			backgroundColor: "white",
			color: "black",
		},
		dark: {
			backgroundColor: "black",
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
