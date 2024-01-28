export default function Component() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Interview Preparation
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Preparing for an interview is a crucial step in securing a job. Here are some tips to help you excel in
                your interview.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2 text-left">
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-green-500" />
                <p className="text-lg font-medium">Research the company</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-green-500" />
                <p className="text-lg font-medium">Practice common interview questions</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-green-500" />
                <p className="text-lg font-medium">Prepare questions to ask the interviewer</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-green-500" />
                <p className="text-lg font-medium">Dress professionally</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="h-6 w-6 text-green-500" />
                <p className="text-lg font-medium">Bring copies of your resume</p>
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