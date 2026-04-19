import Link from 'next/link'
import { client, postBySlugQuery, urlFor } from '@/lib/sanity'

export const revalidate = 60

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BlockChild = { text?: string; marks?: string[] }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Block = { _type: string; _key: string; style?: string; children?: BlockChild[] }

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let post: any = null
  try {
    post = await client.fetch(postBySlugQuery, { slug })
  } catch {
    // Sanity not yet configured
  }

  if (!post) {
    return (
      <div style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '60vh' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem', color: '#F0EBF8' }}>Post not found.</p>
        <Link href="/blog" className="btn-ghost">← Back to Journal</Link>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Header */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', background: '#0d0b10', borderBottom: '1px solid #2a2133' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link href="/blog" style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', display: 'inline-block', marginBottom: '2rem' }}>← The Journal</Link>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#7A6B8A', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 400, color: '#F0EBF8', lineHeight: 1.2 }}>{post.title}</h1>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div style={{ maxWidth: 900, margin: '4rem auto 0', padding: '0 2rem' }}>
          <img src={urlFor(post.coverImage).width(1000).url()} alt={post.title} style={{ width: '100%', maxHeight: 500, objectFit: 'cover', border: '1px solid #2a2133' }} />
        </div>
      )}

      {/* Body */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        {post.excerpt && (
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontStyle: 'italic', color: '#B8A9C9', lineHeight: 1.8, marginBottom: '3rem', borderLeft: '2px solid #9B5DE5', paddingLeft: '1.5rem' }}>
            {post.excerpt}
          </p>
        )}

        {post.body && post.body.map((block: Block, i: number) => {
          if (block._type === 'block') {
            const text = block.children?.map(c => c.text || '').join('') || ''
            if (block.style === 'h2') return <h2 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, margin: '3rem 0 1rem', color: '#E0AAFF' }}>{text}</h2>
            if (block.style === 'h3') return <h3 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, margin: '2rem 0 1rem', color: '#E0AAFF' }}>{text}</h3>
            if (block.style === 'blockquote') return <blockquote key={i} style={{ borderLeft: '2px solid #9B5DE5', paddingLeft: '1.5rem', margin: '2rem 0', fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#B8A9C9', fontSize: '1.1rem', lineHeight: 1.7 }}>{text}</blockquote>
            return <p key={i} style={{ color: '#B8A9C9', fontSize: '14px', lineHeight: 2, marginBottom: '1.5rem' }}>{text}</p>
          }
          return null
        })}

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #2a2133', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog" className="btn-ghost">← Back to Journal</Link>
          <a href="https://instagram.com/Moirai.th" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#7A6B8A', textTransform: 'uppercase' }}>Follow @Moirai.th</a>
        </div>
      </article>
    </div>
  )
}
