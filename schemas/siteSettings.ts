import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string', description: 'Include country code e.g. 237682710405' }),
    defineField({ name: 'whatsappDefaultMessage', title: 'Default WhatsApp Message', type: 'string', initialValue: "Hi, I'd like to inquire about Moirai" }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'tiktok', title: 'TikTok URL', type: 'url' }),
    defineField({ name: 'heroTagline', title: 'Hero Tagline', type: 'string', initialValue: 'Destiny, Tailored.' }),
    defineField({ name: 'heroSubtext', title: 'Hero Subtext', type: 'string', initialValue: 'Not a Trend. IDENTITY.' }),
    defineField({ name: 'aboutText', title: 'About Text', type: 'array', of: [{ type: 'block' }] }),
  ],
})
