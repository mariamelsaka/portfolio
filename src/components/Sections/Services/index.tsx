import Button from "../../ui/Button";
import Paragraph from "../../ui/Paragraph"
import AboutDetails from "../About/AboutDetails";
import Card from "./Card"
import { CustomServices } from "../../../data/index";


const Services = () => {
  return (
    <div className="h-full md:p-[5em] p-[1.1em] pt-[4em] md:mt-0 mt-15  bg-[var(--section-color)] w-full">
      <Paragraph className="!text-3xl text-center">My Services</Paragraph>
      <p className="text-center  mt-4">From concept to execution, I offer services that bring your digital vision to life.</p>
      <div className="grid grid-cols-12 gap-5 items-center justify-center mt-[2em]">
        {
          CustomServices.map((item, idx) => {
            return <div className="md:col-span-4 col-span-12" key={idx}>
              <Card>
                <AboutDetails className="rounded-lg mt-8 ml-8 mb-2 p-[1em]" icon={item.icon} />
                <Paragraph className="p-3 relative left-[1em] whitespace-break-spaces">{item.title}</Paragraph>
                <p className="pl-3 pr-8 pb-8 text-[var(--text-gray)] relative left-[1em] whitespace-break-spaces">{item.description}</p>
              </Card>
            </div>
          })
        }


      </div>
      {/* <div className="w-[52em] p-[2em] h-[15em] ml-[8.5em] rounded-2xl bg-[var(--card-color)] shadow-lg mt-[6em] border border-transparent hover:border-[var(--btn_color)] hover:shadow-md hover:translate-y-[-4px] transition-all">
        <Paragraph className="!text-3xl  text-center">Looking for a custom solution?</Paragraph>
        <p className="mt-[1em]">i'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
        <a href="/#Contact" >
          <Button className="ml-[20em] mt-[3em]">Get in Touch</Button>
        </a>
      </div> */}
      <div className="w-full max-w-4xl p-8 md:p-[2em] 
            h-auto md:h-[15em] 
            mx-auto rounded-2xl 
            bg-[var(--card-color)] shadow-lg 
            mt-[3em] md:mt-[6em] 
            border border-transparent 
            hover:border-[var(--btn_color)] hover:shadow-md hover:translate-y-[-4px] 
            active:border-[var(--btn_color)] active:shadow-md active:translate-y-[-4px]
            transition-all">
        <Paragraph className="!text-3xl text-center">
          Looking for a custom solution?
        </Paragraph>
        <p className="mt-[1em] text-center md:text-left">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        {/* Contact */}
        <div className="flex justify-center md:justify-start mt-[2em]">
          <a href="/#Contact">
            <Button className="md:ml-[22em]">Get in Touch</Button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Services