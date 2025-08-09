import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import "./index.css";
import Paragraph from '../../ui/Paragraph';

const Footer = () => {
  return (
    <div className="w-full border-t-2 grid md:grid-cols-12 grid-rows-12 md:p-[5em] border-[#F0F0F0] pt-6 pb-3 ">
     <div className='md:col-span-6 row-span-12'>
       <Paragraph className='text-center md:text-left'>mariam elsaka .</Paragraph>
      <p className='text-[#4B5563] text-center md:text-left '>Focusing on pixel-perfect design and intuitive interactions to deliver exceptional web experiences.</p>
     </div>
     <div className='md:col-span-6 row-span-12'>
       <div className='flex md:flex-row-reverse flex-row ml-[9.5em] gap-3 mb-4 mt-2'>
        <a title="linkedIn" href="https://www.linkedin.com/in/mariam-elsaka-7a0138218/">
        <FaLinkedin className='text-2xl'/>
        </a>
        <a title="github" href="https://github.com/mariamelsaka">
         <FaGithub className='text-2xl'/>
        </a>    
       </div>
      <p className="text-gray-400 md:text-sm md:text-right text-center text-nowrap ">
        © 2025 MariamElsaka. All rights reserved.
      </p>
     </div>
    </div>
  );
};

export default Footer;
