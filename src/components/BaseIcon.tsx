import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { buttonVariants } from "./ui/button";

const Logobox = ({ children }: PropsWithChildren) => {
  return (
    <div className='items-center justify-center h-14 font-bold text-lg inline-flex p-10 leading-5 transform-gpu'>
      {children}
    </div>
  )
}

const BaseIcon = () => {
  const baseIcon = "/baseicon.png"
  return (
    <Link className={buttonVariants({
      variant: 'navbox',
      size: 'sm'
    })} href="/">
      <Logobox>
        <Image src={baseIcon} alt="logo" width={20} height={20} />
        <h2 className="p-4 flex z-40 font-bold tracking-wider">dev.mlb</h2>
      </Logobox>

    </Link>
  )
}


export default BaseIcon