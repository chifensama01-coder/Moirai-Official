'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { productPhotos } from '@/assets'
import { staggerContainer, staggerFadeUp, scrollFadeUp } from '@/lib/animations'

const SLOGANS = [
  'Refined. Intentional. Eternal.',
  'Made for who you are Becoming.',
  'Destiny, Tailored.',
  'Bold, Empowered, and an endless moment.',
]

const VALUES = [
  { icon: '◆', title: 'Customer Experience', desc: 'Every interaction is personal. You are not a transaction — you are someone we are creating a piece of destiny for.' },
  { icon: '◇', title: 'Craftsmanship Excellence', desc: 'We obsess over details that others overlook. A seam, a hem, a finish — it all matters.' },
  { icon: '✦', title: 'Empowerment Through Style', desc: 'Fashion is the language of confidence. When you wear Moirai, you wear intention.' },
  { icon: '✧', title: 'Sustainability', desc: 'We create intentionally. Pieces designed to outlast trends and be worn for years.' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ maxWidth: 700, position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Our Story</motion.p>
          <motion.h1
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 700, marginBottom: '1.5rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            About Moirai.
          </motion.h1>
          <motion.div className="divider" variants={staggerFadeUp} />
        </motion.div>
      </section>

      {/* The name */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <p className="section-label">The Name</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', marginBottom: '2rem', lineHeight: 1.2 }}>
                Woven by the Fates.<br />Worn by You.
              </h2>
              <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '1.5rem' }}>
                Moirai takes its name from the ancient Greek Fates — the three goddesses who spun, measured, and cut the thread of every human life. Clotho spun the thread of life. Lachesis measured it. Atropos cut it.
              </p>
              <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '1.5rem' }}>
                We believe fashion is not accidental. Every piece you choose to wear is a deliberate act — of defining who you are and who you are becoming. That intentionality is the spirit of Moirai.
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontStyle: 'italic', color: '#E0AAFF', lineHeight: 1.7, borderLeft: '2px solid #9B5DE5', paddingLeft: '1.25rem' }}>
                &ldquo;Not a Trend. IDENTITY.&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.06, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              style={{ aspectRatio: '3/4', border: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}
            >
              <motion.img
                src={productPhotos[0]}
                alt="Moirai Brand"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133', borderBottom: '1px solid #2a2133' }}>
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="section-label" variants={staggerFadeUp}>What Drives Us</motion.p>
            <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Core Values</motion.h2>
          </motion.div>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {VALUES.map(v => (
              <motion.div
                key={v.title}
                variants={staggerFadeUp}
                whileHover={{ borderColor: '#6B3FA0', y: -4 }}
                transition={{ duration: 0.3 }}
                style={{ padding: '2.5rem 2rem', background: '#130f18', border: '1px solid #2a2133' }}
              >
                <p style={{ fontSize: '1.5rem', color: '#9B5DE5', marginBottom: '1rem' }}>{v.icon}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{v.title}</p>
                <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.9 }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Slogans */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderBottom: '1px solid #2a2133' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <motion.p
            className="section-label"
            style={{ marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >The Moirai Way</motion.p>
          {SLOGANS.map((s, i) => (
            <motion.p
              key={s}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontStyle: 'italic', color: '#B8A9C9', marginBottom: '2rem', lineHeight: 1.4 }}
            >{s}</motion.p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: '#0d0b10' }}>
        <motion.div
          style={{ maxWidth: 500, margin: '0 auto' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.h2
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.2 }}
          >
            Ready to wear your destiny?
          </motion.h2>
          <motion.div variants={staggerFadeUp} style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/collections" className="btn-primary">View Collections</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/bespoke" className="btn-ghost">Start Bespoke</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
