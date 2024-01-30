import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/component/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desarrollo laboral",
  description: "Potencia tu busqueda de empleo con los mejores consejos, desde tips y plantillas de cv, hasta pregutas tipicas de entrevistas",
  icons:{
    icon:['/favicon.ico']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-custom-black">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
