import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Entrevistas() {
  return (<>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tips Entrevistas</h2>
            <p
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Essential tips to ace your next interview.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Preguntas tipicas de entrevistas</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Prepare for common interview questions like "Tell me about yourself", "Why should we hire you?", "What
                are your strengths and weaknesses?", and "Where do you see yourself in 5 years?".
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Preguntas de tecnologias</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Maintain eye contact, use hand gestures to emphasize points, sit up straight, and remember to smile.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Estrategia de preparacion</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Research the company, understand the job description, prepare thoughtful questions, and practice your
                responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plataformas de practica</h2>
            <p
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Utiliza estas plataformas para practicar tus entrevistas.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <Card>
              <CardHeader>
                <CardTitle>LeetCode</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4 p-4">
                <img
                  alt="LeetCode Logo"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="70" />
                <p className="text-gray-500 dark:text-gray-400">
                  Practice coding problems ranging from easy to hard. Frequently used for tech job interview
                  preparation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pramp</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4 p-4">
                <img
                  alt="Pramp Logo"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="70" />
                <p className="text-gray-500 dark:text-gray-400">
                  Free mock interviews for software engineers. Questions are based on real interviews in the tech
                  industry.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Interviewing.io</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4 p-4">
                <img
                  alt="Interviewing.io Logo"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="70" />
                <p className="text-gray-500 dark:text-gray-400">
                  Anonymous technical interview practice with engineers from Google, Facebook, and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </>);
}
