import type { SchemaTypeDefinition } from 'sanity'
import product from './product'
import post from './post'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, post, siteSettings],
}