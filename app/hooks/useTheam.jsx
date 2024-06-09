import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useTheme = () => {
  const [theme, setTheme] = useState(Cookies.get("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    Cookies.set("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return [theme, toggleTheme];
};
