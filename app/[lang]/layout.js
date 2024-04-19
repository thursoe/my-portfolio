import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio! Thura Soe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
