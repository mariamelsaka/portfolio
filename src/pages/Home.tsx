import Header from "../components/Sections/Header"
import Projects from "../components/Sections/Projects"
import Contact from "../components/Sections/Contact"
import About from "../components/Sections/About"
import Services from "../components/Sections/Services"
import Animate from "../components/Animate"


const Home = () => {
  return (
    <> 
      <main className="pt-[4.7em]">   
      <Animate>
        <Header/>
      </Animate>
      
      <Animate>
        <About/>
      </Animate>
      
      <Animate>
        <Services/>
      </Animate>
      
      <Animate>
        <Projects/>
      </Animate>
           
       <Animate>
        <Contact/>
      </Animate>
      
      </main>
    </>
  )
}

export default Home