import defaultTheme from "../themes/defaultTheme";
import darkTheme from "../themes/darkTheme";

const themes = {
    defaultTheme,
    darkTheme,
}

export default function getTheme(theme) {
    return themes[theme];
}