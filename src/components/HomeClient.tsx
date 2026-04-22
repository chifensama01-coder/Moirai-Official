'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
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
  bespokeHeroImage?: string
}

export default function HomeClient({ products, posts, waNumber, waMsg, collections, heroImageUrl, heroText, heroSlides, lookbook, bespokeHeroImage }: HomeClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = (heroSlides && heroSlides.length > 0) ? heroSlides : [
     {
       image: heroImageUrl,
       title: heroText || 'Destiny, Tailored.',
       subtitle: 'Not a Trend. IDENTITY.'
     }
  ]
  const renderSlides = slides.filter(s => s.image)
  const hasSlides = renderSlides && renderSlides.length > 0

  useEffect(() => {
    if (!renderSlides || renderSlides.length <= 1) return
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % renderSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [renderSlides?.length])

  // Parallax
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <>
      {/* ── HERO ── */}
      {/* ── HERO ── */}
      <section className="hero-section" style={{ overflow: 'hidden', background: 'var(--bg)', position: 'relative' }}>
        
        {/* Background Slider */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {hasSlides ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'absolute', inset: 0 }}
              >
                {(() => {
                  const imgRaw = renderSlides[currentSlide]?.image || renderSlides[currentSlide]?.url
                  const imageSrc = imgRaw ? (typeof imgRaw === 'string' ? imgRaw : urlFor(imgRaw).width(1600).quality(90).url()) : null
                  return imageSrc ? (
                    <>
                      <Image
                        src={imageSrc}
                        alt="Hero Background"
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                      {/* Minimal gradient text legibility shadow (removed purple overlay bug) */}
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', pointerEvents: 'none' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%)', pointerEvents: 'none' }} />
                    </>
                  ) : (
                    <>
                      {/* Fallback pattern */}
                      <div style={{ width: '100%', height: '100%', background: 'var(--bg)' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 60%)', pointerEvents: 'none' }} />
                    </>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div style={{ position: 'absolute', inset: 0, background: 'var(--bg)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>
          )}
        </div>

        {/* Foreground Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <motion.p
            className="section-label"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ color: hasSlides ? '#ffffff' : 'var(--accent)', textShadow: hasSlides ? '0 2px 10px rgba(0,0,0,0.5)' : 'none' }}
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
                fontSize: 'clamp(3rem, 7vw, 7rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 0.95,
                marginBottom: '1.5rem',
                color: hasSlides ? '#ffffff' : 'var(--text)',
                textShadow: hasSlides ? '0 4px 20px rgba(0,0,0,0.4)' : 'none',
              }}
            >
              <span style={{ display: 'block' }}>
                 {hasSlides ? renderSlides[currentSlide]?.title : 'Destiny, Tailored.'}
              </span>
            </motion.h1>
          </AnimatePresence>

          <motion.div
            custom={0.3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="divider"
            style={{ margin: '1.5rem auto', background: hasSlides ? 'linear-gradient(90deg, transparent, #ffffff, transparent)' : undefined }}
          />

          <AnimatePresence mode="wait">
            <motion.p
              key={`p-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontStyle: 'italic', color: hasSlides ? '#f3f4f6' : 'var(--accent)', marginBottom: '0.5rem', textShadow: hasSlides ? '0 2px 10px rgba(0,0,0,0.4)' : 'none' }}
            >
              {hasSlides ? renderSlides[currentSlide]?.subtitle : 'Not a Trend. IDENTITY.'}
            </motion.p>
          </AnimatePresence>

          <motion.p
            custom={0.44}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: hasSlides ? '#d1d5db' : 'var(--muted)', marginBottom: '3rem', textShadow: hasSlides ? '0 2px 8px rgba(0,0,0,0.5)' : 'none' }}
          >
            Made for who you are Becoming
          </motion.p>

          <motion.div
            custom={0.52}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/collections" className="btn-primary" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>Explore Collections</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className={hasSlides ? "btn-primary" : "btn-ghost"} style={{ minHeight: '48px', display: 'flex', alignItems: 'center', background: hasSlides ? 'rgba(255,255,255,0.1)' : undefined, backdropFilter: hasSlides ? 'blur(10px)' : undefined, border: hasSlides ? '1px solid rgba(255,255,255,0.2)' : undefined, color: hasSlides ? '#ffffff' : undefined }}>Enquire Now</a>
            </motion.div>
          </motion.div>
          
          {hasSlides && renderSlides.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '4rem' }}>
              {renderSlides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)}
                  style={{ width: '2rem', height: '3px', background: currentSlide === i ? '#ffffff' : 'rgba(255,255,255,0.3)', transition: 'background 0.3s', minHeight: '30px' }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0', background: 'var(--bg)' }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'marqueeScroll 28s linear infinite', width: 'max-content' }}>
          {['Made for who you are Becoming', '✦', 'Destiny Tailored', '◆', 'Refined. Intentional. Eternal.', '◇', 'Not a Trend. IDENTITY', '✧',
            'Made for who you are Becoming', '✦', 'Destiny Tailored', '◆', 'Refined. Intentional. Eternal.', '◇', 'Not a Trend. IDENTITY', '✧'].map((t, i) => (
            <span key={i} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: i % 2 !== 0 ? 'var(--accent)' : 'var(--muted)', whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── BRAND STATEMENT ── */}
      <section style={{ textAlign: 'center', padding: '8rem 2rem', background: 'var(--bg)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 65%)', pointerEvents: 'none' }} />
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
            style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 2, maxWidth: 580, margin: '0 auto 2.5rem' }}
          >
            Moirai draws from the Greek Fates — the ancient weavers of human destiny. We believe every silhouette tells a story, every stitch carries intention. Fashion is not decoration. It is the language of becoming.
          </motion.p>
          <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <Link href="/about" className="btn-ghost" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>Discover Our Story</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="section" id="collections" style={{ padding: '8rem 0' }}>
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
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {collections && collections.length > 0 ? collections.map((cat, i) => (
              <motion.div key={i} variants={staggerFadeUp}>
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
                  transition={{ duration: 0.3 }}
                  style={{ borderColor: 'var(--border)' }}
                >
                  <Link href={`/collections#${cat.slug || cat.title.toLowerCase().replace(/ /g, '-')}`} style={{
                    display: 'block',
                    padding: '3rem 2rem',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Image */}
                    <div style={{ width: '100%', aspectRatio: '4/3', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                      {(() => {
                         const catImg = cat?.image
                         const imgSrc = catImg ? (typeof catImg === 'string' ? catImg : urlFor(catImg).width(800).quality(80).url()) : undefined
                         return imgSrc ? (
                           <Image src={imgSrc} alt={cat?.title || 'Category'} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} loading="lazy" />
                         ) : (
                           <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.05)' }} />
                         )
                      })()}
                    </div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text)' }}>{cat.title}</p>
                    <p style={{ fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.2em', marginTop: '1.25rem', textTransform: 'uppercase' }}>Explore →</p>
                  </Link>
                </motion.div>
              </motion.div>
            )) : (
               <div style={{ padding: '4rem', gridColumn: '1 / -1', textAlign: 'center', color: 'var(--muted)', border: '1px dashed var(--border)', background: 'var(--bg)' }}>
                 <p style={{ fontSize: '1.5rem', opacity: 0.3, marginBottom: '0.5rem' }}>✧</p>
                 <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Curating the Collection</p>
               </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── LOOKBOOK SECTION (NEW) ── */}
      {lookbook && lookbook.length > 0 && (
         <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
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
                 {lookbook.map((lb, idx) => {
                    const lbImg = lb?.images?.[0] || lb?.image;
                    const imgSrc = lbImg ? (typeof lbImg === 'string' ? lbImg : urlFor(lbImg).width(1200).quality(80).url()) : undefined;
                    return (
                      <motion.div key={idx} variants={staggerFadeUp} style={{ position: 'relative', height: '600px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                          <motion.div style={{ width: '100%', height: '100%', position: 'relative' }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                             {imgSrc ? (
                               <>
                                 <Image src={imgSrc} alt={lb?.title || 'Lookbook'} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', textAlign: 'center' }}>
                                    {lb.date && <p style={{ fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{lb.date}</p>}
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.5rem' }}>{lb.title}</h3>
                                    {lb.description && <p style={{ fontSize: '13px', color: '#e5e7eb', lineHeight: 1.7, maxWidth: '80%' }}>{lb.description}</p>}
                                 </div>
                               </>
                             ) : (
                               <>
                                 <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--bg)' }} />
                                 <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 60%)', pointerEvents: 'none' }} />
                                 <div style={{ position: 'absolute', inset: 0, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    {lb.date && <p style={{ fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{lb.date}</p>}
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text)', marginBottom: '0.5rem' }}>{lb.title}</h3>
                                    {lb.description && <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '80%' }}>{lb.description}</p>}
                                 </div>
                               </>
                             )}
                          </motion.div>
                      </motion.div>
                    )
                 })}
               </motion.div>
            </div>
         </section>
      )}

      {/* ── FEATURED PRODUCTS (from Sanity) ── */}
      {products && products.length > 0 && (
        <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
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
              <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/shop" className="btn-outline" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>View All</Link>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}
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
                      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: 'var(--bg)', border: '1px solid var(--border)' }}
                      whileHover="hover"
                      initial="rest"
                    >
                      {(() => {
                        const rawPrimary = p?.imageUrl || p?.image
                        const imgPrimary = rawPrimary ? (typeof rawPrimary === 'string' ? rawPrimary : urlFor(rawPrimary).width(800).quality(80).url()) : undefined
                        const rawSecondary = p?.images?.[0]
                        const imgSecondary = rawSecondary ? (typeof rawSecondary === 'string' ? rawSecondary : urlFor(rawSecondary).width(800).quality(80).url()) : undefined

                        if (imgPrimary) {
                          return (
                            <motion.div style={{ width: '100%', height: '100%', position: 'relative' }} variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                               <Image src={imgPrimary} alt={p?.name || 'Product'} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover', position: 'absolute', inset: 0, zIndex: 1 }} loading="lazy" />
                               {imgSecondary && (
                                  <motion.div variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.4 }} style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
                                     <Image src={imgSecondary} alt={`${p?.name || 'Product'} alternate`} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} loading="lazy" />
                                  </motion.div>
                               )}
                            </motion.div>
                          )
                        } else {
                          return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '2rem', opacity: 0.1 }}>✦</span></div>
                        }
                      })()}
                      <div style={{ position: 'absolute', inset: 0, background: p.imageUrl ? 'transparent' : 'rgba(0,0,0,0.02)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 3 }}>
                        <motion.div initial={{ opacity: 0 }} variants={{ hover: { opacity: 1, y: 0 }, rest: { opacity: 0, y: 10 } }} transition={{ duration: 0.2 }} style={{ background: 'var(--bg)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--text)' }}>{p.name}</p>
                          {p.price && <p style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '0.75rem' }}>{p.price}</p>}
                          <motion.a
                            href={`https://wa.me/237682710405?text=${msg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-block', padding: '0.45rem 1.25rem', border: '1px solid var(--accent)', color: 'var(--accent)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', minHeight: '44px', lineHeight: '30px' }}
                            whileHover={{ backgroundColor: 'var(--accent-soft)', scale: 1.03 }}
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
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400, borderRight: '1px solid var(--border)' }}
          >
            {bespokeHeroImage ? (
               <Image src={bespokeHeroImage} alt="Bespoke Couture" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            ) : (
               <div style={{ position: 'absolute', inset: 0, background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '3rem', opacity: 0.2, color: 'var(--accent)' }}>✦</span>
               </div>
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, var(--bg))', opacity: 0.4 }} />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <p className="section-label">Our Specialty</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Bespoke <br />Couture Pieces</h2>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 2, marginBottom: '2rem' }}>
              Custom pieces crafted to reflect your identity. Every measurement, every fabric choice, every stitch is a conversation between your vision and our craft.
            </p>
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {['Consultation', 'Design', 'Fitting', 'Delivery'].map(s => (
                <motion.span
                  key={s}
                  whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--muted)', border: '1px solid var(--border)', padding: '0.45rem 1rem', textTransform: 'uppercase', cursor: 'default', transition: 'all 0.2s' }}
                >{s}</motion.span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/bespoke" className="btn-primary" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>Start Your Order</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a href={`https://wa.me/237682710405?text=${encodeURIComponent('Hi! I am interested in a bespoke piece from Moirai.')}`} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>WhatsApp Us</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <style>{`@media(max-width:768px){section>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important;border-right:none!important}}`}</style>
      </section>

      {/* ── FASHION SCHOOL ── */}
      <section className="section" style={{ textAlign: 'center', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
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
          <motion.p variants={staggerFadeUp} style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 2, marginBottom: '2.5rem' }}>
            Learn the art of craftsmanship. From foundational sewing techniques to advanced couture, our program is built for those who want to create — not just wear — the extraordinary.
          </motion.p>
          <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <Link href="/fashion-school" className="btn-ghost" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>Explore the Program</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ borderTop: '1px solid var(--border)', padding: '6rem 0', background: 'var(--bg)' }}>
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="section-label" variants={staggerFadeUp}>What We Stand For</motion.p>
            <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Core Values</motion.h2>
          </motion.div>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2px', background: 'var(--border)' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerFadeUp}
                whileHover={{ backgroundColor: 'var(--accent-soft)' }}
                style={{ padding: '4rem 2.5rem', background: 'var(--bg)', transition: 'background-color 0.3s' }}
              >
                <p style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>{v.icon}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.75rem' }}>{v.title}</p>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.9 }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '9rem 2rem', textAlign: 'center', background: 'var(--bg)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)', pointerEvents: 'none' }} />
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
          <motion.p variants={staggerFadeUp} style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 2, marginBottom: '3rem' }}>
            Whether it is a bespoke piece, a cocktail dress, or your first lesson in the fashion school — your story starts here.
          </motion.p>
          <motion.div variants={staggerFadeUp} style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/bespoke" className="btn-primary" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>Start Your Journey</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}>Chat With Us</a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
