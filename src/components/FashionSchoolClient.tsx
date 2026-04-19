'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerFadeUp } from '@/lib/animations'

const MODULES = [
  { num: '01', title: 'Foundation of Fashion Design', desc: 'History, theory, and the language of fashion. Understanding what makes great design.' },
  { num: '02', title: 'Pattern Making & Cutting', desc: 'Translate designs from paper to fabric with precision and confidence.' },
  { num: '03', title: 'Sewing Techniques', desc: 'From basic stitches to advanced couture construction methods.' },
  { num: '04', title: 'Fabric & Material Knowledge', desc: 'Understanding textures, weights, and how different fabrics behave.' },
  { num: '05', title: 'Styling & Presentation', desc: 'How to dress the body, direct shoots, and present your work professionally.' },
  { num: '06', title: 'Business of Fashion', desc: 'Pricing, branding, clients, and building your own fashion business from scratch.' },
]

const WHO = [
  'Beginners with a passion for fashion and no prior experience',
  'Aspiring designers wanting structured, hands-on training',
  'Entrepreneurs starting their own fashion label',
  'Anyone wanting to create and understand their own wardrobe',
]

const WA = '237682710405'

interface FashionSchoolClientProps {
  heroImage?: string
}

export default function FashionSchoolClient({ heroImage }: FashionSchoolClientProps) {
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent('Hi! I am interested in joining the Moirai Fashion School program. Can you share more details?')}`

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ maxWidth: 720, position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Education &amp; Craft</motion.p>
          <motion.h1
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,7vw,5.5rem)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '1.5rem', lineHeight: 1.05, background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Moirai<br />Fashion School
          </motion.h1>
          <motion.div className="divider" style={{ marginBottom: '2rem' }} variants={staggerFadeUp} />
          <motion.p
            variants={staggerFadeUp}
            style={{ color: '#B8A9C9', fontSize: '14px', lineHeight: 2, marginBottom: '3rem', maxWidth: 520, margin: '0 auto 3rem' }}
          >
            Learn the art of craftsmanship. Become the creator behind the garment.
          </motion.p>
          <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Join the Program</a>
          </motion.div>
        </motion.div>
      </section>

      {/* Curriculum */}
      <section className="section">
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="section-label" variants={staggerFadeUp}>Curriculum</motion.p>
            <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>What You Will Learn</motion.h2>
          </motion.div>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {MODULES.map((m, i) => (
              <motion.div
                key={m.title}
                variants={staggerFadeUp}
                whileHover={{ borderColor: '#6B3FA0', y: -6 }}
                transition={{ duration: 0.3 }}
                style={{ padding: '2.5rem', background: '#130f18', border: '1px solid #2a2133' }}
              >
                <motion.p
                  style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 700, color: '#2a2133', lineHeight: 1, marginBottom: '1.25rem' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                >{m.num}</motion.p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{m.title}</p>
                <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.9 }}>{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133', borderBottom: '1px solid #2a2133' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <p className="section-label">Is This For You?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '2.5rem', lineHeight: 1.2 }}>Who It&apos;s For</h2>
              {WHO.map((w, i) => (
                <motion.div
                  key={w}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}
                >
                  <span style={{ color: '#9B5DE5', marginTop: '0.1rem', flexShrink: 0 }}>✦</span>
                  <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 1.8 }}>{w}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              style={{ aspectRatio: '4/5', border: '1px solid #2a2133', position: 'relative', overflow: 'hidden', background: '#130f18' }}
            >
              {heroImage && (
                <motion.img
                  src={heroImage}
                  alt="Fashion School"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Details + CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <motion.div
          style={{ maxWidth: 600, margin: '0 auto' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Program Details</motion.p>
          <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem' }}>Duration &amp; Enrollment</motion.h2>
          <motion.p variants={staggerFadeUp} style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '3rem' }}>
            Duration and schedule details are available on request. Intake is intentionally limited to ensure every student receives personal mentorship and hands-on time with the Moirai team.
          </motion.p>
          <motion.div variants={staggerFadeUp} style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Apply Now</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn-ghost">Contact Us</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
