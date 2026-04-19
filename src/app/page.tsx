import { client, featuredProductsQuery, recentPostsQuery, siteSettingsQuery, urlFor } from '@/lib/sanity'
import HomeClient from '@/components/HomeClient'

export const revalidate = 60

export default async function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let products: any[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let posts: any[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let settings: any = null

  try {
    ;[products, posts, settings] = await Promise.all([
      client.fetch(featuredProductsQuery),
      client.fetch(recentPostsQuery),
      client.fetch(siteSettingsQuery),
    ])
  } catch {
    // Sanity not yet configured
  }

  const waNumber = (settings?.whatsappNumber || '237682710405').replace(/\D/g, '')
  const waMsg = encodeURIComponent("Hi, I'd like to inquire about Moirai")

  // Resolve image URLs on the server (can't pass functions to Client Components)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productsWithUrls = products.map((p: any) => ({
    ...p,
    imageUrl: p.image ? urlFor(p.image).width(520).url() : null,
    images: Array.isArray(p.images) ? p.images.map((img: any) => img ? urlFor(img).width(520).url() : null).filter(Boolean) : [],
  }))

  const heroImageUrl = settings?.heroImage ? urlFor(settings.heroImage).url() : undefined
  const heroText = settings?.heroText

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const collections = settings?.collections?.map((c: any) => ({
    title: c.title,
    slug: c.slug || c.title?.toLowerCase().replace(/ /g, '-'),
    image: c.image ? urlFor(c.image).url() : '',
  })).filter((c: any) => c.image || c.title) || []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const heroSlides = settings?.heroSlides?.map((s: any) => ({
    title: s.title,
    subtitle: s.subtitle,
    image: s.image ? urlFor(s.image).width(1600).quality(90).url() : '',
  })) || []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lookbook = settings?.lookbook?.map((l: any) => ({
    title: l.title,
    description: l.description,
    image: l.image ? urlFor(l.image).width(800).quality(85).url() : '',
  })) || []

  return (
    <HomeClient
      products={productsWithUrls}
      posts={posts}
      waNumber={waNumber}
      waMsg={waMsg}
      collections={collections}
      heroImageUrl={heroImageUrl}
      heroText={heroText}
      heroSlides={heroSlides}
      lookbook={lookbook}
    />
  )
}

