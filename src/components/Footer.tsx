'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerFadeUp } from '@/lib/animations'

interface FooterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  settings: any
}

export default function Footer({ settings }: FooterProps) {
  const waNumber = (settings?.whatsappNumber || '237682710405').replace(/\D/g, '')
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi, I'd like to inquire about Moirai")}`

  return (
    <footer style={{ borderTop: '1px solid #2a2133', background: '#0d0b10', padding: '5rem 2rem 3rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Brand */}
          <motion.div variants={staggerFadeUp}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #FAFAFA, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Moirai.
            </p>
            <p style={{ fontSize: '7px', letterSpacing: '0.45em', color: '#9B5DE5', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              The House of Moirai
            </p>
            <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 2, fontStyle: 'italic' }}>
              Not a Trend. IDENTITY.<br />Made for who you are Becoming.
            </p>
          </motion.div>

          {/* Navigate */}
          <motion.div variants={staggerFadeUp}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '1.25rem', fontWeight: 500 }}>Navigate</p>
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
                  <Link href={href} style={{ fontSize: '12px', color: '#7A6B8A', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C77DFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#7A6B8A')}
                  >{label}</Link>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Collections */}
          <motion.div variants={staggerFadeUp}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '1.25rem', fontWeight: 500 }}>Collections</p>
            {['Bespoke', 'Corsets', 'Cocktail Dresses', 'Cameroonian Traditional'].map(c => (
              <div key={c} style={{ marginBottom: '0.6rem' }}>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }} style={{ display: 'inline-block' }}>
                  <Link href="/collections" style={{ fontSize: '12px', color: '#7A6B8A', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C77DFF')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#7A6B8A')}
                  >{c}</Link>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Connect */}
          <motion.div variants={staggerFadeUp}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '1.25rem', fontWeight: 500 }}>Connect</p>
            <motion.a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '12px', color: '#7A6B8A', marginBottom: '0.75rem' }} whileHover={{ color: '#C77DFF' }} transition={{ duration: 0.2 }}>
              WhatsApp: +237 682 710 405
            </motion.a>
            {settings?.email && (
              <motion.a href={`mailto:${settings.email}`} style={{ display: 'block', fontSize: '12px', color: '#7A6B8A', marginBottom: '0.75rem' }} whileHover={{ color: '#C77DFF' }} transition={{ duration: 0.2 }}>{settings.email}</motion.a>
            )}
            <motion.a href="https://instagram.com/Moirai.th" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '12px', color: '#7A6B8A', marginBottom: '0.6rem' }} whileHover={{ color: '#C77DFF' }} transition={{ duration: 0.2 }}>
              Instagram: @Moirai.th
            </motion.a>
            <motion.a href="https://tiktok.com/@MOIRAI" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '12px', color: '#7A6B8A', marginBottom: '0.6rem' }} whileHover={{ color: '#C77DFF' }} transition={{ duration: 0.2 }}>
              TikTok: @MOIRAI
            </motion.a>
            <p style={{ fontSize: '12px', color: '#7A6B8A', marginTop: '0.5rem' }}>Payment: Mobile Money (MoMo)</p>
          </motion.div>
        </motion.div>

        <div style={{ borderTop: '1px solid #2a2133', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '11px', color: '#7A6B8A' }}>© {new Date().getFullYear()} Moirai. All rights reserved.</p>
          <p style={{ fontSize: '11px', color: '#2a2133' }}>Destiny, Tailored.</p>
          <Link href="/studio" style={{ fontSize: '10px', color: '#2a2133', letterSpacing: '0.1em' }}>Admin ↗</Link>
        </div>
      </div>
    </footer>
  )
}
