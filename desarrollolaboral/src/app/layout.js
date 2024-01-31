import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/component/Navbar"
import Footer from "@/components/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desarrollo laboral - Inicio",
  description: "Potencia tu búsqueda de empleo con los mejores consejos en tecnología, desde tips y plantillas de CV hasta preguntas típicas de entrevistas.",
  keywords: ["desarrollo laboral", "empleo", "tecnología", "CV", "entrevistas", "consejos laborales"],
  icons: {
    icon: ['/favicon.ico']
  },
  og: {
    title: "Desarrollo laboral - Inicio",
    description: "Potencia tu búsqueda de empleo con los mejores consejos en tecnología, desde tips y plantillas de CV hasta preguntas típicas de entrevistas.",
    image: "/rocket.png",
    url: "https://desarrollo-laboral.vercel.app"
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-custom-black">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
