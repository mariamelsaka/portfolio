import Animate from "../../Animate";
import Button from "../../ui/Button"
import "./index.css"
import { FaChevronRight } from 'react-icons/fa';
const Header = () => {
  return (
    <>
      <div id="HOME" className="grid grid-cols-12 w-full h-full  md:p-[3em] md:mt-0 md:mb-[3em] bg-[var(--header-bg)]">
        <div className="col-span-12   md:col-span-6  m-6 relative left-[1em] md:left-[3em]">
          <Button className="!bg-[var(--text-light-color)]  text-[12px] !text-[var(--text-dark-color)] !rounded-full mb-[1em] font-semibold">Frontend React Developer</Button>
          <h1 className="text-2xl md:text-5xl font-bold relative left-[0.5em] md:left-0">hello <br />I'm mariam elsaka</h1>
          <h1 className="text-2xl md:text-5xl font-bold text-[var(--text_color)] relative left-[0.5em] md:left-0">front end developer</h1>
          <p className="mt-4">I craft responsive, user-friendly web interfaces and work on 
            large-scale enterprise projects that enhance user experience. 
            Currently expanding my expertise through personal projects 
            and new technologies.</p>
          <div className="flex gap-5 md:ml-0 ml-[2.2em]">
            {/* <a href="https://6897d0c42932494d9e583ad1--peaceful-muffin-b394bb.netlify.app/mariam%20elsaka%20cv.pdf" download> */}
            {/* <a href="http://localhost:5173/mariam elsaka cv.pdf" download> */}
           <a href="/mariam-elsaka-cv.pdf" download>
              <Button className="mt-10 flex flex-row gap-3">hire me <FaChevronRight className="mt-1.5" /></Button>
            </a>
            <a href="/#About" >
              <Button className="mr-4 mt-10 !text-black !bg-[#E5E7EB]">learn more</Button>
            </a>

          </div>


        </div>
        <Animate>
          <div className="rounded-full shadow-2xl hidden md:block md:col-span-6" id="Image-back">
          </div>
        </Animate>

      </div>

    </>
  )
}

export default Header