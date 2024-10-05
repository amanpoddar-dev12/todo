import "./App.css";
import "./index.css";
import Form from "./components/Form"; // Ensure Form is exported correctly
import { ThemeProvider } from "./context/theme"; // Ensure ThemeProvider is exported correctly
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("dark", "light");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Form />
    </ThemeProvider>
  );
}

export default App;
