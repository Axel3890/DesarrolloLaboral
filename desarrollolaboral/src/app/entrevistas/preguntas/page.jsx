import { Button } from "@/components/ui/button";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

export default function Pregutastipicas() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-custom-green">
            Preguntas tipicas de entrevistas
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-custom-white">
            Aqui tienes una lista de preguntas tipicas de entrevistas en el mundo IT.
          </p>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Cuál es tu experiencia con [tecnología específica]?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                He trabajado con [tecnología específica] durante [X] años en
                proyectos [descripción breve de los proyectos]. He utilizado
                esta tecnología para [acciones específicas], lo que me ha dado
                un profundo conocimiento y experiencia en su aplicación
                práctica.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Cómo te mantienes al día con las últimas tendencias y avances
                en tecnología?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                Me mantengo actualizado a través de cursos en línea, blogs de
                tecnología, conferencias y participación en comunidades en
                línea. Además, me gusta experimentar con nuevas tecnologías en
                proyectos personales para comprender mejor su potencial y
                aplicaciones.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Puedes describir un desafío técnico que hayas enfrentado y cómo
                lo superaste?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                En un proyecto anterior, nos encontramos con [descripción del
                desafío]. Para superarlo, llevamos a cabo un análisis exhaustivo
                del problema, colaboramos estrechamente con el equipo y
                exploramos varias soluciones potenciales antes de implementar
                [solución específica]. Este enfoque nos permitió resolver el
                problema de manera eficiente y efectiva.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Cómo manejas situaciones de presión o plazos ajustados en
                proyectos de desarrollo de software?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                En situaciones de presión, priorizo las tareas según su impacto
                en el objetivo final del proyecto y me aseguro de mantener una
                comunicación abierta con el equipo para identificar posibles
                obstáculos y encontrar soluciones rápidas. Además, soy flexible
                en cuanto a la planificación y estoy dispuesto a ajustarla según
                sea necesario para cumplir con los plazos.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Cuál es tu enfoque para la resolución de problemas técnicos
                complejos?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                Mi enfoque comienza por descomponer el problema en partes más
                pequeñas y comprensibles. Luego, realizo un análisis detallado
                de cada componente para identificar posibles soluciones. Utilizo
                recursos como documentación, pruebas y consultas a colegas para
                validar mis ideas y llegar a una solución sólida y eficiente.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Cómo gestionas la documentación y el mantenimiento del código
                en un proyecto colaborativo?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                Utilizo herramientas de control de versiones como Git para
                gestionar el código de manera eficiente y colaborativa. Además,
                mantengo una documentación clara y concisa que describe el
                propósito y funcionamiento de cada componente del sistema. Esto
                facilita la comprensión y el mantenimiento del código para mí y
                otros miembros del equipo.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Cuál es tu experiencia en trabajar en equipos
                multidisciplinarios?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                He tenido experiencia trabajando en equipos multidisciplinarios
                donde he colaborado estrechamente con profesionales de
                diferentes áreas, como desarrolladores, diseñadores y
                especialistas en marketing. Valorizo la diversidad de opiniones
                y habilidades en un equipo, y estoy comprometido a fomentar un
                ambiente de trabajo inclusivo y colaborativo donde todos puedan
                contribuir y aprender unos de otros.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Cómo manejas la retroalimentación y los comentarios sobre tu
                trabajo?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                Aprecio la retroalimentación como una oportunidad para crecer y
                mejorar. Escucho atentamente los comentarios recibidos, los
                analizo de manera objetiva y estoy dispuesto a realizar los
                cambios necesarios para alcanzar los estándares de calidad y
                cumplir con los requisitos del proyecto. Además, busco
                activamente oportunidades de aprendizaje continuo para mejorar
                mis habilidades y conocimientos
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2 bg-custom-green">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left text-2xl" size="sm" variant="ghost">
                ¿Por qué te interesa trabajar en esta empresa/posición
                específica?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 bg-custom-white">
              <p className="text-xl">
                Estoy muy interesado en esta empresa/posición porque [menciona
                aspectos específicos de la empresa/posición que te atraen, como
                su cultura empresarial, proyectos innovadores, oportunidades de
                crecimiento, etc.]. Creo que mis habilidades y experiencia en
                [áreas relevantes] encajan perfectamente con lo que están
                buscando, y estoy entusiasmado con la posibilidad de contribuir
                al éxito del equipo y aprender de profesionales talentosos en
                esta organización.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
