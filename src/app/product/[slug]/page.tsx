import { client, urlFor } from '@/lib/sanity'
import ProductDetailClient from '@/components/ProductDetailClient'
import { notFound } from 'next/navigation'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params

  let product: any = null

  try {
    product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]{
       _id,
       title,
       price,
       image,
       category,
       description
    }`, { slug })
  } catch {
    //
  }

  if (!product) {
    notFound()
  }

  const parsedProduct = {
    id: product._id,
    name: product.title || 'Product',
    price: product.price ? `$${product.price}` : 'Price on request',
    desc: product.description || '',
    category: product.category || 'Other',
    image: product.image ? urlFor(product.image).url() : null,
  }

  return <ProductDetailClient product={parsedProduct} />
}
