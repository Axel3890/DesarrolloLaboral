import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Plataformas() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plataformas para buscar tu proximo trabajo</h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Descubre tu proximo empleo en estas plataformas
          </p>
        </div>
        <div
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-8">
          <Card>
            <CardHeader>
              <img
                alt="LinkedIn Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center re"
                height="70"
                src="/icons/trabajos/linkedin.png"
                width="140" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>LinkedIn</CardTitle>
              <CardDescription>Puedes buscar empleos, conectar con reclutadores y profesionales del sector, y también mejorar tu perfil para destacar tus habilidades y experiencia.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="link">Learn more</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt="Indeed Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/icons/trabajos/indeed.png"
                width="140" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Indeed</CardTitle>
              <CardDescription>Recopila listados de empleo de varias fuentes, incluyendo sitios web de empresas y agencias de reclutamiento. Tiene una amplia gama de oportunidades en el campo de IT.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="link">Learn more</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt="Glassdoor Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/icons/trabajos/glassdoor.png"
                width="140" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Glassdoor</CardTitle>
              <CardDescription>No solo ofrece listados de empleo, sino también reseñas de empresas, salarios y entrevistas. Puedes obtener una visión interna de las empresas y sus culturas antes de postularte.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="link">Learn more</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt="computrabajo Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/icons/trabajos/computrabajo.png"
                width="140" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Computrabajos</CardTitle>
              <CardDescription>Busca trabajo en Argentina? Computrabajo es la bolsa de empleo líder y con mas ofertas de trabajo de Argentina.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="link">Learn more</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>)
  );
}
