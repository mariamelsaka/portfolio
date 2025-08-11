import Paragraph from "../../ui/Paragraph"
import AboutDetails from "../About/AboutDetails"
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Label from "../../ui/Label";
const Contact = () => {
  return (
    <div id="Contact" className="h-full  md:p-[5em] pt-[3em] pb-[5em]  bg-[var(--section-color-about)] w-full">
      <Paragraph className="!text-3xl text-center">Get in touch</Paragraph>
      <p className="text-center mt-4">Have a project in mind or want to work together? Feel free to reach out.</p>
      
      <div className="grid grid-cols-12 md:gap-[3em] gap-[2em] mt-[2em] md:p-3 pl-[2em]">
        
        <div className="col-span-12 md:col-span-4  p-[2em] w-fit md:w-full h-full bg-[var(--card-contact-color)] rounded-lg shadow-lg">
          <Paragraph className="mb-[1em]">Contact information</Paragraph>
          <AboutDetails isBold={false}  label="email" value="mariamalaaelsaka@icloud.com" icon={AiOutlineMail} />
          <AboutDetails isBold={false}  label="phone" value="+20 01015564573" icon={FaPhoneAlt} />
          <AboutDetails isBold={false}  label="location" value="Egypt, giza " icon={FaLocationDot} />
          <Paragraph className="mt-[2em] mb-[1em] !text-[1em]">follow me</Paragraph>
          <div className="flex gap-2">
            <a title="linkedIn" href="https://www.linkedin.com/in/mariam-elsaka-7a0138218/">
              <AboutDetails icon={FaLinkedin} />
            </a>
            <a title="github" href="https://github.com/mariamelsaka">
              <AboutDetails   icon={FaGithub} />
            </a>
          </div>

        </div>
        <div className="col-span-12 md:col-span-8 w-[91%] md:w-full h-full p-[2em] bg-[var(--card-contact-color)] rounded-lg shadow-lg">
          <Paragraph>send me a message</Paragraph>
          <Form >
            <div className="md:flex gap-2">
              <div className="flex flex-col w-full">
                <Label htmlFor="name">name</Label>
                <Input
                type="text" name="from_name" placeholder="Your Name" required
                />
              </div>

              <div className="flex flex-col w-full">
                <Label htmlFor="email-login">Email</Label>
                <Input
                 type="email" name="from_email" placeholder="Your Email" required
                />
              </div>
            </div>
            <Label htmlFor="subject">subject</Label>
            <Input
              type="text" name="subject" placeholder="Subject" required
            />

            <Label htmlFor="message">message</Label>
            <Textarea name="message" placeholder="Your Message" required
              rows={3}
              ></Textarea>
           
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact