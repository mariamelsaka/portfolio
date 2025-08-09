import type { ReactNode } from "react";
import React from "react";
import Button from "./Button";
import { BsSend } from 'react-icons/bs';


interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
const Form = ({ children, ...props }: IProps) => {
  return <form {...props}>
    {React.Children.map(children, (child) => {
      return <div className="mt-2">
        {child}
      </div>
    })}
    <Button type="submit" className="btn-lg  font-bold flex justify-center items-center btn-contact-us w-fit mt-4"> 
      Send message
      <BsSend className="ml-2"/>
    </Button>
  </form>
}

export default Form