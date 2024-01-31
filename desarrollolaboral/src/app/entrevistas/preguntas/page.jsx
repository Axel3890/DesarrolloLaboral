import { Button } from "@/components/ui/button";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

const preguntas = [
  {
    pregunta: "¿Cuál es tu experiencia con [tecnología específica]?",
    respuesta: "He trabajado con [tecnología específica] durante [X] años en proyectos [descripción breve de los proyectos]. He utilizado esta tecnología para [acciones específicas], lo que me ha dado un profundo conocimiento y experiencia en su aplicación práctica."
  },
  {
    pregunta: "¿Cómo te mantienes al día con las últimas tendencias y avances en tecnología?",
    respuesta: "Me mantengo actualizado a través de cursos en línea, blogs de tecnología, conferencias y participación en comunidades en línea. Además, me gusta experimentar con nuevas tecnologías en proyectos personales para comprender mejor su potencial y aplicaciones."
  },
  {
    pregunta: "¿Puedes describir un desafío técnico que hayas enfrentado y cómo lo superaste?",
    respuesta: "En un proyecto anterior, nos encontramos con [descripción del desafío]. Para superarlo, llevamos a cabo un análisis exhaustivo del problema, colaboramos estrechamente con el equipo y exploramos varias soluciones potenciales antes de implementar [solución específica]. Este enfoque nos permitió resolver el problema de manera eficiente y efectiva."
  },
  {
    pregunta: "¿Cómo manejas situaciones de presión o plazos ajustados en proyectos de desarrollo de software?",
    respuesta: "En situaciones de presión, priorizo las tareas según su impacto en el objetivo final del proyecto y me aseguro de mantener una comunicación abierta con el equipo para identificar posibles obstáculos y encontrar soluciones rápidas. Además, soy flexible en cuanto a la planificación y estoy dispuesto a ajustarla según sea necesario para cumplir con los plazos."
  },
  {
    pregunta: "¿Cuál es tu enfoque para la resolución de problemas técnicos complejos?",
    respuesta: "Mi enfoque comienza por descomponer el problema en partes más pequeñas y comprensibles. Luego, realizo un análisis detallado de cada componente para identificar posibles soluciones. Utilizo recursos como documentación, pruebas y consultas a colegas para validar mis ideas y llegar a una solución sólida y eficiente."
  },
  {
    pregunta: "¿Cómo gestionas la documentación y el mantenimiento del código en un proyecto colaborativo?",
    respuesta: "Utilizo herramientas de control de versiones como Git para gestionar el código de manera eficiente y colaborativa. Además, mantengo una documentación clara y concisa que describe el propósito y funcionamiento de cada componente del sistema. Esto facilita la comprensión y el mantenimiento del código para mí y otros miembros del equipo."
  },
  {
    pregunta: "¿Cuál es tu experiencia en trabajar en equipos multidisciplinarios?",
    respuesta: "He tenido experiencia trabajando en equipos multidisciplinarios donde he colaborado estrechamente con profesionales de diferentes áreas, como desarrolladores, diseñadores y especialistas en marketing. Valorizo la diversidad de opiniones y habilidades en un equipo, y estoy comprometido a fomentar un ambiente de trabajo inclusivo y colaborativo donde todos puedan contribuir y aprender unos de otros."
  },
  {
    pregunta: "¿Cómo manejas la retroalimentación y los comentarios sobre tu trabajo?",
    respuesta: "Aprecio la retroalimentación como una oportunidad para crecer y mejorar. Escucho atentamente los comentarios recibidos, los analizo de manera objetiva y estoy dispuesto a realizar los cambios necesarios para alcanzar los estándares de calidad y cumplir con los requisitos del proyecto. Además, busco activamente oportunidades de aprendizaje continuo para mejorar mis habilidades y conocimientos."
  },
  {
    pregunta: "¿Por qué te interesa trabajar en esta empresa/posición específica?",
    respuesta: "Estoy muy interesado en esta empresa/posición porque [menciona aspectos específicos de la empresa/posición que te atraen, como su cultura empresarial, proyectos innovadores, oportunidades de crecimiento, etc.]. Creo que mis habilidades y experiencia en [áreas relevantes] encajan perfectamente con lo que están buscando, y estoy entusiasmado con la posibilidad de contribuir al éxito del equipo y aprender de profesionales talentosos en esta organización."
  }
];

export default function Pregutastipicas() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-custom-green">
            Preguntas típicas de entrevistas
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-base lg:text-lg xl:text-xl dark:text-custom-white mx-auto">
            Aquí tienes una lista de preguntas típicas de entrevistas en el mundo IT.
          </p>
          {preguntas.map((pregunta, index) => (
            <Collapsible key={index} className="space-y-2 bg-custom-green">
              <CollapsibleTrigger asChild>
                <Button className="w-full md:max-w-[80%] text-left text-base md:text-2xl break-all overflow-hidden overflow-ellipsis whitespace-normal" size="sm" variant="ghost">
                  {pregunta.pregunta}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 bg-custom-white">
                <p className="text-base md:text-xl">{pregunta.respuesta}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}



