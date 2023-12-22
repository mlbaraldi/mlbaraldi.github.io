import { Mail } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer() {
  return (
    <>
      <footer className='sticky p-4 top-0 w-full  bg-black dark:bg-opacity-40 bg-opacity-10 border-b backdrop-blur-lg transition-all '>
        <MaxWidthWrapper>
          <div className="flex flex-row items-center justify-center">
            <Mail />
            <p className="ml-2 text-sm font-light">mlbaraldi@hotmail.com</p>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  )
}