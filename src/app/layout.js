import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"],weight:['300','400','500','600','700','800'] });

export const metadata = {
  title: "Telegram | Chat App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark dark:bg-slate-900">
      <body className={inter.className}>
        <header>
          <Navbar/>
        </header>
        {children}</body>
    </html>
  );
}
