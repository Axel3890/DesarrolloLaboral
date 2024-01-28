
import { Button } from "@/components/ui/button"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function Pregutastipicas() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Common Interview Questions</h2>
          <p
            className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some common interview questions and how to answer them.
          </p>
          <Collapsible className="space-y-2">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left" size="sm" variant="ghost">
                Tell me about yourself
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <p>
                This is a common opening question in interviews. The best way to answer it is to give a brief overview
                of your career, skills, and interests. Focus on aspects that are relevant to the job you're applying
                for.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left" size="sm" variant="ghost">
                What are your strengths and weaknesses?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <p>
                When discussing your strengths, focus on those that are most relevant to the job. When discussing
                weaknesses, it's important to show self-awareness and a willingness to improve.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left" size="sm" variant="ghost">
                Why do you want to work here?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <p>
                This question gives you an opportunity to show that you've done your research on the company and are
                excited about the opportunity. Be specific about what attracts you to the company and role.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="space-y-2">
            <CollapsibleTrigger asChild>
              <Button className="w-full text-left" size="sm" variant="ghost">
                Where do you see yourself in 5 years?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <p>
                Interviewers ask this question to see if your long-term goals align with the company's. It's okay if
                you're not sure, but try to give an answer that shows you're excited about the role and open to future
                possibilities.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>)
  );
}