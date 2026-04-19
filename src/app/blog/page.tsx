import { client, allPostsQuery } from '@/lib/sanity'
import BlogClient from '@/components/BlogClient'

export const revalidate = 60

export default async function BlogPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let posts: any[] = []
  try {
    const raw = await client.fetch(allPostsQuery)
    if (Array.isArray(raw)) {
      posts = raw
    }
  } catch {
    // Sanity not yet configured
  }

  return <BlogClient posts={posts} />
}
