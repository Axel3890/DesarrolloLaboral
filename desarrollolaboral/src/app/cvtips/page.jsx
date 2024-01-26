
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

function Cvtips() {
  return (
    (<div
      className="justify-center items-center m-auto h-auto">
      <h1 className="text-4xl font-bold text-center mb-8">CV Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Tip 1</CardTitle>
            <CardDescription>This is a tip about how to enhance your CV.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the content of the tip. It should include details about how to enhance your CV.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
                <Button className="w-full" type="submit">
                  Share Tip
                </Button>
              </div>
            </form>
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
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Tip 2</CardTitle>
            <CardDescription>This is another tip about how to enhance your CV.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the content of the tip. It should include details about how to enhance your CV.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
                <Button className="w-full" type="submit">
                  Share Tip
                </Button>
              </div>
            </form>
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
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Tip 3</CardTitle>
            <CardDescription>This is yet another tip about how to enhance your CV.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the content of the tip. It should include details about how to enhance your CV.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
                <Button className="w-full" type="submit">
                  Share Tip
                </Button>
              </div>
            </form>
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
    </div>)
  );
}

export default Cvtips;
