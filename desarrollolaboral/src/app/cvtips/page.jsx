import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

function Cvtips() {
  return (
    <div className="justify-center items-center m-auto h-auto">
      <h1 className="text-4xl font-bold text-center mb-8">CV Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-custom-black">
        <Card className="mx-auto max-w-sm bg-custom-black">
          <CardHeader>
            <CardTitle className="text-3xl text-custom-green">Tip 1</CardTitle>
            <CardDescription className="text-custom-white">Estructurar tu CV.</CardDescription>
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
              3. No uses gráficos para detallar tu nivel de experticia 📌
              Mientras más sencillo, mejor: usa las palabras básico, intermedio
              o avanzado.
              <br></br>
              <br></br>
              4. No agregues tus referencias <br></br>📌 Contiene información
              confidencial de otras personas (como el número de celular). Si
              RRHH lo requiere, te lo pedirán.
              <br></br>
              <br></br>
              <br></br>
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <span className="text-sm">Adriana Peraza</span>
            </div>
            <Button className="w-full md:w-auto" variant="outline">
              Ver post
            </Button>
          </CardFooter>
        </Card>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-3xl text-custom-green">Tip 2</CardTitle>
            <CardDescription className="text-custom-white">Redaccion Mail Postulacion.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-md text-custom-white">
              🙋‍♀️ Presentate: Mencioná tu nombre, que perfil sos,
              agregar si estás trabajando y/o estudiando actualmente.<hr></hr>
              🎯 Especificá la vacante a la que estás aplicando: Los
              reclutadores publicamos muchos avisos, tenemos abiertas varias
              vacantes en simultáneo y nos llegan muchísimos CV, por lo que no
              podemos ponernos a descifrar a cuál de todas te interesa aplicar.
              Para esto, podés poner el nombre de la vacante en el asunto y
              volver a mencionarla en el cuerpo del mail<hr></hr>
              📌 Indicá por qué te interesó la vacante: Es obvio que si enviamos
              un CV es porque estamos buscando nuevas oportunidades, especifica por qué nos interesó esta vacante en
              específico.<hr></hr>✅ Menciona cuáles de los requisitos de la
              vacante cumplís, con cuales tenés más experiencia, el tiempo
              trabajando con cada una, etc.<hr></hr>
              🔸 Demostrá interés. Nunca está de más incluso pedir si se puede
              obtener más información de la posición para entender mejor de qué
              se trata y así llegar mejor preparado a la entrevista.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <span className="text-sm">Lucia Torena</span>
            </div>
            <Button className="w-full md:w-auto" variant="outline">
            Ver post
            </Button>
          </CardFooter>
        </Card>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-3xl text-custom-green">Tip 3 </CardTitle>
            <CardDescription className="text-custom-white">Filtros ATS</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-md text-custom-white">
              ✅ Usa títulos de sección estándar: etiqueta las secciones de
              experiencia laboral y educación con títulos de sección
              convencionales.
              <br></br><br></br>
              📝 Usa fuentes estándar: algunas fuentes más nuevas convierten
              letras en caracteres especiales que los ATS a menudo escanean
              incorrectamente., utilize una fuente estándar (Garamond, Arial,
              Calibri)
              <br></br><br></br>
              📊 Diseña tu CV en una sola columna: los ATS modernos son mejores
              para escanear diseños de varias columnas, pero hay varios ATS que
              fallan al leer currículos de varias columnas.
              <br></br><br></br>
              🚫 No incluyas tablas: las tablas rara vez se analizan
              correctamente. Usa alineaciones derecha/izquierda para estructurar
              su currículum.
              <br></br><br></br>
              📊 No mandes to CV escaneados, o con imágenes o diagramas: el
              texto de tu currículum debe ser resaltable y legible. Evita el uso
              de imágenes, diagramas y gráficos en tu currículum
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <span className="text-sm">Author Name</span>
            </div>
            <Button className="w-full md:w-auto" variant="outline">
            Ver post
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Cvtips;
