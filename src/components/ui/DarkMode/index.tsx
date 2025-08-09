import { FaRegMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import Input from '../Input';
import Label from '../Label';
import "./index.css"
interface Iprop{
    className?:string
}
const DarkMode = ({className}:Iprop) => {
    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme","dark")
    }
    const setLightMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme","light")
    }
    const selectedTheme=localStorage.getItem("selectedTheme");
    if(selectedTheme=="dark"){
        setDarkMode();
    }

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }
    return (
        <>
        <div className={`dark_mode ${className ?? ''}`} >
            <Input type="checkbox"  id='darkmode-toggle'  
            className='dark_mode_input' 
            onChange={toggleTheme}
            defaultChecked={selectedTheme=="dark"}
             />
            <Label className='dark_mode_label' htmlFor="darkmode-toggle">
                <FaRegMoon className='moon svg' />
                <BsFillSunFill className='sun svg' />
            </Label>
        </div>

        </>
    )
}

export default DarkMode