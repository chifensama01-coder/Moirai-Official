'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { productPhotos } from '@/assets'
import { staggerContainer, staggerFadeUp } from '@/lib/animations'

const PROCESS = [
  { num: '01', title: 'Consultation', desc: 'We start with a conversation. Your vision, your measurements, your story. Every detail matters. Done via WhatsApp or in person.' },
  { num: '02', title: 'Design', desc: "Our team sketches your piece and selects fabrics aligned with your identity and the occasion you're dressing for." },
  { num: '03', title: 'Fitting', desc: 'A fitting session ensures the piece sits perfectly on your body — because you are the standard, not a mannequin.' },
  { num: '04', title: 'Delivery', desc: 'Your finished piece arrives ready for the moment it was made for. Ready to be worn, photographed, and remembered.' },
]

const FAQS = [
  { q: 'How long does a bespoke piece take?', a: 'Typically 2–4 weeks depending on complexity. Rush orders can be discussed and accommodated where possible.' },
  { q: 'How do I start a bespoke order?', a: "Simply reach out via WhatsApp at +237 682 710 405 or use the button below. We'll schedule a consultation immediately." },
  { q: 'Do you offer custom sizing?', a: 'Every bespoke piece is made to your exact measurements. No standard sizing. You are the standard.' },
  { q: 'What is the price range?', a: "Prices vary by design complexity and fabric selected. Contact us and we'll discuss what works within your budget." },
  { q: 'Can I see examples of previous bespoke work?', a: 'Yes! Follow @Moirai.th on Instagram to see previous pieces, or ask our team to share a portfolio when you reach out.' },
  { q: "What if I don't know exactly what I want?", a: "That's completely fine. The consultation is exactly where we work that out together. Bring any inspiration or just a feeling." },
]

const WA = '237682710405'

export default function BespokePage() {
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent('Hi! I am interested in a bespoke piece from Moirai. I would like to schedule a consultation.')}`

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ maxWidth: 700, position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Couture &amp; Custom</motion.p>
          <motion.h1
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,9vw,7rem)', fontWeight: 700, marginBottom: '1.5rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >Bespoke.</motion.h1>
          <motion.div className="divider" style={{ marginBottom: '2rem' }} variants={staggerFadeUp} />
          <motion.p
            variants={staggerFadeUp}
            style={{ color: '#B8A9C9', fontSize: '14px', lineHeight: 2, marginBottom: '3rem', maxWidth: 520, margin: '0 auto 3rem' }}
          >
            Your identity, tailored to perfection. A bespoke piece from Moirai is not just clothing — it is a statement of who you are becoming.
          </motion.p>
          <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Start Your Bespoke Order</a>
          </motion.div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '5rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="section-label" variants={staggerFadeUp}>How It Works</motion.p>
            <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>The Process</motion.h2>
          </motion.div>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                variants={staggerFadeUp}
                whileHover={{ borderColor: '#9B5DE5' }}
                style={{
                  padding: '3rem 2.5rem',
                  border: '1px solid #2a2133',
                  marginLeft: i === 0 ? 0 : '-1px',
                  position: 'relative',
                  transition: 'border-color 0.3s',
                }}
              >
                <motion.div
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #2D1B69, #9B5DE5)', originX: 0 }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 700, color: '#2a2133', lineHeight: 1, marginBottom: '1.5rem' }}>{step.num}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{step.title}</p>
                <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.9 }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133', borderBottom: '1px solid #2a2133' }}>
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="section-label" variants={staggerFadeUp}>Our Work</motion.p>
            <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Bespoke Gallery</motion.h2>
          </motion.div>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                variants={staggerFadeUp}
                style={{ aspectRatio: i % 3 === 0 ? '2/3' : '3/4', border: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}
              >
                <motion.img
                  src={productPhotos[i + 2]}
                  alt={`Bespoke piece ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            ))}
          </motion.div>
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '12px', color: '#7A6B8A' }}>
            Follow <a href="https://instagram.com/Moirai.th" target="_blank" rel="noopener noreferrer" style={{ color: '#9B5DE5' }}>@Moirai.th</a> on Instagram to see real pieces in the meantime.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p className="section-label" variants={staggerFadeUp}>Questions</motion.p>
            <motion.h2 variants={staggerFadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Frequently Asked</motion.h2>
          </motion.div>
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderBottom: '1px solid #2a2133', padding: '2rem 0' }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{faq.q}</p>
              <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 1.9 }}>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid #2a2133', background: 'linear-gradient(170deg, #130f18, #050407)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ maxWidth: 500, margin: '0 auto', position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.h2
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.2 }}
          >
            Ready to begin your<br />bespoke journey?
          </motion.h2>
          <motion.div variants={staggerFadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Chat With Us on WhatsApp</a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
