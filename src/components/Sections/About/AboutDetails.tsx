import type { IconType } from "react-icons";

interface IProps {
icon: IconType;
label?:string;
value?:string;
className?:string;
isBold?: boolean;

}

const AboutDetails = ({ icon:Icon,label,value,isBold=true,className}:IProps) => {
  return (
          <div className="flex flex-row">
            <div className={`rounded-full bg-[var(--text-light-color)]   text-[var(--text-dark-color)]  p-2.5 h-fit md:mr-4 mr-2 ${className ?? ''}`}>
              {/* {children} */}
              <Icon />
            </div>
            <div className="flex flex-col">
                <p className="text-[var(--text-gray)]">{label}</p>
              <p className={`${isBold ? 'font-semibold' : 'font-normal'} ${className ?? ''}`}>{value}</p>
            </div>
          </div>
  )
}

export default AboutDetails