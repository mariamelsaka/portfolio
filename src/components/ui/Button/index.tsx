import type { ReactNode ,ButtonHTMLAttributes} from "react";
import "./index.css";


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?:string;
}

const Button = ({ children ,className,...props}: IProps) => {
  return <button className={`${className|| ""} bg-[var(--btn_color)] cursor-grab text-[var(--text-white)] rounded-md px-4 py-2`} {...props}>{children}</button>;
};

export default Button;
