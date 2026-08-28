'use client'

import { useLang, useT } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const [lang, setLang] = useLang()
  const t = useT()

  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
      aria-label={t('language.label')}
      title={t('language.label')}
      className="pixel-font h-10 border-2 border-border bg-background px-2 text-[9px] shadow-[3px_3px_0_hsl(var(--border))] hover:border-primary active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      <span className={lang === 'pt' ? 'text-primary' : 'text-muted-foreground'}>PT</span>
      <span className="px-1 text-border">|</span>
      <span className={lang === 'en' ? 'text-primary' : 'text-muted-foreground'}>EN</span>
    </button>
  )
}
