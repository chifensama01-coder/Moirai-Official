'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, staggerFadeUp } from '@/lib/animations'

interface CollectionsClientProps {
  grouped: Record<string, any[]>
  waNumber: string
  collections: any[]
  heroImage: string | null
}

export default function CollectionsClient({ grouped, waNumber, collections, heroImage }: CollectionsClientProps) {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Header */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', background: '#0d0b10', borderBottom: '1px solid #2a2133', position: 'relative', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {heroImage && (
          <Image
            src={heroImage}
            alt="Collections Hero"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.35 }}
            priority
          />
        )}
        {!heroImage && (
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        )}
        <motion.div
          style={{ position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label" variants={staggerFadeUp}>The House of Moirai</motion.p>
          <motion.h1
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >Collections</motion.h1>
          <motion.div className="divider" style={{ marginBottom: '2rem' }} variants={staggerFadeUp} />
          {/* Category jump links */}
          <motion.div
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {collections.map(cat => (
              <motion.a
                key={cat.title}
                href={`#${cat.slug || cat.title.toLowerCase().replace(/ /g, '-')}`}
                variants={staggerFadeUp}
                whileHover={{ borderColor: '#9B5DE5', color: '#C77DFF', scale: 1.04 }}
                transition={{ duration: 0.2 }}
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.5rem 1.25rem', border: '1px solid #2a2133', color: '#7A6B8A', transition: 'all 0.25s', display: 'inline-block' }}
              >{cat.title}</motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Sections per category */}
      {collections.map((cat, ci) => {
        const catProducts = grouped[cat.title] || []
        return (
          <section
            key={cat.title}
            id={cat.slug || cat.title.toLowerCase().replace(/ /g, '-')}
            className="section"
            style={{ background: ci % 2 === 0 ? '#050407' : '#0d0b10', borderBottom: '1px solid #2a2133' }}
          >
            <div className="container">
              <motion.div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <motion.div variants={staggerFadeUp}>
                  <p className="section-label">0{ci + 1}</p>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '0.5rem' }}>{cat.title}</h2>
                </motion.div>
              </motion.div>

              <motion.div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {catProducts.length === 0
                  ? [1, 2, 3].map(n => (
                    <motion.div
                      key={n}
                      variants={staggerFadeUp}
                      style={{ aspectRatio: '3/4', background: '#1e1826', border: '1px solid #2a2133', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
                    >
                      <span style={{ fontSize: '2rem', opacity: 0.15, marginBottom: '0.5rem' }}>✧</span>
                      <p style={{ fontSize: '8px', letterSpacing: '0.25em', color: '#B8A9C9', textTransform: 'uppercase' }}>Curating Category</p>
                    </motion.div>
                  ))
                  : catProducts.map((p: any) => {
                    const msg = encodeURIComponent(`Hi I want to order ${p.name || 'this item'}`)
                    return (
                      <motion.div
                        key={p._id}
                        variants={staggerFadeUp}
                        style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: '#1e1826', border: '1px solid #2a2133' }}
                        whileHover="hover"
                        initial="rest"
                      >
                        {p.imageUrl ? (
                          <motion.div style={{ width: '100%', height: '100%', position: 'relative' }} variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                             <Image src={p.imageUrl} alt={p.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} loading="lazy" />
                          </motion.div>
                        ) : (
                          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1e1826, #2D1B69)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '2rem', opacity: 0.1 }}>✦</span></div>
                        )}
                        <div style={{ position: 'absolute', inset: 0, padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: p.imageUrl ? 'transparent' : 'linear-gradient(to top, rgba(5,4,7,0.92) 0%, transparent 50%)' }}>
                          <motion.div 
                            initial={{ opacity: 0 }} 
                            variants={{ hover: { opacity: 1, y: 0 }, rest: { opacity: 0, y: 10 } }} 
                            transition={{ duration: 0.2 }}
                            style={{ background: 'rgba(13,11,16,0.95)', padding: '1rem', border: '1px solid #2a2133' }}
                          >
                            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.25rem', color: '#F0EBF8' }}>{p.name}</p>
                            {p.price && <p style={{ fontSize: '11px', color: '#C77DFF', marginBottom: '0.75rem' }}>{p.price}</p>}
                            {p.available !== false && (
                              <motion.a
                                href={`https://wa.me/237682710405?text=${msg}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-block', padding: '0.4rem 0.9rem', border: '1px solid #9B5DE5', color: '#C77DFF', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', width: 'fit-content' }}
                                whileHover={{ backgroundColor: 'rgba(107,63,160,0.3)', scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                              >Order Now</motion.a>
                            )}
                            {p.available === false && (
                              <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#7A6B8A', textTransform: 'uppercase' }}>Sold Out</span>
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                  })
                }
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* MoMo note + Shop link */}
      <motion.div
        style={{ padding: '2.5rem 2rem', textAlign: 'center', background: '#0d0b10', borderTop: '1px solid #2a2133' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ fontSize: '12px', color: '#7A6B8A', lineHeight: 2, marginBottom: '1.25rem' }}>
          Payment via <span style={{ color: '#C77DFF' }}>Mobile Money (MoMo)</span>. Enquire via WhatsApp to place your order.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
          <Link href="/shop" className="btn-ghost" style={{ fontSize: '10px' }}>Browse the Full Shop →</Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
