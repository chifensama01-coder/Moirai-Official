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
  }))

  const heroImageUrl = settings?.heroImage ? urlFor(settings.heroImage).url() : undefined
  const heroText = settings?.heroText

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categories = settings?.categories?.map((c: any) => ({
    title: c.title,
    url: c.image ? urlFor(c.image).url() : '',
  })).filter((c: any) => c.url) || []

  return (
    <HomeClient
      products={productsWithUrls}
      posts={posts}
      waNumber={waNumber}
      waMsg={waMsg}
      categories={categories}
      heroImageUrl={heroImageUrl}
      heroText={heroText}
    />
  )
}

