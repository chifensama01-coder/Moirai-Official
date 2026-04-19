'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerFadeUp } from '@/lib/animations'

const WA = '237682710405'

const CATEGORIES = ['All', 'Bespoke', 'Corsets', 'Cocktail Dresses', 'Cameroonian Traditional']

export default function ShopClient({ products }: { products: any[] }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const parsedItems = products.map((p: any) => ({
    id: p._id,
    name: p.title || 'Product',
    slug: p.slug?.current,
    category: p.category || 'Other',
    price: p.price ? `$${p.price}` : 'Price on request',
    desc: p.description || '',
    image: p.imageUrl,
  }))

  const uniqueCategories = Array.from(new Set(parsedItems.map(p => p.category))).filter(Boolean)
  const dynamicCategories = ['All', ...uniqueCategories]

  const filtered = activeCategory === 'All' ? parsedItems : parsedItems.filter(p => p.category === activeCategory)

  const waEnquire = (name: string) =>
    `https://wa.me/${WA}?text=${encodeURIComponent(`Hi I want to order ${name}`)}`

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero header */}
      <section style={{
        padding: '5rem 2rem 3rem',
        textAlign: 'center',
        background: 'linear-gradient(170deg, #0d0b10 0%, #130f18 60%, #1e1826 100%)',
        borderBottom: '1px solid #2a2133',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(107,63,160,0.18) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label" variants={staggerFadeUp}>The House of Moirai</motion.p>
          <motion.h1
            variants={staggerFadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem,8vw,6rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >Shop</motion.h1>
          <motion.div className="divider" style={{ marginBottom: '1.5rem' }} variants={staggerFadeUp} />
          <motion.p variants={staggerFadeUp} style={{ color: '#B8A9C9', fontSize: '13px', maxWidth: 480, margin: '0 auto 0' }}>
            Enquire via WhatsApp. Payment via MoMo on confirmation.
          </motion.p>
        </motion.div>
      </section>

      {/* Sticky filter bar */}
      <div style={{
        background: 'rgba(13,11,16,0.98)',
        borderBottom: '1px solid #2a2133',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 60,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {dynamicCategories.map((cat: string) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '0.4rem 1.1rem',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                  borderColor: activeCategory === cat ? '#9B5DE5' : '#2a2133',
                  color: activeCategory === cat ? '#C77DFF' : '#7A6B8A',
                  background: activeCategory === cat ? 'rgba(155,93,229,0.1)' : 'transparent',
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {(['grid', 'list'] as const).map(v => (
              <motion.button
                key={v}
                onClick={() => setView(v)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 32, height: 32,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid',
                  cursor: 'pointer',
                  borderColor: view === v ? '#9B5DE5' : '#2a2133',
                  color: view === v ? '#9B5DE5' : '#7A6B8A',
                  background: view === v ? 'rgba(155,93,229,0.1)' : 'transparent',
                }}
              >
                {v === 'grid'
                  ? <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="0" y="0" width="5" height="5" /><rect x="7" y="0" width="5" height="5" /><rect x="0" y="7" width="5" height="5" /><rect x="7" y="7" width="5" height="5" /></svg>
                  : <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="0" y="0" width="12" height="2.5" /><rect x="0" y="5" width="12" height="2.5" /><rect x="0" y="10" width="12" height="2.5" /></svg>
                }
              </motion.button>
            ))}
            <span style={{ fontSize: '11px', color: '#7A6B8A', letterSpacing: '0.1em', paddingLeft: '0.5rem' }}>{filtered.length} pieces</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <section style={{ padding: '3rem 0 6rem', background: '#050407' }}>
        <div className="container">
          <AnimatePresence mode="wait">
            {view === 'grid' ? (
              <motion.div
                key={`grid-${activeCategory}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.5rem' }}
              >
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, borderColor: '#6B3FA0' }}
                    style={{ background: '#130f18', border: '1px solid #2a2133', transition: 'border-color 0.3s' }}
                  >
                    <div style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
                      {p.image ? (
                        <motion.img
                          src={p.image}
                          alt={p.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          whileHover={{ scale: 1.07 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1e1826, #2D1B69)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '2rem', opacity: 0.1 }}>✦</span></div>
                      )}
                      {p.category && p.category !== 'Other' && (
                        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', padding: '0.25rem 0.7rem', background: 'rgba(45,27,105,0.85)', border: '1px solid rgba(155,93,229,0.3)', fontSize: '8px', letterSpacing: '0.2em', color: '#C77DFF', textTransform: 'uppercase' }}>
                          {p.category}
                        </div>
                      )}
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <Link href={`/product/${p.slug}`} style={{ display: 'block' }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.5rem', color: '#F0EBF8' }}>{p.name}</h3>
                        <p style={{ fontSize: '12px', color: '#7A6B8A', lineHeight: 1.7, marginBottom: '1.25rem' }}>{p.desc}</p>
                      </Link>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <span style={{ fontSize: '11px', color: '#9B5DE5', letterSpacing: '0.05em' }}>{p.price}</span>
                        <motion.a
                          href={waEnquire(p.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: '0.5rem 1.1rem',
                            border: '1px solid #9B5DE5',
                            color: '#C77DFF',
                            fontSize: '9px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            display: 'inline-block',
                          }}
                          whileHover={{ backgroundColor: 'rgba(107,63,160,0.25)', scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                        >
                          Order Now
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`list-${activeCategory}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.05, ease: 'easeOut' }}
                    whileHover={{ paddingLeft: '1rem' }}
                    style={{ display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: '1.5rem', alignItems: 'center', borderBottom: '1px solid #2a2133', padding: '1.5rem 0', transition: 'padding 0.2s' }}
                  >
                    <div style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #1e1826, #2D1B69)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2a2133', overflow: 'hidden' }}>
                      {p.image ? (
                        <motion.img
                          src={p.image}
                          alt={p.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.5 }}
                        />
                      ) : (
                        <span style={{ fontSize: '2rem', opacity: 0.1 }}>✦</span>
                      )}
                    </div>
                    <div>
                      <Link href={`/product/${p.slug}`} style={{ display: 'block' }}>
                        {p.category && p.category !== 'Other' && <p style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginBottom: '0.35rem' }}>{p.category}</p>}
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: '#F0EBF8', marginBottom: '0.5rem' }}>{p.name}</h3>
                        <p style={{ fontSize: '12px', color: '#7A6B8A', lineHeight: 1.7 }}>{p.desc}</p>
                      </Link>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <p style={{ fontSize: '11px', color: '#9B5DE5', marginBottom: '0.75rem' }}>{p.price}</p>
                      <motion.a
                        href={waEnquire(p.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '9px', padding: '0.45rem 1rem', display: 'inline-block', border: '1px solid #9B5DE5', color: '#9B5DE5' }}
                        whileHover={{ scale: 1.04, background: 'rgba(155,93,229,0.1)' }}
                        whileTap={{ scale: 0.97 }}
                      >Order</motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #0d0b10, #1e1826)', borderTop: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Can't Find What You're Looking For?</motion.p>
          <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontStyle: 'italic', marginBottom: '1.5rem' }}>We Create Custom Pieces.</motion.h2>
          <motion.p variants={staggerFadeUp} style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '2.5rem' }}>
            Our bespoke service means we can create any piece from scratch — tailored to your body, your vision, and your destiny.
          </motion.p>
          <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi! I'd like to discuss a custom bespoke piece with Moirai.")}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start a Bespoke Order
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Payment + delivery info */}
      <div style={{ background: '#0d0b10', borderTop: '1px solid #2a2133', padding: '2.5rem 2rem' }}>
        <motion.div
          style={{ maxWidth: 800, margin: '0 auto', display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {[
            { icon: '💜', label: 'Payment via MoMo', sub: 'Mobile Money accepted' },
            { icon: '✦', label: 'Made to Order', sub: 'Every piece crafted fresh' },
            { icon: '📦', label: 'Delivery Available', sub: 'Cameroon + international on request' },
          ].map(f => (
            <motion.div key={f.label} variants={staggerFadeUp} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{f.icon}</p>
              <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#C77DFF', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{f.label}</p>
              <p style={{ fontSize: '11px', color: '#7A6B8A' }}>{f.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Back to collections */}
      <div style={{ background: '#050407', borderTop: '1px solid #2a2133', padding: '1.5rem 2rem', textAlign: 'center' }}>
        <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }} style={{ display: 'inline-block' }}>
          <Link href="/collections" style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#7A6B8A', textTransform: 'uppercase' }}>← Back to Collections</Link>
        </motion.div>
      </div>
    </div>
  )
}
