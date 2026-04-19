import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source)

export const featuredProductsQuery = `*[_type == "product" && featured == true] | order(_createdAt desc)[0...6] {
  _id, name, slug, price, image, collection->{ title }
}`

export const allProductsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id, name, slug, price, image, available, description, collection->{ title }
}`

export const featuredCollectionsQuery = `*[_type == "collection" && featured == true] | order(_createdAt desc)[0...3] {
  _id, title, slug, season, coverImage, description
}`

export const allCollectionsQuery = `*[_type == "collection"] | order(_createdAt desc) {
  _id, title, slug, season, coverImage, description
}`

export const recentPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id, title, slug, excerpt, mainImage, publishedAt
}`

export const allPostsQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, excerpt, mainImage, body, publishedAt
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`
