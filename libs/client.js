import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'tech-diary',
  apiKey: process.env.API_KEY
})