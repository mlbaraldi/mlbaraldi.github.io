'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { dict, Lang } from './dict'

type LanguageContextValue = [Lang, (_lang: Lang) => void]

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'pt') setLang(saved)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem('lang', lang)
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    }
  }, [hydrated, lang])

  return (
    <LanguageContext.Provider value={[lang, setLang]}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLang must be used within LanguageProvider')
  return context
}

export function useT() {
  const [lang] = useLang()
  return (key: string) => dict[lang][key] ?? dict.en[key] ?? key
}
