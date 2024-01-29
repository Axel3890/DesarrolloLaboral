export default function Component() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-custom-green">
                Preparate para la entrevista
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-custom-white">
              Prepararse para una entrevista es esencial porque demuestra tu interés y compromiso con el trabajo y la empresa, te permite destacar tus habilidades y experiencias relevantes de manera efectiva.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2 text-left">
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-custom-green" />
                <p className="text-lg font-medium text-custom-white">Investigación de la empresa</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-custom-green" />
                <p className="text-lg font-medium text-custom-white">Repasa tu currículum y la oferta de trabajo</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-custom-green" />
                <p className="text-lg font-medium text-custom-white">Practica respuestas a preguntas comunes de entrevistas</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-custom-green" />
                <p className="text-lg font-medium text-custom-white">Prepara preguntas para el entrevistador</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-custom-green" />
                <p className="text-lg font-medium text-custom-white">Prepara ejemplos concretos</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-custom-green" />
                <p className="text-lg font-medium text-custom-white">Mantén la calma y confianza</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function CheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }