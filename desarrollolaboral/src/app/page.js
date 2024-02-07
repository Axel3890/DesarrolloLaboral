"use client"
import Image from "next/image";
import Link from "next/link"
import { useEffect } from "react";
import Swal from "sweetalert2";
export default function Home() {
  useEffect(() => {
    Swal.fire({
      title: "Atencion",
      text: "No soy ningun experto en el tema, simplemente reuní distinta información, para guiarte mejor en una busqueda laboral por favor consulta a un profesional del área",
      icon: "warning",
      confirmButtonText: "Entendido",
    });
  }, []);
  return (
<div className="justify-center items-center m-auto h-auto">
  <section key="1" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-custom-green">
            Tu Guía para el Empleo en IT
          </h1>
          <p className="max-w-[600px] text-custom-white md:text-xl dark:text-custom-white p-4">
            En Desarrollo laboral, estamos dedicados a ayudarte a alcanzar tus metas profesionales en el emocionante campo de la tecnología de la información. ¿Buscas tu próximo desafío laboral? ¡Estás en el lugar correcto! Aquí encontrarás recursos, consejos y oportunidades para impulsar tu carrera en IT.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}
