'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, staggerFadeUp, scrollFadeUp, imageReveal } from '@/lib/animations'

const CATEGORIES = [
  { name: 'Bespoke', desc: 'Custom pieces crafted to reflect your identity', href: '/bespoke' },
  { name: 'Corsets', desc: 'Structured silhouettes that command a room', href: '/collections' },
  { name: 'Cocktail Dresses', desc: 'Effortless elegance for every occasion', href: '/collections' },
  { name: 'Cameroonian Traditional', desc: 'Heritage reimagined in modern silhouettes', href: '/collections' },
]

const VALUES = [
  { icon: '◆', title: 'Customer Experience', desc: 'Every interaction is personal. You are not a transaction.' },
  { icon: '◇', title: 'Craftsmanship Excellence', desc: 'We obsess over details that others overlook.' },
  { icon: '✦', title: 'Empowerment Through Style', desc: 'Fashion is the language of confidence.' },
  { icon: '✧', title: 'Sustainability', desc: 'Intentional creation. Pieces made to last.' },
]

interface HomeClientProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any[]
  waNumber: string
  waMsg: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categoryImages: any[]
}

export default function HomeClient({ products, posts, waNumber, waMsg, categoryImages }: HomeClientProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(170deg, #050407 0%, #0d0b10 40%, #130f18 100%)',
      }}>
        {/* Left content */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 4rem 4rem', position: 'relative', zIndex: 2 }}>
          {/* Purple orb */}
          <div style={{ position: 'absolute', top: '20%', left: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,63,160,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <motion.p
            className="section-label"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >The House of Moirai</motion.p>

          <motion.h1
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 6vw, 7.5rem)',
              fontWeight: 900,
              letterSpacing: '0.04em',
              lineHeight: 0.95,
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ display: 'block', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 60%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Destiny,</span>
            <span style={{ display: 'block', background: 'linear-gradient(135deg, #9B5DE5 0%, #E0AAFF 60%, #FAFAFA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tailored.</span>
          </motion.h1>

          <motion.div
            custom={0.3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="divider"
            style={{ margin: '1.5rem 0' }}
          />

          <motion.p
            custom={0.38}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontStyle: 'italic', color: '#E0AAFF', marginBottom: '0.5rem' }}
          >
            Not a Trend. IDENTITY.
          </motion.p>
          <motion.p
            custom={0.44}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7A6B8A', marginBottom: '3rem' }}
          >
            Made for who you are Becoming
          </motion.p>

          <motion.div
            custom={0.52}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/collections" className="btn-primary">Explore Collections</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Enquire Now</a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — purple gradient panel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(160deg, #1e1826 0%, #2D1B69 40%, #6B3FA0 100%)',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3rem', opacity: 0.12 }}>
            {['Moirai.', '✦', 'Destiny, Tailored.', '◆', 'The House of Moirai', '◇', 'Not a Trend.', '✧'].map((t, i) => (
              <p key={i} style={{ fontFamily: i % 2 === 0 ? 'var(--font-display)' : 'inherit', fontSize: i === 0 ? '5rem' : i % 2 === 0 ? '1.2rem' : '2rem', letterSpacing: '0.2em', color: 'white', textAlign: 'center', fontWeight: 700 }}>{t}</p>
            ))}
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #050407 0%, transparent 30%)' }} />
          {/* Large glowing orb */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.4, 0.28] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,93,229,0.35) 0%, transparent 70%)', pointerEvents: 'none' }}
          />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', zIndex: 2 }}
        >
          <p style={{ fontSize: '9px', letterSpacing: '0.3em', color: '#7A6B8A', textTransform: 'uppercase' }}>Scroll</p>
          <motion.div
            animate={{ scaleY: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #9B5DE5, transparent)', transformOrigin: 'top' }}
          />
        </motion.div>

        <style>{`@media(max-width:900px){section:first-of-type{grid-template-columns:1fr!important}section:first-of-type>div:last-of-type{display:none!important}section:first-of-type>div:first-of-type{padding:7rem 1.5rem 4rem!important}}`}</style>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid #2a2133', borderBottom: '1px solid #2a2133', padding: '1rem 0', background: '#0d0b10' }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'marqueeScroll 28s linear infinite', width: 'max-content' }}>
          {['Made for who you are Becoming', '✦', 'Destiny Tailored', '◆', 'Refined. Intentional. Eternal.', '◇', 'Not a Trend. IDENTITY', '✧',
            'Made for who you are Becoming', '✦', 'Destiny Tailored', '◆', 'Refined. Intentional. Eternal.', '◇', 'Not a Trend. IDENTITY', '✧'].map((t, i) => (
            <span key={i} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: i % 2 !== 0 ? '#9B5DE5' : '#7A6B8A', whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── BRAND STATEMENT ── */}
      <section style={{ textAlign: 'center', padding: '7rem 2rem', background: '#130f18', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ maxWidth: 750, margin: '0 auto', position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Our Philosophy</motion.p>
          <motion.h2
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontStyle: 'italic', lineHeight: 1.25, marginBottom: '2rem' }}
          >
            &ldquo;Bold, Empowered,<br />and an endless moment.&rdquo;
          </motion.h2>
          <motion.div className="divider" style={{ marginBottom: '2rem' }} variants={staggerFadeUp} />
          <motion.p
            variants={staggerFadeUp}
            style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, maxWidth: 580, margin: '0 auto 2.5rem' }}
          >
            Moirai draws from the Greek Fates — the ancient weavers of human destiny. We believe every silhouette tells a story, every stitch carries intention. Fashion is not decoration. It is the language of becoming.
          </motion.p>
          <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <Link href="/about" className="btn-ghost">Discover Our Story</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="section" id="collections">
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="section-label" variants={staggerFadeUp}>What We Create</motion.p>
            <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>The Collections</motion.h2>
          </motion.div>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {CATEGORIES.map((cat, i) => (
              <motion.div key={cat.name} variants={staggerFadeUp}>
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: '#6B3FA0' }}
                  transition={{ duration: 0.3 }}
                  style={{ borderColor: '#2a2133' }}
                >
                  <Link href={cat.href} style={{
                    display: 'block',
                    padding: '3rem 2rem',
                    background: '#130f18',
                    border: '1px solid #2a2133',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Image */}
                    <div style={{ width: '100%', aspectRatio: '4/3', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                      <motion.img
                        src={categoryImages[i]}
                        alt={cat.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>{cat.name}</p>
                    <p style={{ fontSize: '12px', color: '#7A6B8A', lineHeight: 1.7 }}>{cat.desc}</p>
                    <p style={{ fontSize: '10px', color: '#9B5DE5', letterSpacing: '0.2em', marginTop: '1.25rem', textTransform: 'uppercase' }}>Explore →</p>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS (from Sanity) ── */}
      {products.length > 0 && (
        <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133' }}>
          <div className="container">
            <motion.div
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div variants={staggerFadeUp}>
                <p className="section-label">Just Added</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Featured Pieces</h2>
              </motion.div>
              <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/shop" className="btn-outline">View All</Link>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {products.map((p: any) => {
                const msg = encodeURIComponent(p.whatsappMessage || `Hi! I'm interested in ${p.name} from Moirai.`)
                return (
                  <motion.div key={p._id} variants={staggerFadeUp}>
                    <motion.div
                      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: '#1e1826', border: '1px solid #2a2133' }}
                      whileHover="hover"
                      initial="rest"
                    >
                      {p.imageUrl
                        ? (
                          <motion.img
                            src={p.imageUrl}
                            alt={p.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )
                        : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1e1826, #2D1B69)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '2rem', opacity: 0.1 }}>✦</span></div>
                      }
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,7,0.92) 0%, transparent 50%)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: '0.25rem' }}>{p.name}</p>
                        {p.price && <p style={{ fontSize: '11px', color: '#C77DFF', marginBottom: '0.75rem' }}>{p.price}</p>}
                        <motion.a
                          href={`https://wa.me/${waNumber}?text=${msg}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'inline-block', padding: '0.45rem 1rem', border: '1px solid #9B5DE5', color: '#C77DFF', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', width: 'fit-content' }}
                          whileHover={{ backgroundColor: 'rgba(107,63,160,0.3)', scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                        >Enquire</motion.a>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── BESPOKE HIGHLIGHT ── */}
      <section style={{ background: '#0d0b10', borderTop: '1px solid #2a2133' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
          {/* Purple gradient image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ background: 'linear-gradient(160deg, #2D1B69 0%, #6B3FA0 50%, #9B5DE5 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}
          >
            <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
              {['Bespoke', '✦', 'Custom', '◆', 'Couture', '◇', 'Tailored', '✧'].map((t, i) => (
                <p key={i} style={{ fontFamily: i % 2 === 0 ? 'var(--font-display)' : 'inherit', fontSize: i % 2 === 0 ? '2rem' : '3rem', color: 'white', letterSpacing: '0.2em', padding: '1rem 2rem', fontWeight: 700 }}>{t}</p>
              ))}
            </div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,6vw,6rem)', fontWeight: 900, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em' }}>Bespoke.</p>
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, #0d0b10)' }} />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ padding: '5rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <p className="section-label">Our Specialty</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Bespoke <br />Couture Pieces</h2>
            <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '1.25rem' }}>
              Custom pieces crafted to reflect your identity. Every measurement, every fabric choice, every stitch is a conversation between your vision and our craft.
            </p>
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {['Consultation', 'Design', 'Fitting', 'Delivery'].map(s => (
                <motion.span
                  key={s}
                  whileHover={{ borderColor: '#9B5DE5', color: '#C77DFF' }}
                  style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#9B5DE5', border: '1px solid #2a2133', padding: '0.35rem 0.9rem', textTransform: 'uppercase', cursor: 'default', transition: 'all 0.2s' }}
                >{s}</motion.span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/bespoke" className="btn-primary">Start Your Order</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hi! I am interested in a bespoke piece from Moirai.')}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Us</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <style>{`@media(max-width:768px){section>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── FASHION SCHOOL ── */}
      <section className="section" style={{ textAlign: 'center', borderTop: '1px solid #2a2133', background: '#130f18' }}>
        <motion.div
          className="container"
          style={{ maxWidth: 700, margin: '0 auto' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Learn the Craft</motion.p>
          <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem' }}>Moirai Fashion School</motion.h2>
          <motion.div className="divider" style={{ marginBottom: '2rem' }} variants={staggerFadeUp} />
          <motion.p variants={staggerFadeUp} style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '2.5rem' }}>
            Learn the art of craftsmanship. From foundational sewing techniques to advanced couture, our program is built for those who want to create — not just wear — the extraordinary.
          </motion.p>
          <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <Link href="/fashion-school" className="btn-ghost">Explore the Program</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ borderTop: '1px solid #2a2133', padding: '5rem 0', background: '#0d0b10' }}>
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="section-label" variants={staggerFadeUp}>What We Stand For</motion.p>
            <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Core Values</motion.h2>
          </motion.div>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2px' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                variants={staggerFadeUp}
                whileHover={{ borderTopColor: '#9B5DE5' }}
                style={{ padding: '3rem 2rem', background: i % 2 === 0 ? '#130f18' : '#0d0b10', borderTop: '2px solid transparent', transition: 'border-color 0.3s' }}
              >
                <p style={{ fontSize: '1.5rem', color: '#9B5DE5', marginBottom: '1rem' }}>{v.icon}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{v.title}</p>
                <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.9 }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── JOURNAL PREVIEW ── */}
      {posts.length > 0 && (
        <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133' }}>
          <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
            <motion.div
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.div variants={staggerFadeUp}>
                <p className="section-label">Stories &amp; Style</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>The Journal</h2>
              </motion.div>
              <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/blog" className="btn-outline">All Posts</Link>
              </motion.div>
            </motion.div>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {posts.map((post: any, i: number) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/blog/${post.slug?.current}`} style={{ display: 'block' }}>
                  <motion.article
                    style={{ borderTop: '1px solid #2a2133', padding: '2.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}
                    whileHover={{ paddingLeft: '1.25rem' }}
                    transition={{ duration: 0.25 }}
                  >
                    <div>
                      <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                      </p>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 400, color: '#F0EBF8', marginBottom: '0.5rem' }}>{post.title}</h3>
                      {post.excerpt && <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.8 }}>{post.excerpt}</p>}
                    </div>
                    <span style={{ fontSize: '1.25rem', color: '#9B5DE5', flexShrink: 0 }}>→</span>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '9rem 2rem', textAlign: 'center', background: 'linear-gradient(170deg, #130f18, #050407)', borderTop: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,63,160,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Ready to Begin?</motion.p>
          <motion.h2
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontStyle: 'italic', fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.1 }}
          >
            Made for who<br />you are Becoming.
          </motion.h2>
          <motion.div className="divider" style={{ marginBottom: '2rem' }} variants={staggerFadeUp} />
          <motion.p variants={staggerFadeUp} style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '3rem' }}>
            Whether it is a bespoke piece, a cocktail dress, or your first lesson in the fashion school — your story starts here.
          </motion.p>
          <motion.div variants={staggerFadeUp} style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/bespoke" className="btn-primary">Start Your Journey</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat With Us</a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
