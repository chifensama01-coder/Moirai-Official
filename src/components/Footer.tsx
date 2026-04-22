'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerFadeUp } from '@/lib/animations'
import { useCurrency } from './Providers'

interface FooterProps {
  settings: any
}

export default function Footer({ settings }: FooterProps) {
  const waNumber = (settings?.whatsappNumber || '237682710405').replace(/\D/g, '')
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi, I'd like to inquire about Moirai")}`
  const { currency, setCurrency } = useCurrency()
  const [email, setEmail] = useState('')

  const locationText = settings?.footerLocation || 'Made in Cameroon 🇨🇲 | Buea, Cameroon'

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', padding: '5rem 2rem 3rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        
        {/* Newsletter Section */}
        {settings?.newsletterEmail && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '5rem', padding: '3rem 2rem', background: 'var(--bg)', border: '1px solid var(--border)', textAlign: 'center' }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text)', marginBottom: '1rem' }}>Join the Inner Circle</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
              Subscribe to receive exclusive access to bespoke creations, private collections, and fashion school updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!') }} style={{ display: 'flex', gap: '0.5rem', maxWidth: 400, margin: '0 auto', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ flex: 1, padding: '0.8rem 1rem', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', outline: 'none', minWidth: '200px' }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0.8rem 1.5rem', minHeight: 'auto', flexShrink: 0 }}>
                Subscribe
              </button>
            </form>
          </motion.div>
        )}

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Brand */}
          <motion.div variants={staggerFadeUp}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--text), var(--accent-soft))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Moirai.
            </p>
            <p style={{ fontSize: '7px', letterSpacing: '0.45em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              The House of Moirai
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '12px', lineHeight: 2, fontStyle: 'italic', marginBottom: '1rem' }}>
              Not a Trend. IDENTITY.<br />Made for who you are Becoming.
            </p>
            <p style={{ color: 'var(--accent)', fontSize: '10px', letterSpacing: '0.1em' }}>
              {locationText}
            </p>
          </motion.div>

          {/* Navigate */}
          <motion.div variants={staggerFadeUp}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem', fontWeight: 500 }}>Navigate</p>
            {[
              ['/', 'Home'],
              ['/collections', 'Collections'],
              ['/shop', 'Shop'],
              ['/bespoke', 'Bespoke'],
              ['/fashion-school', 'Fashion School'],
              ['/about', 'About'],
              ['/blog', 'Journal'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <div key={href} style={{ marginBottom: '0.6rem' }}>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }} style={{ display: 'inline-block' }}>
                  <Link href={href} style={{ fontSize: '12px', color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-soft)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >{label}</Link>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Settings */}
          <motion.div variants={staggerFadeUp}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem', fontWeight: 500 }}>Preferences</p>
            <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '0.5rem' }}>Currency:</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
               <button 
                 onClick={() => setCurrency('XAF')} 
                 style={{ padding: '0.3rem 0.8rem', fontSize: '10px', border: '1px solid', borderColor: currency === 'XAF' ? 'var(--accent)' : 'var(--border)', color: currency === 'XAF' ? 'var(--text)' : 'var(--muted)', background: currency === 'XAF' ? 'rgba(168, 85, 247, 0.15)' : 'transparent', cursor: 'pointer' }}
               >XAF
               </button>
               <button 
                 onClick={() => setCurrency('USD')} 
                 style={{ padding: '0.3rem 0.8rem', fontSize: '10px', border: '1px solid', borderColor: currency === 'USD' ? 'var(--accent)' : 'var(--border)', color: currency === 'USD' ? 'var(--text)' : 'var(--muted)', background: currency === 'USD' ? 'rgba(168, 85, 247, 0.15)' : 'transparent', cursor: 'pointer' }}
               >USD
               </button>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div variants={staggerFadeUp}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem', fontWeight: 500 }}>Connect</p>
            <motion.a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginBottom: '0.75rem' }} whileHover={{ color: 'var(--accent-soft)' }} transition={{ duration: 0.2 }}>
              WhatsApp: +237 682 710 405
            </motion.a>
            {settings?.email && (
              <motion.a href={`mailto:${settings.email}`} style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginBottom: '0.75rem' }} whileHover={{ color: 'var(--accent-soft)' }} transition={{ duration: 0.2 }}>{settings.email}</motion.a>
            )}
            <motion.a href="https://instagram.com/Moirai.th" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginBottom: '0.6rem' }} whileHover={{ color: 'var(--accent-soft)' }} transition={{ duration: 0.2 }}>
              Instagram: @Moirai.th
            </motion.a>
            <motion.a href="https://tiktok.com/@MOIRAI" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginBottom: '0.6rem' }} whileHover={{ color: 'var(--accent-soft)' }} transition={{ duration: 0.2 }}>
              TikTok: @MOIRAI
            </motion.a>
          </motion.div>
        </motion.div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '11px', color: 'var(--muted)' }}>© {new Date().getFullYear()} Moirai. All rights reserved.</p>
          <p style={{ fontSize: '11px', color: 'var(--border)' }}>Destiny, Tailored.</p>
          <Link href="/studio" style={{ fontSize: '10px', color: 'var(--border)', letterSpacing: '0.1em' }}>Admin ↗</Link>
        </div>
      </div>
    </footer>
  )
}
