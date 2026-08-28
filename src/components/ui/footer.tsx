'use client'

import { useT } from "@/lib/i18n";
import { Mail } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer() {
  const t = useT()
  return (
      <footer className='sticky top-[100vh] z-20 mt-16 w-full border-t-4 border-secondary bg-background p-4'>
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm text-muted-foreground">{t('footer.location')} · (44) 99999-6123</p>
            <a className="flex items-center hover:text-primary" href="mailto:mlbaraldi@hotmail.com">
              <Mail className="h-4 w-4 text-primary" />
              <span className="ml-2 text-sm">mlbaraldi@hotmail.com</span>
            </a>
          </div>
        </MaxWidthWrapper>
      </footer>
  )
}
