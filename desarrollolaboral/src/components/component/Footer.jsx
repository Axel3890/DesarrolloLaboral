import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-custom-black rounded-lg shadow dark:bg-custom-black md:pt-12 pt-96">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex-grow">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/cvtips"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Desarrollo Laboral
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/cvtips" className="hover:underline me-4 md:me-6">
               Tips CV
              </Link>
            </li>
            <li>
              <Link href="/plantillas" className="hover:underline me-4 md:me-6">
                Plantillas CV
              </Link>
            </li>
            <li>
              <Link href="/entrevistas" className="hover:underline me-4 md:me-6">
                Entrevistas
              </Link>
            </li>
            <li>
              <Link href="/plataformas" className="hover:underline">
                Plataformas
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
           Creado con ❤️ por <Link href="https://www.linkedin.com/in/axel-gomez-sosa/" target="_blank">Axel</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;





