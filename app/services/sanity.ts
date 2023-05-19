import { createClient } from '@sanity/client'
import { definePreview } from '@sanity/preview-kit'

export const projectId = process.env.SANITY_PROJECT_ID || ''
export const dataset = process.env.SANITY_DATASET || 'production'
export const apiVersion = process.env.SANITY_API_VERSION || '2023-05-01'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
export const usePreview = definePreview({ projectId, dataset })
