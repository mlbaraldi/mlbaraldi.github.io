import { GithubIcon, LineChartIcon, LinkedinIcon, Terminal } from "lucide-react";
import Link from "next/link";
import BaseIcon from "../BaseIcon";
import Hamburger from "./Hamburger";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ThemeSwitcher from "./ThemeSwitcher";
import { buttonVariants } from "./button";

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b backdrop-blur-lg transition-all '>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between h-14 border-b '>
          <BaseIcon />
          <div className='hidden items-center space-x-20 xl:flex'>
            <Link className={buttonVariants({
              variant: 'ghost',
              size: 'sm'
            })} href='/works' passHref>
              <Terminal />
              <p className="p-2">Works</p>
            </Link>
            <Link
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })} href='/timeline' passHref>
              <LineChartIcon className='ml-1.5 h-5 w-5' />
              <p className="p-2">Timeline</p>
            </Link>
            <Link
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })} href='https://www.linkedin.com/in/mlbaraldi' passHref>
              <LinkedinIcon className='ml-1.5 h-5 w-5' />
              <p className="p-2">Linkedin</p>
            </Link>
            <Link
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })} href='https://github.com/mlbaraldi' passHref>
              <GithubIcon className='ml-1.5 h-5 w-5' />
              <p className="p-2">Github</p>
            </Link>
          </div>

          {/* Theme switcher for all screens */}
          <div className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
          })} >
            <ThemeSwitcher />
          </div>
          <div className='mr-10 xl:hidden'>
            <Hamburger />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};


export default Navbar;
