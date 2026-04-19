'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerFadeUp } from '@/lib/animations'

const PREVIEW_POSTS = [
  { title: 'The Meaning Behind Moirai', excerpt: 'Why we named our brand after the Greek Fates — and what it means for how we design.' },
  { title: 'Why Bespoke Fashion Matters', excerpt: 'In a world of fast fashion, choosing custom is a radical act of self-expression.' },
  { title: 'How to Choose the Perfect Corset', excerpt: 'A guide to finding the silhouette, structure, and style that speaks to you.' },
  { title: 'Heritage Reimagined: The Cameroonian Collection', excerpt: 'How we draw from tradition to create pieces that feel both ancient and entirely new.' },
]

interface BlogClientProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any[]
}

export default function BlogClient({ posts }: BlogClientProps) {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Header */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <motion.div
          style={{ position: 'relative', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label" variants={staggerFadeUp}>Stories &amp; Style</motion.p>
          <motion.h1
            variants={staggerFadeUp}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >The Journal</motion.h1>
          <motion.div className="divider" variants={staggerFadeUp} />
        </motion.div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          {posts.length > 0 ? (
            posts.map((post, i) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.62, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/blog/${post.slug?.current}`} style={{ display: 'block' }}>
                  <motion.article
                    style={{ display: 'grid', gridTemplateColumns: post.coverImage ? '1fr 200px' : '1fr', gap: '2rem', alignItems: 'center', borderBottom: '1px solid #2a2133', padding: '3rem 0' }}
                    whileHover={{ paddingLeft: '1.25rem' }}
                    transition={{ duration: 0.25 }}
                  >
                    <div>
                      <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                      </p>
                      <motion.h2
                        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 400, color: '#F0EBF8', marginBottom: '0.75rem' }}
                        whileHover={{ color: '#C77DFF' }}
                        transition={{ duration: 0.2 }}
                      >{post.title}</motion.h2>
                      {post.excerpt && <p style={{ color: '#7A6B8A', fontSize: '13px', lineHeight: 1.8 }}>{post.excerpt}</p>}
                      <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginTop: '1rem' }}>Read More →</p>
                    </div>
                    {post.coverImageUrl && (
                      <div style={{ aspectRatio: '4/3', overflow: 'hidden', border: '1px solid #2a2133' }}>
                        <motion.img
                          src={post.coverImageUrl}
                          alt={post.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          whileHover={{ scale: 1.07 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    )}
                  </motion.article>
                </Link>
              </motion.div>
            ))
          ) : (
            <>
              <p style={{ color: '#7A6B8A', fontSize: '13px', textAlign: 'center', marginBottom: '3rem' }}>
                The journal is coming soon. Add posts from the admin panel at <Link href="/studio" style={{ color: '#9B5DE5' }}>/studio</Link>. Here&apos;s a preview of what&apos;s coming:
              </p>
              {PREVIEW_POSTS.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ borderBottom: '1px solid #2a2133', padding: '3rem 0', opacity: 0.4 }}
                >
                  <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Coming Soon</p>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,3vw,1.8rem)', fontWeight: 400, color: '#F0EBF8', marginBottom: '0.5rem' }}>{p.title}</h2>
                  <p style={{ color: '#7A6B8A', fontSize: '13px', lineHeight: 1.8 }}>{p.excerpt}</p>
                </motion.article>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
