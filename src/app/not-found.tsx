'use client'

import { buttonVariants } from "@/components/ui/button"
import { useT } from '@/lib/i18n'
import Link from "next/link"

const NotFound = () => {
  const t = useT()

  return (
    <main className="boot-in mx-auto flex min-h-[75vh] max-w-3xl items-center px-5 py-16 text-center">
      <section className="pixel-card w-full p-7 sm:p-12">
        <p className="pixel-font mb-7 text-sm tracking-[0.2em] text-destructive sm:text-base">{t('notFound.label')}</p>
        <div className="mx-auto mb-8 flex h-20 w-40 items-end justify-center gap-2 border-b-4 border-border" aria-hidden="true">
          <span className="h-8 w-5 bg-muted-foreground" />
          <span className="h-14 w-5 bg-secondary" />
          <span className="h-20 w-5 bg-primary" />
          <span className="h-10 w-5 bg-accent" />
        </div>
        <h1 className="text-2xl text-secondary sm:text-4xl">{t('notFound.title')}</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">{t('notFound.text')}</p>
        <div className="mt-10">
          <Link className={buttonVariants({ variant: 'default', size: 'lg' })} href='/'>
            {t('notFound.return')}
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFound
