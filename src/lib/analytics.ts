import { type ProductRecord } from '@/lib/products'

export const trackConversion = (product: ProductRecord) => {
  // @ts-ignore
  window.dataLayer.push({ event: 'conversion', value: product.price, currency: 'USD' })
}
