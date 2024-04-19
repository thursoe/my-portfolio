import { getDictionary } from "./dictionaries";
import MainNavbar from "./components/MainNavbar";
import { Button, Divider } from "@nextui-org/react";
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
              <h2 className="text-lg font-light">Hello! This is Thura.</h2>
              <h1 className="text-xl font-bold typing-animation after:content-['|'] after:animate-ping">A Passionate Software Engineer</h1>
              <div className="flex gap-2 mt-4">
                <Button color="secondary" className="animate-pulse">Download CV</Button>
                <Button>Contact Me</Button>
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
            <h2 className="text-lg font-light">A professional developer with a strong engineering background, currently situated in Yangon, Myanmar. Graduated from Technological University Mandalay, with a focus on enterprise software development.</h2>
          </div>
        </section>
        <section id="experience">
          <div className="container w-4/5 mx-auto p-10">
            <h1 className="text-3xl font-bold">Experience</h1>
            <div className="p-8 space-y-2">
              <h3 className="text-lg font-bold">Atlantbh</h3>
              <h1 className="text-xl font-bold">Junior Software Engineer</h1>
              <p className="text-sm italic">Jun 2022 - Jan 2024</p>
              <ul className="list-disc leading-7">
                <li>Developed a full-stack enterprise applications using React, PostgreSQL and Docker.</li>
                <li>Developed a full-stack enterprise applications using React, PostgreSQL and Docker.</li>
                <li>Provided mentorship to two IT college students, enhancing their practical software engineering skills.</li>
              </ul>
            </div>
            <div className="p-8 space-y-2">
              <h1 className="text-xl font-bold">Atlantbh</h1>
              <h1 className="text-xl font-bold">Junior Software Engineer</h1>
              <ul className="list-disc leading-7">
                <li>Developed a full-stack enterprise applications using React, PostgreSQL and Docker.</li>
                <li>Developed a full-stack enterprise applications using React, PostgreSQL and Docker.</li>
                <li>Provided mentorship to two IT college students, enhancing their practical software engineering skills.</li>
              </ul>
            </div>
            <div className="p-8 space-y-2">
              <h1 className="text-xl font-bold">Atlantbh</h1>
              <h1 className="text-xl font-bold">Junior Software Engineer</h1>
              <ul className="list-disc leading-7">
                <li>Developed a full-stack enterprise applications using React, PostgreSQL and Docker.</li>
                <li>Developed a full-stack enterprise applications using React, PostgreSQL and Docker.</li>
                <li>Provided mentorship to two IT college students, enhancing their practical software engineering skills.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="w-4/5 sm:h-screen mx-auto pb-14 grid place-content-center">
            <h1 className="text-center text-3xl font-bold mb-10">Expertise and skills</h1>
            <CardGrid />
          </div>
        </section>
        <section id="contact">
          <div className="w-4/5 sm:h-screen mx-auto flex items-center justify-center pb-14">
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
