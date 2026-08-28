'use client'

import { useT } from '@/lib/i18n'

const projects = [
  { id: 'ai', featured: true },
  { id: 'backend', featured: false },
  { id: 'quota', featured: false },
  { id: 'babel', featured: false },
  { id: 'algotrad', featured: false },
  { id: 'homelab', featured: false },
];

export default function Projects() {
  const t = useT()

  return (
    <main className="boot-in mx-auto min-h-screen max-w-screen-xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="mb-14 grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <p className="pixel-font mb-4 text-xs tracking-[0.18em] text-primary">{t('projects.eyebrow')}</p>
          <h1 className="text-4xl text-secondary sm:text-6xl">{t('projects.title')}</h1>
        </div>
        <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{t('projects.intro')}</p>
      </header>

      <section className="grid gap-7 lg:grid-cols-2">
        {projects.map((project) => {
          const prefix = `projects.${project.id}`
          const title = t(`${prefix}.title`)
          return (
            <article
              key={project.id}
              className={`pixel-card flex flex-col p-6 sm:p-8 ${project.featured ? 'border-primary bg-primary/10 lg:col-span-2 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-12' : ''}`}
            >
              <div>
                <p className="mb-4 text-xs font-semibold tracking-wider text-primary">{t(`${prefix}.label`)}</p>
                <h2 className="mb-5 text-2xl text-secondary sm:text-3xl">{title}</h2>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm leading-7 sm:text-base">{t(`${prefix}.description`)}</p>
                <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${title} ${t('projects.technologies')}`}>
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="border-2 border-border bg-background px-3 py-2 text-xs text-muted-foreground">
                      {t(`${prefix}.stack${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  );
}
