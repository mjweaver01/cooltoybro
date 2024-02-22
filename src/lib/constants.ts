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
  {
    slug: 'best',
    title: 'Best',
    link: '/products/best',
    products: products.filter((p) => p.collections.includes('best')),
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
    slug: 'survey',
    title: 'Survey',
    link: '/survey',
  },
  {
    slug: 'bro',
    title: 'Bro?',
    link: '/about',
  },
]
