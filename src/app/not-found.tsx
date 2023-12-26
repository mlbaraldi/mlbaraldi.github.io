import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const NotFound = () => {
  return (
    <main className="text-center p-10 text-xl">
      <h2 className="text-xl md:text-3xl font-bold p-auto mt-4 p-5">
        404 - Oops. You were not supposed to be here!
      </h2>
      <h3>
        but hey, life is an adventure.</h3>
      <div className=" p-10">
        <Link
          className={buttonVariants({
            variant: 'default',
            size: 'lg',
          })} href='/' passHref>
          Return Home
        </Link>
      </div>

    </main>
  )
}


export default NotFound