import { client, urlFor } from '@/lib/sanity'
import AboutClient from '@/components/AboutClient'

export const revalidate = 60

export default async function AboutPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let settings: any = null

  try {
    settings = await client.fetch(`*[_type == "siteSettings"][0]`)
  } catch {
    // Sanity not yet configured
  }

  const aboutImage = settings?.aboutHeroImage ? urlFor(settings.aboutHeroImage).url() : undefined

  return <AboutClient aboutImage={aboutImage} />
}
