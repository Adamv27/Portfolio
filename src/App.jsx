import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Home from './pages/Home'
import About from "./pages/About"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import './App.css'


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
