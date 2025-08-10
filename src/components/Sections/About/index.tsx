import { FaRegUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { FaLaptopCode } from 'react-icons/fa';
import "./index.css"
import AboutDetails from './AboutDetails';
import Button from '../../ui/Button';
import Experience from './Experience';
import Paragraph from '../../ui/Paragraph';
import Skills from './Skills';
const About = () => {
  return (
    <div id="About" className='bg-[var(--body_background)]'>
      <p className="text-3xl font-bold text-center">About Me</p>
      <p className="text-center">Get to know more about me, my experience, and what drives me as a front end developer.</p>
      <div className="grid grid-cols-12 md:gap-[7em] md:m-[2em]">
        {/* first col in grid */}
        <div className="col-span-12 md:col-span-3 bg-[var(--section-color-about)] rounded-lg w-fit h-fit p-6 md:m-0 m-6">
          {/* <AboutDetails label="full name" value="mariam elsaka"  children={<FaRegUser />}/> */}
          <AboutDetails label="full name" value="mariam elsaka" icon={FaRegUser} />
          <AboutDetails label="email" value="mariamalaaelsaka@icloud.com" icon={AiOutlineMail} />
          <AboutDetails label="phone" value="+20 01015564573" icon={FaPhoneAlt} />
          <AboutDetails label="location" value="Egypt, giza " icon={FaLocationDot} />
          <AboutDetails label="experience" value="2 years" icon={HiOutlineCalendarDateRange} />
          <AboutDetails label="specialization"  value="Front end develoment using react, liferay developer" icon={FaLaptopCode} />
          <a href="https://6897d0c42932494d9e583ad1--peaceful-muffin-b394bb.netlify.app/mariam%20elsaka%20cv.pdf" download>
          {/* <a href="http://localhost:5173/mariam elsaka cv.pdf" download> */}
          <Button className='!w-full !mt-[2em]'>download resume</Button>
          </a>
          
        </div>
        {/* secons col in grid */}
        <div className="col-span-12 md:col-span-9  flex flex-col gap-10 ml-3 pr-[2em]">
          {/* first two rows in secons col in grid */}
          <div className="md:w-fit w-full" >
            <Paragraph>summary</Paragraph>
            <p className='text-gray-600 p-4  space-y-4  leading-relaxed'>
              I am a Front-End Developer with over 2 years of experience specializing in HTML, CSS, JavaScript, and Bootstrap.
              In my current role as a Software Specialist-DXP at Giza Systems, I work on large-scale, enterprise-level projects
              using Kore.ai, Liferay, and jbpm, improving user engagement and system efficiency. Recently, I began working with
              React/Ts, building my first personal project to deepen my expertise in this framework. I have successfully delivered
              responsive and user-friendly interfaces that led to enhanced customer satisfaction and user retention.
            </p>
          </div>
          <div>
            <Paragraph className='mb-3'>Experience</Paragraph>
                <Experience position="Software Specialist - DXP" companyName="giza system 2024 - present">
                  <li>Developed and maintained enterprise-level portals using Liferay, ensuring seamless functionality for +1 tasks.</li>
                  <li>Streamlined business processes by automating workflows with jbpm, reducing manual effort by 50% and improving operational efficiency</li>
                  <li>Implemented and integrated AI-powered chatbots using Kore.ai, enhancing customer service response time by 50%.</li>
                </Experience>
                <Experience position="EBS Intern - DXP Team" companyName="giza system Aug 2023 - Feb 2024">
                  <li>Trained extensively on Liferay and Camunda workflow tools, contributing to successful implementation of +3 tasks.</li>
                  <li> Participated in RPA training, Completed RPA training and contributed to automating workflow processes,reducing manual tasks by 80%.</li>
                  <li> Attended more than +15 soft skills development sessions, enhancing team collaboration and communication across 5 cross-functional teams</li>
                </Experience>
                <Experience position="SDLC Intern" companyName="MISR University for Science and Technology Nov 2021 - Dec 2021">
                  <li>Assisted in system analysis for a Dental Clinics website, improving site usability by conducting over +15 user interviews to refine the user experience.</li>
                  <li> Gained exposure to the full software development life cycle (SDLC).</li>
                </Experience>     
          </div>
          {/* third two rows in secons col in grid */}
          <div >
            <Paragraph>My Skills</Paragraph>
            <div className='md:flex md:flex-row md:gap-4 '>
              <div>
                <p className='font-semibold md:m-0 mb-5 mt-5'>Frontend Development</p>
                <Skills rowGap='gap-[18em]' name="React" widthPirpleDiv="w-[20em]" skillPerformance="95 %"  /> 
                <Skills rowGap='gap-[15em]' name="HTML & CSS" widthPirpleDiv="w-[21.5em]" skillPerformance="99 %"  />
                <Skills name="JavaScript" widthPirpleDiv="w-[20em]" skillPerformance="95 %"  />
                <Skills name="TypeScript" widthPirpleDiv="w-[19em]" skillPerformance="90 %"  />
                <Skills name="Bootstrap" widthPirpleDiv="w-[21em]" skillPerformance="99 %"  />
                <Skills rowGap='gap-[17em]'name="Tailwind" widthPirpleDiv="w-[19em]" skillPerformance="90 %"  />
                <Skills rowGap='gap-[15em]'name="Axios, Fetch" widthPirpleDiv="w-[17em]" skillPerformance="80 %"  />
              </div>
              <div>
                <p className='font-semibold  md:m-0 mb-5 mt-5'>Tools & Technologies</p>
                <Skills rowGap='gap-[18em]'  name="Kore ai"  widthPirpleDiv="w-[20em]" skillPerformance="95 %"  />
                <Skills rowGap='gap-[18em]'  name="Liferay"  widthPirpleDiv="w-[17em]" skillPerformance="80 %"  />
                <Skills  rowGap='gap-[19.5em]' name="Jira"  widthPirpleDiv="w-[17em]" skillPerformance="80 %"  />
                <Skills rowGap='gap-[18.5em]'  name="JBPM"  widthPirpleDiv="w-[16em]" skillPerformance="75 %"  />
                <div>
                      <p className='font-semibold md:m-0 mb-5 mt-5'>Soft skills</p>
                      <Skills rowGap='gap-[8em]' name="Communication & Teamwork" widthPirpleDiv="w-[21.5em]" skillPerformance="99 %"  />
                      <Skills rowGap='gap-[8.5em]' name="Leadership     ,Self-motivation" widthPirpleDiv="w-[21em]" skillPerformance="97 %"  />
                      <Skills rowGap='gap-[11.5em]' name="Calm Under Pressure" widthPirpleDiv="w-[20em]" skillPerformance="95 %"  />
                      <Skills rowGap='gap-[13.5em]' name="Problem solving" widthPirpleDiv="w-[18.5em]" skillPerformance="85 %"  />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default About