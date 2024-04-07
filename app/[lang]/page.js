import LocaleSwitcher from "./components/locale-switcher";
import { getDictionary } from "./dictionaries";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{dict.about.welcome}</p>
      <ThemeSwitcher/>
      <LocaleSwitcher />
    </main>
  );
}
