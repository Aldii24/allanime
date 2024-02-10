import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Ur`Anime",
  description: "Create by Aldi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.className} bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
