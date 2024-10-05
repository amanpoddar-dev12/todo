import { createContext, useContext } from "react";

// Create the context directly, without wrapping it inside a function.
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// The ThemeProvider component
const ThemeProvider = ({ value, children }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider };
