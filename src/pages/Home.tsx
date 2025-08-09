import Header from "../components/Sections/Header"
import Projects from "../components/Sections/Projects"
import Contact from "../components/Sections/Contact"
import About from "../components/Sections/About"
import Services from "../components/Sections/Services"


const Home = () => {
  return (
    <> 
      <main className="pt-[4.7em]">   
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      </main>
    </>
  )
}

export default Home