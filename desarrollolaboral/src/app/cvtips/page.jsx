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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Tip 1</CardTitle>
            <CardDescription>Estructurar tu CV.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              1. Añade un resumen profesional <br></br>📌 Tip: 3-4 oraciones es
              suficiente.<br></br> 📌 Ármalo de esta forma 👉🏻 experiencia
              profesional + manejo de herramientas + tu objetivo.
              <hr></hr>
              2. No añadas habilidades blandas<br></br>
              📌 Focalizate en tus habilidades técnicas o #hardskills. El resto
              se evaluará en una entrevista 🚀
              <hr></hr>
              2. No añadas habilidades blandas<br></br>
              📌 Focalizate en tus habilidades técnicas o #hardskills. El resto
              se evaluará en una entrevista 🚀<br></br>
              <hr></hr>
              2. No uses gráficos para detallar tu nivel de experticia 📌
              Mientras más sencillo, mejor: usa las palabras básico, intermedio
              o avanzado.
              <br></br>
              <hr></hr>
              3. No agregues tus referencias 📌 Contiene información
              confidencial de otras personas (como el número de celular). Si
              RRHH lo requiere, te lo pedirán.
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
              Share Tip
            </Button>
          </CardFooter>
        </Card>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Tip 2</CardTitle>
            <CardDescription>Redaccion Mail Postulacion.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              🙋‍♀️ Presentate: Mencioná tu nombre, que perfil sos, podés incluso
              agregar si estás trabajando y/o estudiando actualmente.<hr></hr>
              🎯 Especificá la vacante a la que estás aplicando: Esto creo que
              es lo MÁS importante de todo. Los reclutadores publicamos muchos
              avisos, tenemos abiertas varias vacantes en simultáneo y nos
              llegan muchísimos CV, por lo que no podemos ponernos a descifrar a
              cuál de todas te interesa aplicar. Para esto, podés poner el
              nombre de la vacante en el asunto y volver a mencionarla en el
              cuerpo del mail<hr></hr>
              📌 Indicá por qué te interesó la vacante: Es obvio que si enviamos
              un CV es porque estamos buscando nuevas oportunidades, lo
              importante acá es especificar por qué nos interesó esta vacante en
              específico.<hr></hr>✅ Aporta mucho valor que menciones cuáles de
              los requisitos de la vacante cumplís, con cuales tenés más
              experiencia, el tiempo trabajando con cada una, etc. No tiene que
              ser un resumen de tu CV, pero con una breve mención a tus skills
              ya nos ayuda a comprender si tu perfil se adapta.<hr></hr>
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
              Share Tip
            </Button>
          </CardFooter>
        </Card>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Tip 3</CardTitle>
            <CardDescription>
              Filtros ATS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
            1️⃣ Usa títulos de sección estándar: etiqueta las secciones de experiencia laboral y educación con títulos de sección convencionales. Por ejemplo, utiliza "Experiencia profesional" en lugar de "Mi carrera en pocas palabras".
<br></br>
2️⃣ Usa fuentes estándar: algunas fuentes más nuevas convierten letras en caracteres especiales que los ATS a menudo escanean incorrectamente. Siempre que sea posible, utilize una fuente estándar (Garamond, Arial, Calibri) 
<br></br>
3️⃣ Diseña tu CV en una sola columna: los ATS modernos son mejores para escanear diseños de varias columnas, pero hay varios ATS que fallan al leer currículos de varias columnas de la forma en que se esperaría.
<br></br>
4️⃣ No incluyas tablas: las tablas rara vez se analizan correctamente. Usa alineaciones derecha/izquierda para estructurar su currículum.
<br></br>
5️⃣ No mandes to CV escaneados, o con imágenes o diagramas: el texto de tu currículum debe ser resaltable y legible. Evita el uso de imágenes, diagramas y gráficos en tu currículum
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
              Share Tip
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Cvtips;
