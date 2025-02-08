import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { maleSchema } from './male'
import { femaleSchema } from './female'
import { kidsSchema } from './kids'
// import { UserLogin } from './login'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, maleSchema, femaleSchema, kidsSchema],
}
