import { useContext, createContext } from "react"
import usePersistedState from "./usePersistedState";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = usePersistedState("darkmode", false);

  return(
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

