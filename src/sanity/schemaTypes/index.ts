import type { SchemaTypeDefinition } from 'sanity'
import category from './category'
import product from './product'
import post from './post'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product, post, siteSettings],
}