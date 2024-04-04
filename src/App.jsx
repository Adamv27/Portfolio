import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from "./pages/About"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./hooks/useThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
