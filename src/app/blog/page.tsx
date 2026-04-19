import { client, allPostsQuery, urlFor } from '@/lib/sanity'
import BlogClient from '@/components/BlogClient'

export const revalidate = 60

export default async function BlogPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let posts: any[] = []
  try {
    const raw = await client.fetch(allPostsQuery)
    // Resolve image URLs on the server to avoid passing functions to Client Components
    if (Array.isArray(raw)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      posts = raw.map((p: any) => ({
        ...p,
        coverImageUrl: p.coverImage ? urlFor(p.coverImage).width(400).url() : null,
      }))
    }
  } catch {
    // Sanity not yet configured
  }

  return <BlogClient posts={posts} />
}
