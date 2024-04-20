import { getDictionary } from "./dictionaries";
import MainNavbar from "./components/MainNavbar";
import { Button, Divider, Link } from "@nextui-org/react";
import Image from 'next/image'
import profile from "../../public/IMG_00136.png"
import CircleBackground from "./components/CircleBackground";
import CardGrid from "./components/CardGrid";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <MainNavbar />
      <main>
        <section id="hero">
          <div className="grid sm:grid-cols-2 container w-4/5 h-[calc(100vh-64px)] mx-auto">
            <div className="grid place-content-center gap-2">
              <h2 className="text-lg font-light">{dict.home.welcome}</h2>
              <h1 className="text-lg sm:text-xl font-bold typing-animation after:content-['|'] after:animate-ping">{dict.home.description}</h1>
              <div className="flex gap-2 mt-4">
                <Button color="secondary" className="animate-pulse">{dict.home.download}</Button>
                <Button as={Link} href="#contact">{dict.home.contact}</Button>
              </div>
            </div>
            <div className="grid justify-center items-center gap-2">
              <Image
                width={300}
                alt="NextUI hero Image"
                src={profile}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        <section id="about" className="relative overflow-hidden">
          <CircleBackground />
          <div className="grid place-content-center w-4/5 h-screen mx-auto text-center space-y-5 pb-14">
            <h2 className="text-5xl font-bold">Hello! This is <span className="text-purple-600">Thura</span>.</h2>
            <h2 className="text-lg font-light">{dict.about.description}</h2>
          </div>
        </section>
        <section id="experience">
          <div className="container w-4/5 mx-auto py-5 sm:p-10">
            <h1 className="text-3xl font-bold">Experience</h1>
            <div className="p-3 sm:p-8 space-y-2">
              <h3 className="text-lg font-semibold">AmbitBound Technology Co. Ltd</h3>
              <h1 className="text-xl font-bold">Full-stack Developer</h1>
              <p className="text-sm italic">July 2023 - Present</p>
              <ul className="list-disc leading-7 text-justify">
                <li>Lead a team of developers in the design, development, testing, and
                  deployment of software solutions.</li>
                <li>Reviewed code, architecture, and design decisions to ensure adherence
                  to best practices and coding standards.</li>
                <li>Developed responsive and user-friendly web applications using React.js
                  for the front end and Node.js for the back end.</li>
                <li>Implemented features and functionality according to technical specifications
                  and project requirements.</li>
                <li>Optimized web applications for maximum performance and scalability.</li>
              </ul>
            </div>
            <div className="p-3 sm:p-8 space-y-2">
              <h3 className="text-lg font-semibold">7th Computing Co. Ltd</h3>
              <h1 className="text-xl font-bold">Developer</h1>
              <p className="text-sm italic">Jan 2023 - July 2023</p>
              <ul className="list-disc leading-7 text-justify">
                <li>Analyzed client requirements and translate them into technical specifications
                  for Odoo module development</li>
                <li>Customized and extend existing Odoo modules to meet the unique needs
                  of individual clients.</li>
                <li>Developed new Odoo modules from scratch, adhering to best practices and
                  coding standards.</li>
                <li>Integrated Odoo with third-party systems and applications.</li>
                <li>Perform unit testing and debugging to ensure the quality and
                  stability of Odoo implementations.</li>
                <li>Developed comprehensive enterprise reports utilizing intricate SQL queries
                  within the Odoo framework.</li>
              </ul>
            </div>
            <div className="p-3 sm:p-8 space-y-2">
              <h3 className="text-lg font-semibold">Frontiir Co. Ltd</h3>
              <h1 className="text-xl font-bold">Network Engineer</h1>
              <p className="text-sm italic">Apr 2022 - Oct 2022</p>
              <ul className="list-disc leading-7 text-justify">
                <li>Assist in the deployment and configuration of network equipment,
                  including routers, switches, firewalls, and access points.</li>
                <li>Conduct routine monitoring and maintenance of network systems to
                  identify and resolve performance issues or security vulnerabilities.</li>
                <li>Assist in the planning and execution of network expansion projects,
                  including site surveys, capacity planning, and network optimization.</li>
                <li>Provided technical support and assistance to internal teams and
                  external customers.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="w-4/5 sm:h-screen mx-auto pb-14 pt-5 grid place-content-center">
            <h1 className="text-center text-3xl font-bold mb-10">Expertise and skills</h1>
            <CardGrid />
          </div>
        </section>
        <section id="contact">
          <div className="w-4/5 sm:h-screen mx-auto flex items-center justify-center pb-14 pt-5">
            <ContactSection />
          </div>
        </section>
        <Divider className="opacity-40 mt-5" />
        <Footer />
      </main >
      <ScrollTopButton />
    </>
  );
}
