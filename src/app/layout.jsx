import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Utils/Navbar";

const poppins = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimelist",
  description: "Website Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-main-white`} suppressHydrationWarning={true}>
        <Navbar />
        {children}</body>
    </html>
  );
}
