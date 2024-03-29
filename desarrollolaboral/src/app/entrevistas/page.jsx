import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo laboral - Consejos de Entrevistas",
  description:
    "Consejos prácticos para prepararte y destacar en entrevistas laborales en el sector de la tecnología.",
  keywords: [
    "entrevistas",
    "tecnología",
    "consejos de entrevistas",
    "empleo",
    "preparación entrevistas",
  ],
  icons: {
    icon: ["/favicon.ico"],
  },
  og: {
    title: "Desarrollo laboral - Preguntas Típicas y Técnicas",
    description:
      "Recopilación de preguntas comunes y técnicas en entrevistas laborales para roles tecnológicos, junto con consejos para responderlas de manera efectiva.",
    image: "/preguntas-image.jpg",
    url: "https://desarrollo-laboral.vercel.app/entrevistas",
  },
};

export default function Entrevistas() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-green">
                Tips y plataformas de practica para tu entrevista
              </h1>
              <p className="mx-auto max-w-[700px] text-custom-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-custom-white">
                Tips esenciales para tu proxima entrevista.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10 ">
              <Link href="/entrevistas/preguntas">
                <div className="space-y-4 border-2 border-custom-white rounded-xl p-3">
                  <h3 className="text-2xl font-bold text-custom-green">
                    Preguntas tipicas de entrevistas
                  </h3>
                  <p className="text-custom-white dark:text-custom-white">
                    prepárese para preguntas comunes en entrevistas como Háblame
                    de ti, ¿Por qué deberíamos contratarte?, ¿Qué ¿Cuáles son
                    tus fortalezas y debilidades?, y ¿Dónde te ves dentro de 5
                    años?.
                  </p>
                </div>
              </Link>
              <Link href="/entrevistas/tecnologias">
                {" "}
                <div className="space-y-4  border-2 border-custom-white rounded-xl p-3">
                  <h3 className="text-2xl font-bold text-custom-green">
                    Preguntas de tecnologias
                  </h3>
                  <p className="text-custom-white dark:text-custom-white">
                    Busca tu stack y preparate para las posibles preguntas
                    tecnicas, encuentra distintos lenguajes de programacion y frameworks
                  </p>
                </div>
              </Link>
              <Link href="/entrevistas/preparacion">
                {" "}
                <div className="space-y-4  border-2 border-custom-white rounded-xl p-3">
                  <h3 className="text-2xl font-bold text-custom-green">
                    Estrategia de preparacion
                  </h3>
                  <p className="text-custom-white dark:text-custom-white">
                    Que debes tener listo para presentarte a una entrevista
                  </p>
                </div>
                </Link>
                <Link href="/entrevistas/entrevista-qa">
                {" "}
                <div className="space-y-4  border-2 border-custom-white rounded-xl p-3">
                  <h3 className="text-2xl font-bold text-custom-green">
                    Preguntas QA Testers
                  </h3>
                  <p className="text-custom-white dark:text-custom-white">
                 Preguntas dirigidas a QA Testers
                  </p>
                </div>
              </Link>
              <Link href="/entrevistas/entrevista-uxui">
                {" "}
                <div className="space-y-4  border-2 border-custom-white rounded-xl p-3">
                  <h3 className="text-2xl font-bold text-custom-green">
                    Preguntas UX/UI
                  </h3>
                  <p className="text-custom-white dark:text-custom-white">
                 Preguntas dirigidas a Diseñadores UX/UI.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-custom-black dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-green">
                Plataformas de practica
              </h2>
              <p className="mx-auto max-w-[700px] text-custom-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-custom-white">
                Utiliza estas plataformas para practicar tus entrevistas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 bg-cust ">
              <a
                href="https://grow.google/certificates/interview-warmup/"
                target="blank"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Warmup</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      alt="InterviewWarmmup logo"
                      className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                      height="100"
                      src="/icons/plataformas/google.png"
                      width="100"
                    />
                    <p className="text-custom-white dark:text-gray-400">
                      una inteligencia artificial desarrollada por google gratis
                      para entrenar tus respuestas a las entrevistas de trabajo.
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://www.perfectinterview.ai/" target="blank">
                <Card>
                  <CardHeader>
                    <CardTitle>Perfect Interview</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      alt="Perfect Interview Logo"
                      className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                      height="100"
                      src="/icons/plataformas/perfectai.png"
                      width="100"
                    />
                    <p className="text-custom-white dark:text-gray-400">
                      La práctica perfecta conduce a resultados perfectos.
                      Aplaste su próxima entrevista de trabajo con una
                      entrevista simulada realista impulsada por IA.
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://interviewing.io/" target="blank">
                <Card>
                  <CardHeader>
                    <CardTitle>Interviewing.io</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      alt="Interviewing.io Logo"
                      className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/icons/plataformas/interview.png"
                      width="70"
                    />
                    <p className="text-custom-white dark:text-gray-400">
                      Entrevistas simuladas anónimas con ingenieros de Amazon,
                      Google, Facebook y otras compañías importantes
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://chat.openai.com/" target="blank">
                <Card>
                  <CardHeader>
                    <CardTitle>Chat GPT</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      alt="Chat GPT Logo"
                      className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/icons/plataformas/chatgpt.png"
                      width="70"
                    />
                    <p className="text-custom-white dark:text-gray-400">
                      Pidele que actue como un entrevistador, incluye las
                      tecnologias y tu CV y a practicar!
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://leetcode.com/" target="blank">
                <Card>
                  <CardHeader>
                    <CardTitle>LeetCode</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      alt="LeetCode Logo"
                      className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/icons/plataformas/leetcode.png"
                      width="70"
                    />
                    <p className="text-custom-white dark:text-gray-400">
                      LeetCode es la mejor plataforma para ayudarle a mejorar
                      sus habilidades, ampliar sus conocimientos y prepararse
                      para entrevistas técnicas.
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://www.hackerrank.com/" target="blank">
                <Card>
                  <CardHeader>
                    <CardTitle>Hackerrank</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      alt="Hackerrank Logo"
                      className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/icons/plataformas/hackerrank.png"
                      width="70"
                    />
                    <p className="text-custom-white dark:text-gray-400">
                      Prepárese para la entrevista para las principales empresas
                      resolviendo un kit de preparación para la entrevista.
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
