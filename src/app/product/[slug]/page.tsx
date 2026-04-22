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
       images,
       category->{title},
       description,
       sizeGuide,
       fabricDetails,
       deliveryInfo,
       relatedProducts[]->{
         _id, title, slug, price, image
       }
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
    price: product.price || 0,
    desc: product.description || '',
    category: product.category?.title || 'Other',
    image: product.image ? urlFor(product.image).url() : null,
    images: Array.isArray(product.images) ? product.images.map((img: any) => img ? urlFor(img).url() : null).filter(Boolean) : [],
    sizeGuide: product.sizeGuide,
    fabricDetails: product.fabricDetails,
    deliveryInfo: product.deliveryInfo,
    relatedProducts: Array.isArray(product.relatedProducts) ? product.relatedProducts.filter(Boolean).map((rel: any) => ({
      ...rel,
      image: rel.image ? urlFor(rel.image).url() : null
    })) : [],
    slug
  }

  return <ProductDetailClient product={parsedProduct} />
}
