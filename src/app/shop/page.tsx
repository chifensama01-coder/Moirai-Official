import { client, urlFor } from '@/lib/sanity'
import ShopClient from '@/components/ShopClient'

export const revalidate = 60

export default async function ShopPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let products: any[] = []

  try {
    const raw = await client.fetch(`*[_type == "product"]{
      _id,
      title,
      slug,
      price,
      image,
      category,
      description
    }`)
    if (Array.isArray(raw)) {
      products = raw
    }
  } catch {
    // Sanity not yet configured
  }

  // Resolve image URLs on the server side
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productsWithUrls = products.map((p: any) => ({
    ...p,
    imageUrl: p.image ? urlFor(p.image).url() : null,
  }))

  return <ShopClient products={productsWithUrls} />
}
