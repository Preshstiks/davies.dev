import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export const Footer = () => {
  const { themeToggle } = useContext(ThemeContext);
  return (
    <div className={`py-10 ${themeToggle ? "text-dark" : "text-lighttext"}`}>
      <div className="text-sm xs:text-base text-center font-light pb-4">
        &copy; Davies Precious 2024.
      </div>
    </div>
  );
};
