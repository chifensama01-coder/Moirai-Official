'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './Providers'

const Sun = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const Moon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;

const LEFT_LINKS = [
  { href: '/collections', label: 'Collections' },
  { href: '/shop', label: 'Shop' },
  { href: '/bespoke', label: 'Bespoke' },
]
const RIGHT_LINKS = [
  { href: '/blog', label: 'Journal' },
  { href: '/fashion-school', label: 'Fashion School' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]
const ALL_LINKS = [
  ...LEFT_LINKS,
  ...RIGHT_LINKS,
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Nav bar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'var(--bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: 'blur(24px)',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Left links */}
        <div style={{ display: 'flex', gap: '2rem', flex: 1 }} className="desk-nav">
          {LEFT_LINKS.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
            >
              <Link
                href={l.href}
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', transition: 'color 0.2s', display: 'block', position: 'relative' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >{l.label}</Link>
            </motion.div>
          ))}
        </div>

        {/* Center logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
        >
          <Link href="/" style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: '1.7rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              background: 'linear-gradient(135deg, var(--text) 0%, var(--accent-soft) 40%, var(--accent) 80%, var(--accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
            }}>Moirai.</span>
            <span style={{ display: 'block', fontSize: '6.5px', letterSpacing: '0.45em', color: 'var(--accent)', textTransform: 'uppercase', opacity: 0.75, marginTop: '3px' }}>
              The House of Moirai
            </span>
          </Link>
        </motion.div>

        {/* Right links */}
        <div style={{ display: 'flex', gap: '2rem', flex: 1, justifyContent: 'flex-end' }} className="desk-nav">
          {RIGHT_LINKS.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
            >
              <Link
                href={l.href}
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', transition: 'color 0.2s', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >{l.label}</Link>
            </motion.div>
          ))}
          {mounted && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', marginLeft: '1rem', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </motion.button>
          )}
        </div>

        {/* Mobile burger */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="burger-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ display: 'none', flexDirection: 'column', gap: '5px', zIndex: 1001, cursor: 'pointer' }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: 24, height: 1,
              background: 'var(--text)',
              display: 'block',
              transition: 'all 0.3s',
              transform: open && i === 0 ? 'rotate(45deg) translate(4px,4px)' : open && i === 2 ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </motion.button>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'var(--bg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            <Link href="/" onClick={() => setOpen(false)} style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.2em', background: 'linear-gradient(135deg, var(--text), var(--accent-soft), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Moirai.</span>
              <span style={{ display: 'block', fontSize: '8px', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase', marginTop: '4px' }}>The House of Moirai</span>
            </Link>
            {ALL_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 400, color: 'var(--text)', letterSpacing: '0.05em', transition: 'color 0.2s', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                >{l.label}</Link>
              </motion.div>
            ))}
            {/* Theme Toggle Mobile */}
            {mounted && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                  // Optionally close menu after toggle: setOpen(false)
                }}
                style={{ marginTop: '1rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', fontSize: '1.2rem', padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '4px', background: 'transparent', cursor: 'pointer' }}
              >
                {theme === 'dark' ? <><Sun /> Light Mode</> : <><Moon /> Dark Mode</>}
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 960px) {
          .desk-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
