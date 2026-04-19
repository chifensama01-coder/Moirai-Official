import Link from 'next/link'
import Image from 'next/image'
import { client, postBySlugQuery, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

const ptComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      return (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', margin: '3rem 0', border: '1px solid #2a2133', overflow: 'hidden' }}>
          <Image src={urlFor(value).width(800).url()} alt={value.alt || ' '} fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: 'cover' }} />
        </div>
      )
    }
  },
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children }: any) => <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, margin: '3.5rem 0 1.5rem', color: '#E0AAFF' }}>{children}</h2>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children }: any) => <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, margin: '2.5rem 0 1rem', color: '#E0AAFF' }}>{children}</h3>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ children }: any) => <blockquote style={{ borderLeft: '2px solid #9B5DE5', background: 'rgba(155,93,229,0.05)', padding: '1.5rem', margin: '2.5rem 0', fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#B8A9C9', fontSize: '1.2rem', lineHeight: 1.7 }}>{children}</blockquote>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children }: any) => <p style={{ color: '#B8A9C9', fontSize: '14.5px', lineHeight: 2, marginBottom: '1.5rem' }}>{children}</p>
  }
}

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
            {post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 400, color: '#F0EBF8', lineHeight: 1.2 }}>{post?.title || 'Untitled Post'}</h1>
        </div>
      </section>

      {/* Cover image */}
      {post?.mainImage ? (
        <div style={{ maxWidth: 900, margin: '4rem auto 0', padding: '0 2rem', position: 'relative', height: 500 }}>
          <img src={urlFor(post.mainImage).width(1200).quality(80).url()} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid #2a2133' }} />
        </div>
      ) : (
        <div style={{ maxWidth: 900, margin: '4rem auto 0', padding: '0 2rem', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
          <span style={{ fontSize: '12px', color: '#B8A9C9', letterSpacing: '0.1em' }}>(No cover image)</span>
        </div>
      )}

      {/* Body */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        {post?.excerpt && (
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontStyle: 'italic', color: '#B8A9C9', lineHeight: 1.8, marginBottom: '3rem', borderLeft: '2px solid #9B5DE5', paddingLeft: '1.5rem' }}>
            {post.excerpt}
          </p>
        )}

        {post?.body ? (
          <PortableText value={post.body} components={ptComponents} />
        ) : null}

        {/* Gallery */}
        {Array.isArray(post?.gallery) && post.gallery.length > 0 && (
          <div style={{ marginTop: '4rem' }}>
            <div className="divider" style={{ marginBottom: '2rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '2rem', color: '#E0AAFF' }}>Gallery</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {post.gallery.map((img: any, idx: number) => (
                <div key={idx} style={{ position: 'relative', aspectRatio: '1', border: '1px solid #2a2133', overflow: 'hidden' }}>
                    <img src={urlFor(img).width(600).quality(80).url()} alt={`${post.title} gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #2a2133', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog" className="btn-ghost">← Back to Journal</Link>
          <a href="https://instagram.com/Moirai.th" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#7A6B8A', textTransform: 'uppercase' }}>Follow @Moirai.th</a>
        </div>
      </article>
    </div>
  )
}
