import { GithubIcon, LineChartIcon, LinkedinIcon, Terminal } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import BaseIcon from "../BaseIcon";
import Hamburger from "./Hamburger";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ThemeSwitcher from "./ThemeSwitcher";
import { buttonVariants } from "./button";

const components: { title: string; href: string; description: string, icon: ReactNode }[] = [
  {
    title: "Works",
    href: "/works",
    description:
      "Let me show you some stuff.",
    icon: <Terminal className='ml-1.5 h-5 w-5' />
  },
  {
    title: "Timeline",
    href: "/timeline",
    description:
      "What was I up to.",
    icon: <LineChartIcon className='ml-1.5 h-5 w-5' />
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/mlbaraldi",
    description:
      "My Linkedin page.",
    icon: <LinkedinIcon className='ml-1.5 h-5 w-5' />
  },
  {
    title: "GitHub",
    href: "https://github.com/mlbaraldi",
    description:
      "My github page.",
    icon: <GithubIcon className='ml-1.5 h-5 w-5' />
  }
]

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b backdrop-blur-lg transition-all '>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between h-14 border-b '>
          <BaseIcon />
          <div className='hidden items-center space-x-20 xl:flex'>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] ">
              {components.map((component) => (
                <li key={component.title}>
                  <Link
                    title={component.description}
                    href={component.href}
                    passHref
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm'
                    })}
                  >
                    {component.icon}
                    <p className="p-2">{component.title}</p>

                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme switcher for all screens */}
          <div className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
          })} >
            <ThemeSwitcher />
          </div>
          <div className='mr-10 ml-10 xl:hidden'>
            <Hamburger />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};


export default Navbar;
