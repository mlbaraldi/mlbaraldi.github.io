import Link from "next/link";
import { PropsWithChildren } from "react";
import { buttonVariants } from "./ui/button";

const Logobox = ({ children }: PropsWithChildren) => {
  return (
    <div className='inline-flex h-14 items-center justify-center gap-3 px-2 font-bold leading-5'>
      {children}
    </div>
  )
}

const BaseIcon = () => {
  return (
    <Link className={buttonVariants({
      variant: 'navbox',
      size: 'sm'
    })} href="/">
      <Logobox>
        <svg aria-label="Code mark" viewBox="0 0 28 24" className="h-7 w-8 text-primary" shapeRendering="crispEdges">
          <path fill="currentColor" d="M6 5h3v3H6v3H3v2h3v3h3v3H6v-2H3v-2H0V9h3V7h3V5Zm16 0h-3v3h3v3h3v2h-3v3h-3v3h3v-2h3v-2h3V9h-3V7h-3V5ZM15 3h3l-5 18h-3l5-18Z" />
        </svg>
        <h2 className="pixel-font z-40 text-[11px] tracking-wider">dev.mlb</h2>
      </Logobox>

    </Link>
  )
}


export default BaseIcon
