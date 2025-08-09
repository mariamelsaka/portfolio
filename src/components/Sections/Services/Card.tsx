import type { ReactNode } from 'react';
;

interface IProps {
  className?: string;
  children?: ReactNode
}

const Card = ({  className, children }: IProps) => {
  return (
    <div>
      {/* <div className={`bg-[var(--card-color)] shadow-lg rounded-lg h-[20em] w-[22em] border border-transparent hover:border-[var(--btn_color)] hover:shadow-md hover:translate-y-[-4px] transition-all ${className || ''}`}> */}
      <div   className={`bg-[var(--card-color)] shadow-lg rounded-lg 
  h-[20em] w-[22em] border border-transparent 
  hover:border-[var(--btn_color)] hover:shadow-md hover:translate-y-[-4px] 
  active:border-[var(--btn_color)] active:shadow-md active:translate-y-[-4px]
  transition-all ${className || ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Card