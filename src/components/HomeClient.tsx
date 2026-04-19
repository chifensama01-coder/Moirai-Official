'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, staggerFadeUp } from '@/lib/animations'

const VALUES = [
  { icon: '◆', title: 'Customer Experience', desc: 'Every interaction is personal. You are not a transaction.' },
  { icon: '◇', title: 'Craftsmanship Excellence', desc: 'We obsess over details that others overlook.' },
  { icon: '✦', title: 'Empowerment Through Style', desc: 'Fashion is the language of confidence.' },
  { icon: '✧', title: 'Sustainability', desc: 'Intentional creation. Pieces made to last.' },
]

interface HomeClientProps {
  products: any[]
  posts: any[]
  waNumber: string
  waMsg: string
  collections: any[]
  heroImageUrl?: string
  heroText?: string
  heroSlides?: any[]
  lookbook?: any[]
}

export default function HomeClient({ products, posts, waNumber, waMsg, collections, heroImageUrl, heroText, heroSlides, lookbook }: HomeClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = (heroSlides && heroSlides.length > 0) ? heroSlides : [
     {
       image: heroImageUrl,
       title: heroText || 'Destiny, Tailored.',
       subtitle: 'Not a Trend. IDENTITY.'
     }
  ]
  const renderSlides = slides.filter(s => s.image)

  useEffect(() => {
    if (renderSlides.length <= 1) return
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % renderSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [renderSlides.length])

  // Parallax
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
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

          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 5.5vw, 6rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 0.95,
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ display: 'block', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 60%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                 {renderSlides[currentSlide]?.title}
              </span>
            </motion.h1>
          </AnimatePresence>

          <motion.div
            custom={0.3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="divider"
            style={{ margin: '1.5rem 0' }}
          />

          <AnimatePresence mode="wait">
            <motion.p
              key={`p-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontStyle: 'italic', color: '#E0AAFF', marginBottom: '0.5rem' }}
            >
              {renderSlides[currentSlide]?.subtitle}
            </motion.p>
          </AnimatePresence>

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
              <Link href="/collections" className="btn-primary" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>Explore Collections</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>Enquire Now</a>
            </motion.div>
          </motion.div>
          
          {renderSlides.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '3rem' }}>
              {renderSlides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)}
                  style={{ width: '2rem', height: '3px', background: currentSlide === i ? '#9B5DE5' : '#2a2133', transition: 'background 0.3s', minHeight: '30px' }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right — parallax slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(160deg, #1e1826 0%, #2D1B69 40%, #6B3FA0 100%)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <motion.div style={{ width: '100%', height: '100%', y: parallaxY }}>
                 <Image src={renderSlides[currentSlide]?.image || renderSlides[currentSlide]?.url || ''} alt="Moirai Hero" fill sizes="50vw" priority style={{ objectFit: 'cover', opacity: 0.45 }} />
              </motion.div>
            </motion.div>
          </AnimatePresence>

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

        <style>{`@media(max-width:900px){section:first-of-type{grid-template-columns:1fr!important}section:first-of-type>div:last-of-type{position:absolute!important;inset:0!important;z-index:0!important;opacity:0.3!important}section:first-of-type>div:first-of-type{padding:7rem 1.5rem 4rem!important;z-index:10;min-height:100vh;background:linear-gradient(to top,#050407,transparent)}}`}</style>
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
            <Link href="/about" className="btn-ghost" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>Discover Our Story</Link>
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
            {collections && collections.length > 0 ? collections.map((cat, i) => (
              <motion.div key={i} variants={staggerFadeUp}>
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: '#6B3FA0' }}
                  transition={{ duration: 0.3 }}
                  style={{ borderColor: '#2a2133' }}
                >
                  <Link href={`/collections#${cat.slug || cat.title.toLowerCase().replace(/ /g, '-')}`} style={{
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
                      {cat.image ? (
                           <Image src={cat.image} alt={cat.title} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} loading="lazy" />
                      ) : (
                           <div style={{ width: '100%', height: '100%', background: '#1e1826' }} />
                      )}
                    </div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>{cat.title}</p>
                    <p style={{ fontSize: '10px', color: '#9B5DE5', letterSpacing: '0.2em', marginTop: '1.25rem', textTransform: 'uppercase' }}>Explore →</p>
                  </Link>
                </motion.div>
              </motion.div>
            )) : (
               <div style={{ padding: '4rem', gridColumn: '1 / -1', textAlign: 'center', color: '#7A6B8A', border: '1px dashed rgba(255,255,255,0.05)', background: 'rgba(13,11,16,0.3)' }}>
                 <p style={{ fontSize: '1.5rem', opacity: 0.3, marginBottom: '0.5rem' }}>✧</p>
                 <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Curating the Collection</p>
               </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── LOOKBOOK SECTION (NEW) ── */}
      {lookbook && lookbook.length > 0 && (
         <section className="section" style={{ background: '#050407', borderTop: '1px solid #2a2133' }}>
            <div className="container">
               <motion.div
                  style={{ textAlign: 'center', marginBottom: '4rem' }}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                >
                  <motion.p className="section-label" variants={staggerFadeUp}>Inspiration</motion.p>
                  <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>The Lookbook</motion.h2>
               </motion.div>
               <motion.div 
                 style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
                 variants={staggerContainer}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: '-60px' }}
               >
                 {lookbook.map((lb, idx) => (
                    <motion.div key={idx} variants={staggerFadeUp} style={{ position: 'relative', height: '600px', overflow: 'hidden', border: '1px solid #2a2133' }}>
                        <motion.div style={{ width: '100%', height: '100%', position: 'relative' }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                           <Image src={lb.image} alt={lb.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,7,0.95) 0%, transparent 60%)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', textAlign: 'center' }}>
                              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#F0EBF8', marginBottom: '0.5rem' }}>{lb.title}</h3>
                              {lb.description && <p style={{ fontSize: '12px', color: '#B8A9C9', lineHeight: 1.7, maxWidth: '80%' }}>{lb.description}</p>}
                           </div>
                        </motion.div>
                    </motion.div>
                 ))}
               </motion.div>
            </div>
         </section>
      )}

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
                <Link href="/shop" className="btn-outline" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>View All</Link>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {products.map((p: any) => {
                const msg = encodeURIComponent(`Hi I want to order ${p.name || 'this item'}`)
                return (
                  <motion.div key={p._id} variants={staggerFadeUp}>
                    <motion.div
                      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: '#1e1826', border: '1px solid #2a2133' }}
                      whileHover="hover"
                      initial="rest"
                    >
                      {p.imageUrl
                        ? (
                          <motion.div style={{ width: '100%', height: '100%', position: 'relative' }} variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                             <Image src={p.imageUrl} alt={p.name} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover', position: 'absolute', inset: 0, zIndex: 1 }} loading="lazy" />
                             {/* Secondary Hover Image (if exists array bounds) */}
                             {p.images && p.images[0] && (
                                <motion.div variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.4 }} style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
                                   <Image src={p.images[0]} alt={`${p.name} alternate`} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} loading="lazy" />
                                </motion.div>
                             )}
                          </motion.div>
                        )
                        : <div style={{ width: '100%', height: '100%', background: '#1e1826', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '2rem', opacity: 0.1 }}>✦</span></div>
                      }
                      <div style={{ position: 'absolute', inset: 0, background: p.imageUrl ? 'transparent' : 'linear-gradient(to top, rgba(5,4,7,0.92) 0%, transparent 50%)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 3 }}>
                        <motion.div initial={{ opacity: 0 }} variants={{ hover: { opacity: 1, y: 0 }, rest: { opacity: 0, y: 10 } }} transition={{ duration: 0.2 }} style={{ background: 'rgba(13,11,16,0.95)', padding: '1rem', border: '1px solid #2a2133' }}>
                          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: '0.25rem', color: '#F0EBF8' }}>{p.name}</p>
                          {p.price && <p style={{ fontSize: '11px', color: '#C77DFF', marginBottom: '0.75rem' }}>{p.price}</p>}
                          <motion.a
                            href={`https://wa.me/237682710405?text=${msg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-block', padding: '0.45rem 1rem', border: '1px solid #9B5DE5', color: '#C77DFF', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', minHeight: '44px', lineHeight: '30px' }}
                            whileHover={{ backgroundColor: 'rgba(107,63,160,0.3)', scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                          >Enquire</motion.a>
                        </motion.div>
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
                <Link href="/bespoke" className="btn-primary" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>Start Your Order</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a href={`https://wa.me/237682710405?text=${encodeURIComponent('Hi! I am interested in a bespoke piece from Moirai.')}`} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>WhatsApp Us</a>
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
            <Link href="/fashion-school" className="btn-ghost" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>Explore the Program</Link>
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
              <Link href="/bespoke" className="btn-primary" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>Start Your Journey</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>Chat With Us</a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
