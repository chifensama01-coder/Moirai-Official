import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Product Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'price', title: 'Price (e.g. 45,000 XAF)', type: 'string' }),
    defineField({ name: 'whatsappMessage', title: 'WhatsApp Enquiry Message', type: 'string', description: 'Pre-filled WhatsApp message when customer enquires' }),
    defineField({ name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'collection', title: 'Collection', type: 'reference', to: [{ type: 'collection' }] }),
    defineField({ name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'available', title: 'Available', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'name', media: 'image', subtitle: 'price' } },
})
