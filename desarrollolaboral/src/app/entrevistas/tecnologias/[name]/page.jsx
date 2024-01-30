
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import Link from "next/link"

async function getData(name){ 
  const data = await fetch(`https://desarrollo-laboral.vercel.app/api/preguntas/${name}`)
  const res = await data.json()
  return res
}
 
export default async function Viewquestions({params}) {
  const preguntas = await getData(params.name)
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">

      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 flex justify-between">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-green">Preguntas frecuentes sobre {params.name}</h2>
          <Link href="http://localhost:3000/entrevistas/tecnologias"><button type="button" className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Volver</span>
</button></Link>
        </div>
        <div className="space-y-6">
          {preguntas.map((preguntaRespuesta, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md cursor-pointer dark:text-custom-white">
                  <h3 className="text-lg font-medium text-custom-black">{preguntaRespuesta.Pregunta}</h3>
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-custom-green">
                <div className="px-4 py-2 text-gray-500 dark:text-custom-white text-xl">
                  {preguntaRespuesta.Respuesta}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>)
  );
}


function ChevronDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6-6" />
    </svg>)
  );
}
