'use client'

import Terminal from "@/components/ui/terminal";
import { useT } from "@/lib/i18n";
import Image from "next/image";

const skillGroups = [
  ['home.skills.languages', 'home.skills.languagesItems'],
  ['home.skills.frontend', 'home.skills.frontendItems'],
  ['home.skills.backend', 'home.skills.backendItems'],
  ['home.skills.apis', 'home.skills.apisItems'],
  ['home.skills.cloud', 'home.skills.cloudItems'],
  ['home.skills.data', 'home.skills.dataItems'],
];

export default function Home() {
  const t = useT()

  return (
    <main className="mx-auto min-h-[calc(100vh-4rem)] w-full max-w-screen-xl px-5 py-12 sm:px-8 lg:py-20">
      <div className="boot-in">
        <p className="pixel-font mb-7 text-xs uppercase tracking-[0.18em] text-primary sm:text-sm">
          {t('home.eyebrow')}
        </p>

        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.4fr] lg:gap-20">
          <section className="relative flex flex-col items-center lg:items-start">
            <span className="screen-label mb-5">{t('home.profile')}</span>
            <div className="pixel-border relative bg-muted p-2">
              <span className="absolute -right-3 -top-3 h-5 w-5 bg-accent" aria-hidden="true" />
              <Image
                src="/profile.jpg"
                alt="Marcelo Luiz Baraldi"
                className="pixel-image h-52 w-44 object-cover object-top contrast-110 sm:h-64 sm:w-52"
                width={960}
                height={1280}
              />
            </div>
            <h1 className="mt-7 text-center text-2xl text-secondary lg:text-left lg:text-3xl">{t('home.name')}</h1>
            <p className="mt-3 text-center text-sm text-muted-foreground lg:text-left">{t('home.location')}</p>
            <p className="mt-1 text-center text-sm font-medium lg:text-left">{t('home.role')}</p>
          </section>

          <div className="space-y-8">
            <section className="pixel-card relative p-6 sm:p-9">
              <span className="pixel-font absolute -top-4 left-5 bg-accent px-3 py-2 text-[11px] text-accent-foreground">{t('home.about')}</span>
              <p className="text-base leading-7 sm:text-lg sm:leading-8">{t('home.bio')}</p>
            </section>

            <section className="pixel-border border-primary bg-primary/10 p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl text-primary sm:text-2xl">{t('home.aiTitle')}</h2>
                <span className="border-2 border-primary px-3 py-1 text-xs text-primary">{t('home.coreFocus')}</span>
              </div>
              <p className="text-base leading-7 sm:text-lg">{t('home.aiText')}</p>
            </section>
          </div>
        </div>

        <section className="mt-20">
          <div className="mb-7 flex items-center gap-4">
            <h2 className="text-2xl text-secondary sm:text-3xl">{t('home.stack')}</h2>
            <span className="h-1 flex-1 bg-border" aria-hidden="true" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(([label, items]) => (
              <article key={label} className="border-2 border-border bg-card p-5 shadow-[4px_4px_0_hsl(var(--border))]">
                <h3 className="mb-3 text-base text-primary">{t(label)}</h3>
                <p className="text-sm leading-6 text-card-foreground">{t(items)}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">{t('home.skills.more')}</p>
        </section>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="flex w-full items-center justify-center lg:order-2"><Terminal /></div>
          <div className="relative mx-auto flex flex-col items-center lg:order-1">
            <div className="absolute -inset-4 border-2 border-dashed border-secondary" aria-hidden="true" />
            <Image
              className="pixel-image relative h-auto w-48 opacity-90 sm:w-64"
              src="/testcoder.png"
              alt={t('home.artAlt')}
              width={300}
              height={450}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
