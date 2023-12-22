import Terminal from "@/components/ui/terminal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-20 grid place-items-centerh-screen">
      <div>
        <div className="grid grid-cols-2 items-center">
          <Image
            className="mx-auto w-50 h-45 rounded-full overflow-hidden"
            src="/testcoder.png"
            alt="logo"
            width={300}
            height={450}
          />
          <Terminal />
          <div className="flex flex-col items-center p-10 m-5 ">
            <div className="inline-block w-40 h-40 rounded-full overflow-hidden">
              <Image
                src="/myself.png"
                alt="Profile image"
                className="rounded-full w-40 h-40 object-cover opacity-90 " width={40}
                height={40}
              />
            </div>
            <h2 className="text-3xl font-bold p-5 bg-black bg-opacity-25 rounded-3xl">Marcelo Baraldi</h2>
            <p className="p-3">Digital Enthusiast // analyze - think - develop</p>
          </div>
          <div className='flex items-center justify-center h-[300px] w-[500px] bg-gray-900 rounded-2xl p-4 bg-opacity-80'>
            <p className='text-center font-medium leading-loose text-white'>
              I&apos;m Marcelo Baraldi, a budding full-stack developer from Brazil. Currently,
              I&apos;m immersed in the world of web development, learning and working with technologies such as Next.js, React, Node.js,
              TypeScript, Tailwind CSS, and even a bit of Delphi. Excited about the endless possibilities of coding and eager to grow in this field.
              <br />
              When not online, I really love to travel and experience new things.
            </p>
          </div>


        </div>

      </div>
    </div >
  );
}
