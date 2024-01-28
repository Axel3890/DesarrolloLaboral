
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"

export default function Tecnologias() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Popular JavaScript Frameworks</h1>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <ComponentIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>React</CardTitle>
                <CardDescription>A JavaScript library for building user interfaces.</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <ViewIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Vue.js</CardTitle>
                <CardDescription>The Progressive JavaScript Framework.</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <AngryIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Angular</CardTitle>
                <CardDescription>One framework. Mobile & desktop.</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>)
  );
}


function ComponentIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>)
  );
}


function ViewIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 0-2 2z" />
      <path d="M21 17v2a2 2 0 1-2 2H5a2 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0-2-2H5a2 0-2 2v2" />
    </svg>)
  );
}


function AngryIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <path d="M7.5 8 10 9" />
      <path d="m14 9 2.5-1" />
      <path d="M9 10h0" />
      <path d="M15 10h0" />
    </svg>)
  );
}
