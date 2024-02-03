import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Utils/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimelist",
  description: "Website Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}</body>
    </html>
  );
}
