import type { ReactNode } from "react";
import React, { useRef } from "react";
import Button from "./Button";
import { BsSend } from 'react-icons/bs';
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
const Form = ({ children, ...props }: IProps) => {
  const form = useRef<HTMLFormElement>(null);
  
  
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  // Step 1: Send notification email to you
  emailjs.sendForm(
    "service_3achdv6",
    "template_wun0dto",      // Your notification template ID
    form.current,
    "NSzOQac3fHHpJr7B3"
  ).then(() => {
    // Step 2: Extract user email and name from form data
    const formData = new FormData(form.current!);
    const from_name = formData.get("from_name") as string;
    const to_email = formData.get("from_email") as string;

    // Step 3: Send confirmation email to user
    return emailjs.send(
      "service_3achdv6",
      "template_qcwis5s", // Your confirmation template ID
      {
        from_name,
        from_email: to_email,
        // other variables your confirmation template needs
      },
      "NSzOQac3fHHpJr7B3"
    );
  }).then(() => {
    // alert("Message sent! Confirmation email sent to you.");
        toast.success("Message sent! Confirmation email sent to you.", {
      position: "bottom-center",
      duration: 1500,
      style: {
        backgroundColor: "var(--btn_color)",
        color: "white",
        width: "fit-content",
      },
    });
    form.current?.reset();
  }).catch((error) => {
    toast.error("Failed to send message or confirmation email, please try again.", {
    position: "bottom-center",
    duration: 3000,
         style: {
        backgroundColor: "var(--btn_color)",
        color: "white",
        width: "fit-content",
      },
  });
    // alert("Failed to send message or confirmation email, please try again.");
    console.error("EmailJS error:", error);
  });
};




//  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   if (!form.current) {
//     console.error("Form reference is missing");
//     return;
//   }

//   emailjs
//     .sendForm(
//       "service_3achdv6",      // your service ID
//       "template_wun0dto",     // your template ID
//       form.current,           // must be the actual <form> element
//       "NSzOQac3fHHpJr7B3"     // your public key
//     )
//     .then(
//       () => {
//         alert("Message sent!");
//         form.current?.reset();
//       },
//       (error) => {
//         alert("Failed to send message, please try again.");
//         console.error("EmailJS error:", error);
//       }
//     );
// };



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