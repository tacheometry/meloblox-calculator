import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import getTheme from "./ThemeSwitcher";

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext({
	currentTheme: "defaultTheme",
	setTheme: null,
});

const CustomThemeProvider = ({ children }) => {
	// Read current theme from localStorage or maybe from an api
	const currentTheme = localStorage.getItem("appTheme") || "defaultTheme";

	// State to hold the selected theme name
	const [themeName, _setThemeName] = React.useState(currentTheme);

	// Retrieve the theme object by theme name
	const theme = getTheme(themeName);

	// Wrap _setThemeName to store new theme names in localStorage
	const setThemeName = (name) => {
		localStorage.setItem("appTheme", name);
		_setThemeName(name);
	};

	const contextValue = {
		currentTheme: themeName,
		setTheme: setThemeName,
	};

	return (
		<CustomThemeContext.Provider value={contextValue}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</CustomThemeContext.Provider>
	);
};

export default CustomThemeProvider;
