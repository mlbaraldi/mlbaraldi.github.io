import Terminal from "@/components/ui/terminal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-2 min-h-screen flex items-center flex-col">
      <div className="max-w-screen-lg p-8">
        {/* Avatar and Introduction Section */}
        <div className="gap-5 items-center flex flex-col lg:flex-row" >

          {/* Avatar section */}
          <div className="flex flex-col items-center w-full lg:w-1/4 lg:order-1 m-5">
            <Image
              src="/myself.png"
              alt="Profile image"
              className="rounded-full w-40 h-40 object-cover opacity-90"
              width={40}
              height={40}
            />
            <h2 className="text-xl md:text-3xl font-bold p-auto mt-4">
              Marcelo Baraldi
            </h2>
            <p className="p-1 text-center">
              Dev - Digital Enthusiast
            </p>
            <p className="text-center">
              analyze - think - develop
            </p>
          </div>

          {/* Introduction section */}
          <div className="items-center justify-center w-full lg:w-1/2 rounded-2xl p-4 mt-5 lg:ml-5 order-2" >
            <p className="text-justify font-medium leading-loose ">
              I&apos;m Marcelo Baraldi, a budding fullstack developer from Brazil. Currently,
              I&apos;m immersed in the world of web development, learning and working with technologies such as Next.js, React,
              Node.js, TypeScript, Tailwind CSS, and even a bit of Delphi. Excited about the endless possibilities of coding
              and eager to grow in this field.
              <br />
              When not online, I really love to travel and experience new things.
            </p>
          </div>
        </div>
        {/* Image and Terminal Section */}
        <div className="gap-5 items-center flex flex-col lg:flex-row ">
          {/* Terminal section */}
          <div className="flex items-center justify-center w-full md:w-1/2  rounded-2xl p-4 mt-5 md:ml-5 lg:order-2" >
            <Terminal />
          </div>
          {/* Image section */}
          <div className="flex flex-col items-center h-25 w-full lg:w-1/4  m-5 lg:order-1">
            <Image
              className="mx-auto w-auto h-auto rounded-full overflow-hidden mt-4"
              src="/testcoder.png"
              alt="logo"
              width={300}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
