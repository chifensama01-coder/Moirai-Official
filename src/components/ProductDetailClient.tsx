'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerFadeUp } from '@/lib/animations'

interface ProductProps {
  id: string
  name: string
  price: string
  desc: string
  image: string | null
  category: string
}

export default function ProductDetailClient({ product }: { product: ProductProps }) {
  const WA = '237682710405'
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi I want to order ${product.name}`)}`

  return (
    <div style={{ paddingTop: '5rem', minHeight: '100vh', background: '#050407' }}>
      <div className="container" style={{ padding: '6rem 1rem' }}>
        <motion.div
          style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Image Side */}
          <motion.div 
            variants={staggerFadeUp}
            style={{ position: 'relative', aspectRatio: '3/4', border: '1px solid #2a2133', background: '#130f18', overflow: 'hidden' }}
          >
            {product.image ? (
              <motion.img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1e1826, #2D1B69)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '3rem', opacity: 0.1 }}>✦</span>
              </div>
            )}
            {product.category && product.category !== 'Other' && (
               <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '0.4rem 1rem', background: 'rgba(13,11,16,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(155,93,229,0.3)', fontSize: '10px', letterSpacing: '0.2em', color: '#C77DFF', textTransform: 'uppercase' }}>
                 {product.category}
               </div>
            )}
          </motion.div>

          {/* Details Side */}
          <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
            <motion.div variants={staggerFadeUp}>
              <Link href="/shop" style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#7A6B8A', textTransform: 'uppercase', marginBottom: '2rem', display: 'inline-block' }}>
                ← Back to Shop
              </Link>
            </motion.div>
            
            <motion.h1 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: '#F0EBF8', lineHeight: 1.1, marginBottom: '1rem' }}>
              {product.name}
            </motion.h1>
            
            <motion.p variants={staggerFadeUp} style={{ fontSize: '1.25rem', color: '#9B5DE5', letterSpacing: '0.05em', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
              {product.price}
            </motion.p>
            
            <motion.div variants={staggerFadeUp} className="divider" style={{ marginBottom: '2rem' }} />
            
            <motion.p variants={staggerFadeUp} style={{ fontSize: '14px', color: '#B8A9C9', lineHeight: 1.8, marginBottom: '3rem' }}>
              {product.desc || 'A meticulously crafted piece reflecting the Moirai dedication to structure, identity, and elegance.'}
            </motion.p>

            <motion.div variants={staggerFadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ textAlign: 'center', width: '100%', padding: '1.2rem', fontSize: '0.9rem', letterSpacing: '0.15em' }}
              >
                Order Now
              </a>
              <p style={{ textAlign: 'center', fontSize: '10px', color: '#7A6B8A', letterSpacing: '0.1em', marginTop: '0.5rem' }}>
                Purchases are finalized via WhatsApp consultation.
              </p>
            </motion.div>
            
            {/* Delivery/Policy standard block */}
            <motion.div variants={staggerFadeUp} style={{ marginTop: '4rem', padding: '2rem', background: '#130f18', border: '1px solid #2a2133' }}>
               <h3 style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#F0EBF8', textTransform: 'uppercase', marginBottom: '1rem' }}>Policy & Creation</h3>
               <p style={{ fontSize: '12px', color: '#7A6B8A', lineHeight: 1.7 }}>
                 Most of our pieces are made upon confirmation to avoid waste and guarantee the perfect fit. Production times may vary depending on existing waiting queues.
               </p>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
