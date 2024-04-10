import LocaleSwitcher from "./components/locale-switcher";
import { getDictionary } from "./dictionaries";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import MainNavbar from "./components/MainNavbar";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return (
    <>
      <MainNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>{dict.about.welcome}</p>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </main>
    </>
  );
}
