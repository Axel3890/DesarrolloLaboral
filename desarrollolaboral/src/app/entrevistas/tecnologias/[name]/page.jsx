
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

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
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-green">Preguntas frecuentes sobre {params.name}</h2>
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
