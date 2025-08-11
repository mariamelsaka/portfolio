import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import AllProjectsPage from "./pages";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer/Footer";
import Project from "./pages/Project";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Animate from "./components/Animate";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>   
      <Toaster />
        <Routes>
          <Route path="/" element={
            <>
            <NavBar />       
                <Home />
            <Footer />
            <ScrollToTopButton/>
            
            </>
          } />
          <Route path="/projects" element={
              <>
              <Animate>
                <Project />
            </Animate>  
            <ScrollToTopButton/>
              </>
            } />
        </Routes>    
    </Router>
    
    
  );
}

export default App;
