/* eslint-disable react/prop-types */
// ThemeProvider.js
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const themes = {
    light: "light",
    dark: "dark",
    custom: "custom",
  };

  const [currentTheme, setCurrentTheme] = useState("custom");

  return (
    <ThemeContext.Provider
      value={{ theme: themes[currentTheme], setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}


