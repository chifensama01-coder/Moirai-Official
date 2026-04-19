'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const LEFT_LINKS = [
  { href: '/collections', label: 'Collections' },
  { href: '/shop', label: 'Shop' },
  { href: '/bespoke', label: 'Bespoke' },
]
const RIGHT_LINKS = [
  { href: '/fashion-school', label: 'Fashion School' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]
const ALL_LINKS = [
  ...LEFT_LINKS,
  ...RIGHT_LINKS,
  { href: '/blog', label: 'Journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
          background: scrolled ? 'rgba(5,4,7,0.98)' : 'rgba(5,4,7,0.5)',
          borderBottom: scrolled ? '1px solid #2a2133' : '1px solid transparent',
          backdropFilter: 'blur(16px)',
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
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A6B8A', transition: 'color 0.2s', display: 'block', position: 'relative' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C77DFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#7A6B8A')}
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
              background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 40%, #9B5DE5 80%, #6B3FA0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
            }}>Moirai.</span>
            <span style={{ display: 'block', fontSize: '6.5px', letterSpacing: '0.45em', color: '#9B5DE5', textTransform: 'uppercase', opacity: 0.75, marginTop: '3px' }}>
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
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A6B8A', transition: 'color 0.2s', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C77DFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#7A6B8A')}
              >{l.label}</Link>
            </motion.div>
          ))}
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
              background: '#F0EBF8',
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
              background: 'linear-gradient(160deg, #050407 0%, #130f18 60%, #1e1826 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            <Link href="/" onClick={() => setOpen(false)} style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.2em', background: 'linear-gradient(135deg, #FAFAFA, #E0AAFF, #9B5DE5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Moirai.</span>
              <span style={{ display: 'block', fontSize: '8px', letterSpacing: '0.4em', color: '#9B5DE5', textTransform: 'uppercase', marginTop: '4px' }}>The House of Moirai</span>
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
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 400, color: '#F0EBF8', letterSpacing: '0.05em', transition: 'color 0.2s', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C77DFF')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#F0EBF8')}
                >{l.label}</Link>
              </motion.div>
            ))}
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
