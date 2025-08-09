import type { ReactNode } from "react";

interface IProps {
    position: string;
    companyName: string;
    children: ReactNode;
}

const Experience = ({ position, companyName, children }: IProps) => {
    return (
            <div className='flex gap-5'>
                <div className=''>
                    <div className='rounded-full relative bottom-1 top-3  left-4 z-33 w-[1.2em] h-[1.2em] bg-[var(--btn_color)]'></div>
                    <div className=' w-0.5  h-[12em] relative  left-6 z-1 bg-[#E5E7EB]'></div>
                </div>
                <div>
                    <p className="mt-[2em]  font-bold">{position}</p>
                    <p className="text-[var(--text_color)]">{companyName}</p>
                    <ul className="list-disc pl-5 text-[#4B5563] mt-[1em]">
                        {children}
                    </ul>
                </div>
            </div>
    );
};

export default Experience;
