import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeToggle, setThemeToggle] = useState(false);
  const handleThemeToggle = () => {
    setThemeToggle((prevState) => !prevState);
  };
  return (
    <ThemeContext.Provider value={{ themeToggle, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
