import { client, allProductsQuery, siteSettingsQuery, urlFor } from '@/lib/sanity'
import CollectionsClient from '@/components/CollectionsClient'

export const revalidate = 60

const CATEGORY_LIST = ['Bespoke', 'Corsets', 'Cocktail Dresses', 'Cameroonian Traditional']

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

  // Group products by collection
  const grouped: Record<string, typeof productsWithUrls> = {}
  CATEGORY_LIST.forEach(c => { grouped[c] = [] })
  productsWithUrls.forEach(p => {
    const cat = p.collection?.title || 'Other'
    if (grouped[cat]) grouped[cat].push(p)
  })

  return <CollectionsClient grouped={grouped} waNumber={waNumber} />
}
