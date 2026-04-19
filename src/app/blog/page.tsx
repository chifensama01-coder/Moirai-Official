import { client, allPostsQuery, siteSettingsQuery, urlFor } from '@/lib/sanity'
import BlogClient from '@/components/BlogClient'

export const revalidate = 60

export default async function BlogPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let posts: any[] = []
  let settings: any = null
  try {
    const [raw, conf] = await Promise.all([
      client.fetch(allPostsQuery),
      client.fetch(siteSettingsQuery),
    ])
    settings = conf
    if (Array.isArray(raw)) {
      posts = raw
    }
  } catch {
    // Sanity not yet configured
  }

  const blogHeroImage = settings?.blogHeroImage ? urlFor(settings.blogHeroImage).url() : null

  return <BlogClient posts={posts} blogHeroImage={blogHeroImage} />
}
