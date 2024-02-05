import { Button } from "@/components/ui/button";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

const preguntasUXUI = [
    {
        pregunta: "¿Qué es el diseño centrado en el usuario y por qué es importante?",
        respuesta: "El diseño centrado en el usuario es un enfoque que pone las necesidades y deseos del usuario en el centro del proceso de diseño. Es importante porque garantiza que el producto final sea intuitivo, fácil de usar y satisfaga las necesidades del usuario."
    },
    {
        pregunta: "¿Cómo defines y documentas los requisitos de diseño para un proyecto?",
        respuesta: "Defino los requisitos de diseño a través de la investigación de usuarios, la creación de user personas, mapas de empatía y la realización de entrevistas con stakeholders. Documento estos requisitos en documentos de especificaciones de diseño y prototipos interactivos."
    },
    {
        pregunta: "¿Qué herramientas de diseño utilizas y por qué las prefieres?",
        respuesta: "Utilizo herramientas como Sketch, Adobe XD o Figma para crear diseños de interfaz de usuario y prototipos interactivos. Prefiero estas herramientas por su facilidad de uso, colaboración en tiempo real y capacidad para crear prototipos de alta fidelidad."
    },
    {
        pregunta: "¿Cómo abordarías el diseño de una experiencia de usuario para un nuevo producto?",
        respuesta: "Comenzaría por comprender las necesidades y expectativas de los usuarios a través de la investigación y el análisis de mercado. Luego, crearía wireframes y prototipos para iterar y refinar el diseño antes de la implementación final."
    },
    {
        pregunta: "¿Qué consideraciones tienes en cuenta al diseñar para múltiples dispositivos y pantallas?",
        respuesta: "Considero factores como el tamaño de la pantalla, la resolución, la orientación y las capacidades táctiles de los dispositivos al diseñar interfaces responsivas. Además, priorizo la consistencia visual y la accesibilidad en todos los dispositivos."
    },
    {
        pregunta: "¿Cómo evaluarías y mejorarías la velocidad de carga de un sitio web o aplicación?",
        respuesta: "Utilizaría herramientas como PageSpeed Insights y Lighthouse para identificar áreas de mejora en el rendimiento del sitio web o aplicación. Luego, optimizaría el código, reduciría el tamaño de los archivos y utilizaría técnicas de almacenamiento en caché para mejorar la velocidad de carga."
    },
    {
        pregunta: "¿Cómo colaborarías con equipos de desarrollo y marketing para asegurar una implementación efectiva del diseño UX/UI?",
        respuesta: "Mantendría una comunicación abierta y colaborativa con los equipos de desarrollo y marketing desde las etapas iniciales del proyecto. Trabajaría en conjunto para comprender los objetivos y requisitos del proyecto, y asegurarme de que el diseño se implemente de manera efectiva y coherente con la visión del producto."
    },
    {
        pregunta: "¿Qué importancia tiene la accesibilidad en el diseño UX/UI y cómo la integrarías en tus proyectos?",
        respuesta: "La accesibilidad es crucial para garantizar que todos los usuarios, independientemente de sus capacidades, puedan acceder y utilizar un producto digital. Integraría la accesibilidad en mis proyectos siguiendo pautas como las WCAG (Web Content Accessibility Guidelines) y realizando pruebas con usuarios con discapacidades."
    },
    {
        pregunta: "¿Qué estrategias utilizarías para diseñar una experiencia de usuario personalizada?",
        respuesta: "Utilizaría datos de usuarios como historiales de navegación y preferencias para personalizar la experiencia del usuario. También implementaría características como recomendaciones personalizadas y contenido dinámico basado en el comportamiento del usuario."
    },
    {
        pregunta: "¿Cómo manejarías las discrepancias entre el cliente y las mejores prácticas de diseño UX/UI?",
        respuesta: "Buscaría un equilibrio entre las expectativas del cliente y las mejores prácticas de diseño UX/UI a través de la educación y la justificación de las decisiones de diseño. Presentaría casos de estudio y ejemplos para respaldar mis recomendaciones y trabajar en colaboración con el cliente para llegar a un compromiso satisfactorio."
    },
    {
        pregunta: "¿Qué es el diseño de interacción y por qué es importante en el diseño UX/UI?",
        respuesta: "El diseño de interacción se centra en cómo los usuarios interactúan con un producto digital. Es importante porque influye en la experiencia del usuario y en la facilidad de uso del producto."
    },
    {
        pregunta: "¿Qué es el diseño de sistemas y cómo contribuye a la coherencia del diseño UX/UI?",
        respuesta: "El diseño de sistemas consiste en crear sistemas de diseño y patrones reutilizables para garantizar la coherencia visual y funcional en un producto digital. Contribuye a la coherencia del diseño al proporcionar un conjunto consistente de componentes y estilos que se pueden aplicar en todo el producto."
    },
    {
        pregunta: "¿Cómo integras la retroalimentación del usuario en el proceso de diseño?",
        respuesta: "Recolecto y analizo la retroalimentación del usuario a través de pruebas de usabilidad, encuestas y análisis de métricas de uso. Utilizo esta retroalimentación para iterar y mejorar el diseño del producto."
    },
    {
        pregunta: "¿Qué es el diseño de sistemas y cómo contribuye a la coherencia del diseño UX/UI?",
        respuesta: "El diseño de sistemas consiste en crear sistemas de diseño y patrones reutilizables para garantizar la coherencia visual y funcional en un producto digital. Contribuye a la coherencia del diseño al proporcionar un conjunto consistente de componentes y estilos que se pueden aplicar en todo el producto."
    },
    {
        pregunta: "¿Cómo abordarías la optimización de la conversión en un sitio web o aplicación?",
        respuesta: "Realizaría pruebas A/B para evaluar diferentes elementos de diseño y su impacto en las conversiones. También analizaría el embudo de conversión y realizaría ajustes en el diseño para eliminar posibles obstáculos y mejorar la experiencia del usuario."
    },
];

export default function Pregutastipicas() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-custom-green">
            Preguntas de entrevistas de UX/UI 🎨
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-base lg:text-lg xl:text-xl dark:text-custom-white mx-auto">
            Preguntas de entrevista UX/UI
          </p>
          {preguntasUXUI.map((pregunta, index) => (
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
