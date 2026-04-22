import { client, urlFor } from '@/lib/sanity'
import BespokeClient from '@/components/BespokeClient'

export const revalidate = 60

export default async function BespokePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let settings: any = null

  try {
    settings = await client.fetch(`*[_type == "siteSettings"][0]`)
  } catch {
    // Sanity not yet configured
  }

  const heroImage = settings?.bespokeHeroImage ? urlFor(settings.bespokeHeroImage).url() : undefined
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gallery = settings?.bespokeGallery?.map((item: any) => ({
    url: item.image ? urlFor(item.image).url() : undefined,
    alt: item.alt || '',
  })).filter((i: any) => i.url) || []

  return <BespokeClient heroImage={heroImage} gallery={gallery} />
}
