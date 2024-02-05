import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Desarrollo laboral - Consejos para el CV",
  description: "Consejos útiles para mejorar tu CV y destacar tus habilidades y experiencia en el campo de la tecnología.",
  keywords: ["CV", "currículum", "tecnología", "empleo", "desarrollo profesional"],
  icons: {
    icon: ['/favicon.ico']
  },
  og: {
    title: "Desarrollo laboral - Consejos para el CV",
    description: "Consejos útiles para mejorar tu CV y destacar tus habilidades y experiencia en el campo de la tecnología.",
    image: "/rocket.png",
    url: "https://desarrollo-laboral.vercel.app/cvtips"
  }
};


function Cvtips() {
  return (
    <div className="justify-center items-center m-auto h-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-custom-green">Tips para el curriculum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-custom-black">
        <Card className="mx-auto max-w-sm bg-custom-black">
          <CardHeader>
            <CardTitle className="text-3xl text-custom-green">Tip 1</CardTitle>
            <CardDescription className="text-custom-white text-2xl">
              Estructurar tu CV.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-md text-custom-white">
              1. Añade un resumen profesional <br></br>📌 Tip: 3-4 oraciones es
              suficiente.<br></br> 📌 Ármalo de esta forma 👉🏻 experiencia
              profesional + manejo de herramientas + tu objetivo.
              <br></br>
              <br></br>
              <br></br>
              2. No añadas habilidades blandas<br></br>
              📌 Focalizate en tus habilidades técnicas o #hardskills. El resto
              se evaluará en una entrevista 🚀<br></br>
              <br></br>
              <br></br>
              3. No uses gráficos para detallar tu nivel de experticia <br></br>
              📌 Mientras más sencillo, mejor: usa las palabras básico,
              intermedio o avanzado.
              <br></br>
              <br></br>
              4. No agregues tus referencias <br></br>📌 Contiene información
              confidencial de otras personas (como el número de celular). Si
              RRHH lo requiere, te lo pedirán.
              <br></br>
              <br></br>✅ Ser directo cuando redactes. Coloca palabras claves
              relacionadas a la posición que buscas.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Adriana Peraza</span>
            </div>
            <a
              href="https://www.linkedin.com/posts/ariana-pedraza_tips-para-un-cv-exitoso-resumen-profesional-activity-7153816881777295361-Gmw4"
              target="blank"
            >
              <Button className="w-full md:w-auto bg-custom-green" variant="outline">
                Ver post
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="mx-auto max-w-sm bg-custom-black">
          <CardHeader>
            <CardTitle className="text-3xl text-custom-green">Tip 2</CardTitle>
            <CardDescription className="text-custom-white text-2xl">
              Redaccion Mail Postulacion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-md text-custom-white">
              🙋‍♀️ Presentate: Mencioná tu nombre, que perfil sos, agregar si
              estás trabajando y/o estudiando actualmente.<br></br>
              <br></br>
              🎯 Especificá la vacante a la que estás aplicando: Los
              reclutadores publicamos muchos avisos, tenemos abiertas varias
              vacantes en simultáneo, por lo que no podemos ponernos a descifrar
              a cuál de todas te interesa aplicar. Para esto, podés poner el
              nombre de la vacante en el asunto
              <br></br>
              <br></br>
              📌 Indicá por qué te interesó la vacante: Especificar por qué nos
              interesó esta vacante en específico.<br></br>
              <br></br>✅ Menciona cuáles de los requisitos de la vacante
              cumplís, con cuales tenés más experiencia, el tiempo trabajando
              con cada una, etc.<br></br>
              <br></br>
              🔸 Demostrá interés. Nunca está de más incluso pedir si se puede
              obtener más información de la posición para entender mejor de qué
              se trata y así llegar mejor preparado a la entrevista.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Lucia Torena</span>
            </div>
            <a
              href="https://www.linkedin.com/posts/lucia-torena_por-qu%C3%A9-es-importante-la-redacci%C3%B3n-activity-7097589463291191297-yrvX?"
              target="blank"
            >
              <Button className="w-full md:w-auto bg-custom-green" variant="outline">
                Ver post
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="mx-auto max-w-sm bg-custom-black">
          <CardHeader>
            <CardTitle className="text-3xl text-custom-green">Tip 3 </CardTitle>
            <CardDescription className="text-custom-white text-2xl">
              Filtros ATS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-md text-custom-white">
              ✅ Usa títulos de sección estándar: etiqueta las secciones de
              experiencia laboral y educación con títulos de sección
              convencionales.
              <br></br>
              <br></br>
              📝 Usa fuentes estándar: algunas fuentes más nuevas convierten
              letras en caracteres especiales que los ATS a menudo escanean
              incorrectamente., utilize una fuente estándar (Garamond, Arial,
              Calibri)
              <br></br>
              <br></br>
              📊 Diseña tu CV en una sola columna: los ATS modernos son mejores
              para escanear diseños de varias columnas, pero hay varios ATS que
              fallan al leer currículos de varias columnas.
              <br></br>
              <br></br>
              🚫 No incluyas tablas: las tablas rara vez se analizan
              correctamente. Usa alineaciones derecha/izquierda para estructurar
              su currículum.
              <br></br>
              <br></br>
              📊 No mandes to CV escaneados, o con imágenes o diagramas: el
              texto de tu currículum debe ser resaltable y legible. Evita el uso
              de imágenes, diagramas y gráficos en tu currículum
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Carolina Vera</span>
            </div>
            <a href="https://www.linkedin.com/posts/carolinavera_5-consejos-para-que-los-ats-seleccionen-tu-activity-7074258189717823489-oYD6?" target="blank">
              <Button className="w-full md:w-auto bg-custom-green" variant="outline">
                Ver post
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Cvtips;
