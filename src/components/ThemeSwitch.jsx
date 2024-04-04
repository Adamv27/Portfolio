import { useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import Form from 'react-bootstrap/Form';

export default function ThemeSwitch(){
  const { darkMode, setDarkMode } = useThemeContext();

  const switchTheme = () => setDarkMode((prev) => !prev);
  
  useEffect(() => {
    darkMode  
      ? document.documentElement.removeAttribute("darkMode", "")
      : document.documentElement.setAttribute("darkMode", "")
  }, [darkMode]);


  return(
    <Form.Switch 
      checked={darkMode}
      onChange={switchTheme}
    />
  )
}

