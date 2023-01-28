import '../src/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay/>}/>
        <Route path="/experience" element={<Experience  />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
   
  );
}

export default App;
