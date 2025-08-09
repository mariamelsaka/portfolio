import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import AllProjectsPage from "./pages";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer/Footer";
import Project from "./pages/Project";

function App() {
  return (
    <Router>   
        <Routes>
          <Route path="/" element={
            <>
            <NavBar />
            <Home />
            <Footer />
            </>
          } />
          <Route path="/projects" element={<Project />} />
        </Routes>    
    </Router>
  );
}

export default App;
