import { client, allProductsQuery, siteSettingsQuery, urlFor } from '@/lib/sanity'
import CollectionsClient from '@/components/CollectionsClient'

export const revalidate = 60

export default async function CollectionsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let products: any[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let settings: any = null

  try {
    ;[products, settings] = await Promise.all([
      client.fetch(allProductsQuery),
      client.fetch(siteSettingsQuery),
    ])
  } catch {
    // Sanity not yet configured
  }

  const waNumber = (settings?.whatsappNumber || '237682710405').replace(/\D/g, '')

  // Resolve image URLs on the server side (functions can't cross server→client boundary)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productsWithUrls = products.map((p: any) => ({
    ...p,
    imageUrl: p.image ? urlFor(p.image).width(480).url() : null,
  }))

  const collections = Array.isArray(settings?.collections) ? settings.collections : []
  const collectionsHeroImage = settings?.collectionsHeroImage ? urlFor(settings.collectionsHeroImage).width(1200).quality(80).url() : null

  // Group products by collection
  const grouped: Record<string, typeof productsWithUrls> = {}
  collections.forEach((c: any) => { grouped[c.title] = [] })
  productsWithUrls.forEach(p => {
    const cat = p.category?.title
    if (cat && grouped[cat]) grouped[cat].push(p)
  })

  return <CollectionsClient grouped={grouped} waNumber={waNumber} collections={collections} heroImage={collectionsHeroImage} />
}
