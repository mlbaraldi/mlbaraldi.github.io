'use client'

import { useT } from "@/lib/i18n";
import { GithubIcon, LineChartIcon, LinkedinIcon, Terminal } from "lucide-react";
import Link from "next/link";
import BaseIcon from "../BaseIcon";
import Hamburger from "./Hamburger";
import LanguageSwitcher from "./LanguageSwitcher";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ThemeSwitcher from "./ThemeSwitcher";
import { buttonVariants } from "./button";

const Navbar = () => {
  const t = useT()
  const components = [
    { title: t('nav.projects'), href: '/works', description: t('nav.projectsDescription'), icon: <Terminal className='ml-1.5 h-5 w-5' /> },
    { title: t('nav.timeline'), href: '/timeline', description: t('nav.timelineDescription'), icon: <LineChartIcon className='ml-1.5 h-5 w-5' /> },
    { title: t('nav.linkedin'), href: 'https://www.linkedin.com/in/mlbaraldi', description: t('nav.linkedinDescription'), icon: <LinkedinIcon className='ml-1.5 h-5 w-5' /> },
    { title: t('nav.github'), href: 'https://github.com/mlbaraldi', description: t('nav.githubDescription'), icon: <GithubIcon className='ml-1.5 h-5 w-5' /> },
  ]

  return (
    <nav className='sticky inset-x-0 top-0 z-30 w-full border-b-4 border-primary bg-background/95'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          <BaseIcon />
          <div className='hidden items-center lg:flex'>
            <ul className="flex items-center gap-2">
              {components.map((component) => (
                <li key={component.href}>
                  <Link
                    title={component.description}
                    href={component.href}
                    className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                  >
                    {component.icon}
                    <p className="pl-2">{component.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-auto flex items-center gap-2 lg:ml-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <div className='ml-2 lg:hidden'>
            <Hamburger />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
