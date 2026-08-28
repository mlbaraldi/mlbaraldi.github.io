'use client'

import { useT } from "@/lib/i18n"
import { GithubIcon, LineChartIcon, LinkedinIcon, MenuIcon, Terminal } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "./button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"

const Hamburger = () => {
  const t = useT()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="border-2 border-primary shadow-[3px_3px_0_hsl(var(--primary))]" aria-label={t('nav.openMenu')}><MenuIcon /></NavigationMenuTrigger>
          <NavigationMenuContent className="flex w-[190px] flex-col gap-1 bg-popover p-3">
            <NavigationMenuLink>
              <Link className={buttonVariants({
                variant: 'ghost',
                size: 'sm'
              })} href='/works' passHref>
                <Terminal />
                <p className="p-2">{t('nav.projects')}</p>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Link
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })} href='/timeline' passHref>
                <LineChartIcon className='ml-1.5 h-4 w-4' />
                <p className="p-2">{t('nav.timeline')}</p>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Link
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })} href='https://www.linkedin.com/in/mlbaraldi' passHref>
                <LinkedinIcon className='ml-1.5 h-4 w-4' />
                <p className="p-2">{t('nav.linkedin')}</p>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Link
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })} href='https://github.com/mlbaraldi' passHref>
                <GithubIcon className='ml-1.5 h-4 w-4' />
                <p className="p-2">{t('nav.github')}</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu >
  )
}

export default Hamburger
