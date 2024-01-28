
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function Viewquestions() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <div
                className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md cursor-pointer dark:bg-gray-800">
                <h3 className="text-lg font-medium">What is the technology?</h3>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
                The technology is a revolutionary tool that helps in...
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <div
                className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md cursor-pointer dark:bg-gray-800">
                <h3 className="text-lg font-medium">How does it work?</h3>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 py-2 text-gray-500 dark:text-gray-400">It works by leveraging the power of...</div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <div
                className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md cursor-pointer dark:bg-gray-800">
                <h3 className="text-lg font-medium">What are the benefits?</h3>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
                The benefits include improved efficiency, cost savings...
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>)
  );
}


function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6-6" />
    </svg>)
  );
}
