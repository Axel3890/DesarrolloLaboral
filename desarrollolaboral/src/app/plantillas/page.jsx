"use client"
import React from 'react'
import Link from "next/link"
import Image from 'next/image'


export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-green">Plantillas CV</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Plantillas de CV aptas para filtros ATS
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="card rounded-lg shadow-lg bg-custom-white">
            <Image
              alt="Resume Template 1"
              className="w-full h-48 object-cover"
              height="700"
              src="/atsresume.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Professional</h3>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-custom-green shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-custom-green dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-4"
                href="/cvs/ATS-resume.docx" download="Curriculum"
              >
                Download
              </a>
            </div>
          </div>
          <div className="card rounded-lg shadow-lg overflow-hidden bg-custom-white">
            <img
              alt="Resume Template 2"
              className="w-full h-48 object-cover"
              height="200"
              src="/ATS-resume2.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Creative</h3>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-custom-green dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-4"
                href="/cvs/ATS-resume2.docx" download="Curriculum"
              >
                Download
              </a>
            </div>
          </div>
          <div className="card rounded-lg shadow-lg overflow-hidden bg-custom-white">
            <img
              alt="Resume Template 3"
              className="w-full h-48 object-cover"
              height="200"
              src="/ATS-resume3.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Modern</h3>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-custom-green dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-4"
                href="/cvs/ATS-resume3.docx" download="Curriculum"
              >
                Download
              </a>
            </div>
          </div>
          <div className="card rounded-lg shadow-lg overflow-hidden bg-custom-white">
            <img
              alt="Resume Template 2"
              className="w-full h-48 object-cover"
              height="200"
              src="/ATS-resume4.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Creative</h3>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-custom-green dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-4"
                href="/cvs/ATS-resume4.docx" download="Curriculum"
              >
                Download
              </a>
            </div>
          </div>
          <div className="card rounded-lg shadow-lg overflow-hidden bg-custom-white">
            <img
              alt="Resume Template 2"
              className="w-full h-48 object-cover"
              height="200"
              src="/ATS-resume5.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Creative</h3>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-custom-green dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-4"
                href="/cvs/ATS-resume5.docx" download="Curriculum"
              >
                Download
              </a>
            </div>
          </div>
          <div className="card rounded-lg shadow-lg overflow-hidden bg-custom-white">
            <img
              alt="Resume Template 2"
              className="w-full h-48 object-cover"
              height="200"
              src="/ATS-resume6.png"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Creative</h3>
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-custom-green dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-4"
                href="/cvs/ATS-resume6.docx" download="Curriculum"
              >
                Download
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
};
