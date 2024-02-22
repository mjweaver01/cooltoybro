import { products } from './products'

export const siteName = 'Cool Toy, Bro! 🧸'
export const collections = [
  {
    slug: 'cheap',
    title: 'Cheap',
    link: '/products/cheap',
    products: products.filter((p) => p.collections.includes('cheap')),
  },
  {
    slug: 'expensive',
    title: 'Expensive',
    link: '/products/expensive',
    products: products.filter((p) => p.collections.includes('expensive')),
  },
]

export const navItems = [
  {
    slug: 'all',
    title: 'All',
    link: '/',
  },
  ...collections.map(({ title, link, slug }) => ({ title, link, slug })),
  {
    slug: 'bro',
    title: 'Bro?',
    link: '/about',
  },
  {
    slug: 'survey',
    title: 'Survey',
    link: '/survey',
  },
]
