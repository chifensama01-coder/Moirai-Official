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
  const partners = settings?.partners?.map((p: any) => ({
    name: p.name,
    logo: p.logo ? urlFor(p.logo).url() : undefined
  })) || []
  const team = settings?.team?.map((t: any) => ({
    name: t.name,
    role: t.role,
    image: t.image ? urlFor(t.image).url() : undefined
  })) || []
  const ceo = settings?.ceo ? {
    name: settings.ceo.name,
    bio: settings.ceo.bio,
    image: settings.ceo.image ? urlFor(settings.ceo.image).url() : undefined
  } : undefined

  return <AboutClient aboutImage={aboutImage} partners={partners} ceo={ceo} team={team} />
}
