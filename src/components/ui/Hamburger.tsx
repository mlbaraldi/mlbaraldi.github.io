import { GithubIcon, LineChartIcon, LinkedinIcon, MenuIcon, Terminal } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "./button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"

const Hamburger = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><MenuIcon /></NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Link className={buttonVariants({
                variant: 'ghost',
                size: 'sm'
              })} href='/works' passHref>
                <Terminal />
                <p className="p-2">Works</p>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Link
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })} href='/timeline' passHref>
                <LineChartIcon className='ml-1.4 h-4 w-4' />
                <p className="p-2">Timeline</p>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Link
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })} href='https://www.linkedin.com/in/mlbaraldi' passHref>
                <LinkedinIcon className='ml-1.5 h-4 w-4' />
                <p className="p-2">Linkedin</p>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Link
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })} href='https://github.com/mlbaraldi' passHref>
                <GithubIcon className='ml-1.5 h-4 w-4' />
                <p className="p-2">Github</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu >
  )
}

export default Hamburger


