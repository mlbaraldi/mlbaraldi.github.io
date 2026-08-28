'use client'

import { useT } from '@/lib/i18n'

export default function Timeline() {
  const t = useT()

  return (
    <main className="boot-in mx-auto min-h-screen max-w-5xl px-5 py-14 sm:px-10 sm:py-20">
      <header className="mb-14 max-w-3xl">
        <p className="pixel-font mb-4 text-xs tracking-[0.18em] text-primary">{t('timeline.eyebrow')}</p>
        <h1 className="text-3xl text-secondary sm:text-5xl">{t('timeline.title')}</h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">{t('timeline.intro')}</p>
      </header>

      <div className="relative space-y-7 border-l-4 border-border pl-6 sm:pl-10">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <article
            key={item}
            className={`pixel-card relative p-5 before:absolute before:-left-[38px] before:top-8 before:h-4 before:w-4 sm:p-7 sm:before:-left-[54px] ${index % 2 === 0 ? 'before:bg-primary' : 'before:bg-accent sm:ml-8 sm:before:-left-[86px]'}`}
          >
            <p className="mb-3 text-xs font-semibold tracking-wider text-primary">{t(`timeline.${item}.period`)}</p>
            <h2 className="mb-4 text-xl text-secondary sm:text-2xl">{t(`timeline.${item}.title`)}</h2>
            <p className="text-sm leading-7 sm:text-base">{t(`timeline.${item}.text`)}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
