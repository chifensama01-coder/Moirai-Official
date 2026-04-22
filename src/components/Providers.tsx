'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// Theme Context
type Theme = 'light' | 'dark' | 'system'
interface ThemeContextProps { theme: Theme; setTheme: (theme: Theme) => void; resolvedTheme: 'light' | 'dark' }

const ThemeContext = createContext<ThemeContextProps>({ theme: 'light', setTheme: () => {}, resolvedTheme: 'light' })

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [resolvedTheme, setResolvedTheme] = useState<'light'|'dark'>('light')

  useEffect(() => {
     const stored = localStorage.getItem('theme') as Theme
     if (stored) { setTheme(stored); setResolvedTheme(stored === 'dark' ? 'dark' : 'light'); }
  }, [])

  useEffect(() => {
     localStorage.setItem('theme', theme)
     const rTheme = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme
     setResolvedTheme(rTheme)
     if (rTheme === 'dark') {
       document.documentElement.classList.add('dark')
     } else {
       document.documentElement.classList.remove('dark')
     }
     document.documentElement.setAttribute('data-theme', rTheme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>{children}</ThemeContext.Provider>
}

// Currency Context
type Currency = 'XAF' | 'USD'
interface CurrencyContextType {
  currency: Currency
  setCurrency: (c: Currency) => void
  formatPrice: (priceInXaf: number) => string
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) throw new Error('useCurrency must be used within CurrencyProvider')
  return context
}

// Recently Viewed Context
interface RecentlyViewedContextType {
  viewedItems: any[]
  addViewedItem: (item: any) => void
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined)

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext)
  if (!context) throw new Error('useRecentlyViewed must be used within RecentlyViewedProvider')
  return context
}

export function Providers({ children }: { children: React.ReactNode }) {
  // Currency Logic
  const [currency, setCurrency] = useState<Currency>('XAF')
  
  useEffect(() => {
    const saved = localStorage.getItem('moirai_currency') as Currency
    if (saved === 'USD' || saved === 'XAF') {
      setCurrency(saved)
    }
  }, [])

  const handleSetCurrency = (c: Currency) => {
    setCurrency(c)
    localStorage.setItem('moirai_currency', c)
  }

  const formatPrice = (priceInXaf: number) => {
    if (currency === 'USD') {
      const priceUsd = Math.ceil(priceInXaf / 600) // approx conversion
      return `$${priceUsd.toLocaleString()}`
    }
    return `${priceInXaf.toLocaleString()} FCFA`
  }

  // Recently Viewed Logic
  const [viewedItems, setViewedItems] = useState<any[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('moirai_recently_viewed')
    if (saved) {
      try {
        setViewedItems(JSON.parse(saved))
      } catch (e) {
        // ignore format errors
      }
    }
  }, [])

  const addViewedItem = (item: any) => {
    setViewedItems(prev => {
      const exists = prev.find(p => p._id === item._id)
      if (exists) return prev
      const newItems = [item, ...prev].slice(0, 4) // keep last 4
      localStorage.setItem('moirai_recently_viewed', JSON.stringify(newItems))
      return newItems
    })
  }

  return (
    <ThemeProvider>
      <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, formatPrice }}>
        <RecentlyViewedContext.Provider value={{ viewedItems, addViewedItem }}>
          {children}
        </RecentlyViewedContext.Provider>
      </CurrencyContext.Provider>
    </ThemeProvider>
  )
}
