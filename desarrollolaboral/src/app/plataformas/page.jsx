import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Plataformas() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plataformas para buscar tu proximo trabajo</h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover job opportunities on various platforms.
          </p>
        </div>
        <div
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mt-8">
          <Card>
            <CardHeader>
              <img
                alt="LinkedIn Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>LinkedIn</CardTitle>
              <CardDescription>Connect with professionals and find opportunities.</CardDescription>
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
                src="/placeholder.svg"
                width="140" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Indeed</CardTitle>
              <CardDescription>Discover jobs from all sectors and industries.</CardDescription>
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
                src="/placeholder.svg"
                width="140" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Glassdoor</CardTitle>
              <CardDescription>Find jobs and get insights about companies.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="link">Learn more</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt="Monster Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>Monster</CardTitle>
              <CardDescription>Explore jobs worldwide and boost your career.</CardDescription>
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
