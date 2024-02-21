/**
 * Retrieves product data based on the provided session cookie.
 * @param {string} cookie - The session cookie string to verify and extract user's product data from.
 * @returns {Promise<any | null>} - A promise that resolves with the user's products, if authenticated, otherwise null.
 */

import { db } from '@/firebase/client'

async function getProducts(cookie: string | null) {
  // If there's no cookie, return null immediately.
  if (cookie === null) {
    return null
  }

  try {
    return await db.collection('products').doc(cookie).get()
  } catch (error) {
    console.error(`Error fetching products for :${cookie}`, error)
    return null // Return null in case of any error.
  }
}
export default getProducts
