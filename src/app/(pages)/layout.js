import { Inter } from "next/font/google";
import "../globals.css";
import Nav from "@/componets/nav/page";
import Footer from "@/componets/footer/page"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Willie's Portfolio",
  description: "This is my portfolio to display my skill progression",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
