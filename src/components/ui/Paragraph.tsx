import type { ReactNode } from "react"

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
children:ReactNode;
className?:string;
}

const Paragraph = ({children,className,...props}:IProps) => {
  return (
    <p className={`${className || ""} font-bold text-lg` } {...props}>{children}</p>
  )
}

export default Paragraph