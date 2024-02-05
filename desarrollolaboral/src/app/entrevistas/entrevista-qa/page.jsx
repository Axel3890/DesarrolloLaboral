import { Button } from "@/components/ui/button";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

const preguntasqa = [
  {
    pregunta: "¿Qué es la prueba de regresión y por qué es importante en el proceso de QA?",
    respuesta: "La prueba de regresión se utiliza para asegurar que los cambios recientes en el código no han afectado negativamente a las características existentes del software. Es crucial para mantener la estabilidad y la integridad del sistema."
  },
  {
    pregunta: "¿Cómo abordarías la creación de casos de prueba para una nueva funcionalidad?",
    respuesta: "Primero, analizaría los requisitos y las especificaciones de la funcionalidad. Luego, identificaría los casos de prueba positivos y negativos para cubrir todos los escenarios posibles, asegurándome de probar la funcionalidad en diferentes condiciones y dispositivos."
  },
  {
    pregunta: "¿Qué es la automatización de pruebas y cuándo es apropiado utilizarla?",
    respuesta: "La automatización de pruebas implica escribir scripts para ejecutar pruebas de forma automatizada. Es apropiado utilizarla en casos donde las pruebas son repetitivas, como pruebas de regresión, y donde se necesita una rápida retroalimentación sobre la calidad del software."
  },
  {
    pregunta: "¿Cómo manejarías un defecto crítico encontrado en producción?",
    respuesta: "Lo primero es informar inmediatamente al equipo de desarrollo y al equipo de gestión de calidad sobre el defecto. Luego, trabajaría en conjunto con el equipo de desarrollo para identificar la causa raíz y encontrar una solución lo antes posible para minimizar el impacto en los usuarios."
  },
  {
    pregunta: "¿Qué es la integración continua y cómo puede mejorar el proceso de QA?",
    respuesta: "Respuesta: La integración continua implica integrar y probar cambios en el código de forma continua. Esto puede mejorar el proceso de QA al detectar problemas de forma temprana y garantizar que el código nuevo no cause conflictos con el código existente."
  },
  {
    pregunta: "¿Cómo determinarías la prioridad de los defectos encontrados durante las pruebas?",
    respuesta: "Evaluaría la gravedad del defecto y su impacto en la funcionalidad del sistema, así como la frecuencia con la que se produce. Priorizaría los defectos que afecten negativamente a la experiencia del usuario o a la funcionalidad principal del software."
  },
  {
    pregunta: "¿Cuál es tu enfoque para probar aplicaciones móviles en diferentes dispositivos y sistemas operativos?",
    respuesta: "Utilizaría una combinación de dispositivos físicos y emuladores para probar la aplicación en una variedad de entornos. También prestaría atención a las diferencias en el comportamiento entre diferentes versiones de sistemas operativos y dispositivos."
  },
  {
    pregunta: "¿Qué es la prueba de carga y cómo la llevarías a cabo?",
    respuesta: "La prueba de carga evalúa el rendimiento del software bajo condiciones de carga pesada. Para llevarla a cabo, simularía un gran número de usuarios accediendo simultáneamente al sistema y registraría métricas como el tiempo de respuesta y la estabilidad del sistema."
  },
  {
    pregunta: "¿Cómo documentarías tus hallazgos durante las pruebas?",
    respuesta: "Utilizaría un sistema de gestión de defectos para registrar todos los problemas encontrados durante las pruebas, incluyendo detalles como la descripción del defecto, pasos para reproducirlo y capturas de pantalla si es necesario."
  },
  {
    pregunta: "¿Qué habilidades consideras más importantes para un buen tester de calidad?",
    respuesta: "Las habilidades de comunicación, atención al detalle, capacidad de análisis y conocimiento técnico son fundamentales para un buen tester de calidad."
  }
  ,
  {
    pregunta: "¿Cómo identificarías y manejarías los casos de prueba que no son reproducibles?",
    respuesta: "En primer lugar, intentaría reproducir el problema utilizando los mismos pasos y entorno descritos en el informe. Si no puedo reproducirlo, buscaría más información sobre las condiciones específicas en las que ocurrió el problema y colaboraría con el equipo de desarrollo para resolverlo."
  }
  ,
  {
    pregunta: "¿Qué técnicas utilizarías para probar la seguridad de una aplicación?",
    respuesta: ": Utilizaría técnicas como pruebas de penetración, análisis estático de código y análisis de vulnerabilidades para identificar posibles puntos débiles en la seguridad de la aplicación. También estaría al tanto de las mejores prácticas de seguridad en el desarrollo de software."
  }
  ,
  {
    pregunta: "¿Cómo garantizarías la calidad de las actualizaciones de software sin interrumpir la experiencia del usuario?",
    respuesta: "Realizaría pruebas exhaustivas de las actualizaciones en un entorno de prueba antes de implementarlas en producción. Utilizaría técnicas como la segmentación de usuarios y el despliegue gradual para minimizar el impacto en la experiencia del usuario mientras se asegura la calidad del software."
  }
  ,
  {
    pregunta: "¿Qué estrategias utilizarías para mantener la calidad del software a lo largo del tiempo en un proyecto a largo plazo?",
    respuesta: "Implementaría un proceso de revisión continua de la calidad del código, incluyendo pruebas automatizadas y manuales, así como análisis de rendimiento y seguridad de forma regular. También estaría atento a las actualizaciones tecnológicas y las mejores prácticas de la industria."
  }
  ,
  {
    pregunta: "¿Cómo te mantendrías actualizado sobre las nuevas tecnologías y tendencias en el campo de la calidad de software?",
    respuesta: "Participaría en conferencias, seminarios web y grupos de discusión en línea relacionados con la calidad de software. También leería blogs, libros y revistas especializadas, y buscaría oportunidades para obtener certificaciones en áreas relevantes."
  }
];


export default function Pregutastipicas() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-custom-green">
            Preguntas de entrevistas de QA 🕵️‍♂️
          </h1>
          <h2 className="max-w-[600px] text-gray-500 md:text-base lg:text-lg xl:text-xl dark:text-custom-white mx-auto">
            Preguntas de entrevista QA
          </h2>
          {preguntasqa.map((pregunta, index) => (
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
