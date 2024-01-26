import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <div className="justify-center items-center m-auto h-auto">
      <section key="1" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome to our website
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                We provide high quality services for your business. Our team of
                experts are dedicated to delivering exceptional results. We work
                closely with our clients to understand their needs and provide
                tailored solutions. We are committed to excellence and strive to
                exceed expectations. Join us today and experience the
                difference.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
