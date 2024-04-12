import { getDictionary } from "./dictionaries";
import MainNavbar from "./components/MainNavbar";
import { Button } from "@nextui-org/react";
import Image from 'next/image'
import profile from "../../public/IMG_00136.png"

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <MainNavbar />
      <main>
        <section id="hero">
          <div className="grid sm:grid-cols-2 w-4/5 h-[calc(100vh-64px)] mx-auto">
            <div className="grid content-center gap-2">
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
      </main>
    </>
  );
}
