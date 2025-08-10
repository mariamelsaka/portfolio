import { useEffect, useRef, useState } from "react";
import "./index.css";
import Button from "../../ui/Button";
import DarkMode from "../../ui/DarkMode";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const navBackGround = useRef<HTMLDivElement>(null);
  // this function for back ground of nav bar after scroll-------------------
  const backScroll = () => {
    if (window.scrollY > 50) {
      // console.log("scorlled");
      //here to remove the original backgrouound and add blur
      navBackGround.current?.classList.remove("bg-white");
      //navBack.current?.classList.add("bg-white/30 backdrop-blur-sm"); if u do this will make space error   
      //you can do this but too much of code ----------------
      // navBack.current?.classList.add("bg-white/30");
      // navBack.current?.classList.add("backdrop-blur-sm");
      //so make this to add multiple classes -------THIS IS SIMPLER 
      navBackGround.current?.classList.add("bg-white/30", "backdrop-blur-sm");
    }
  };
  // this function for back ground of nav bar after scroll , explained in notion
  useEffect(() => {//used use effect so each time re render will apply this function
    setTimeout(() => {
      if (navBackGround.current) {
        backScroll();
      }//delays the check just enough for React to mount the element and set the ref.
    }, 0)//we add set time out so if current is null it's wait until it's not null

    window.addEventListener("scroll", backScroll);
    return () => window.removeEventListener("scroll", backScroll);
  }, []);
  // const ActiveClass= useRef<HTMLUListElement>(null);;
  // const addActiveonClick =()=>{
  //   ActiveClass.current?.classList.add("active")
  // }
  const [activeLink, setActiveLink] = useState(location.pathname);
  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };
  // for small navbar ----------------------------------------------------
  const { pathname } = useLocation();//this hook used to have acess to the path
  const [isCollapsed, setIsCollapsed] = useState(true);
  useEffect(() => {
    setIsCollapsed(prev => {
      if (!prev) return true;
      return prev;
    });//for prevent re render same page each time
  }, [pathname]);

  return (
    <>
      <div
        id="navbarBack"
        ref={navBackGround}
        className="w-full  border-[var(--border_color)] border-b pt-6 pb-3 px-4 md:px-16 fixed  bg-[var(--body_background)] z-50"
      >
        <div className="flex items-center justify-between w-full text-[var(--body_color)]">
          <div className="font-bold text-2xl whitespace-nowrap">mariam elsaka</div>
          {/* this shown only in small screen */}

          <button
            type="button"
            className="block lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-[#20B486]"
            aria-label="Toggle navigation"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
          {/* Center: Nav Links */}
          <ul className={`${isCollapsed ? 'hidden' : 'block'} md:flex gap-6 items-center text-[var(--body_color)]`}>

            <li className={activeLink === "/" ? "active" : ""}>
              <a href="/" onClick={() => handleLinkClick("/")}>home</a>
            </li>
            <li className={activeLink === "/projects" ? "active" : ""}>
              <a href="/#Projects" onClick={() => handleLinkClick("/projects")}>projects</a>
            </li>
            <li className={activeLink === "/about" ? "active" : ""}>
              <a href="/#About" onClick={() => handleLinkClick("/about")}>about</a>
            </li>
            <li className={activeLink === "/contact" ? "active" : ""}>
              <a href="/#Contact" onClick={() => handleLinkClick("/contact")}>contact</a>
            </li>
            <li>

              {/* Right: Dark mode + Button */}
              <div className="flex items-center gap-4 ml-auto md:ml-4">
               <DarkMode />
                <a href="/#Contact" >
                  <Button
                    className="hidden lg:block"
                    type="button"
                    title="btn-light-dark"
                  >
                    let's talk
                  </Button>
                </a>

              </div>
            </li>
          </ul>

        </div>
      </div>


    </>
  );
};
export default NavBar;
