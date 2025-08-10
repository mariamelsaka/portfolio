import type { ReactNode } from "react";
import React, { useRef } from "react";
import Button from "./Button";
import { BsSend } from 'react-icons/bs';
import emailjs from "@emailjs/browser";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
const Form = ({ children, ...props }: IProps) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_USER_ID"
      )
      .then(
        () => {
          alert("Message sent!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return <form {...props} ref={form} onSubmit={sendEmail}>
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