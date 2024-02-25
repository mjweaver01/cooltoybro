import { products } from './products'

export const siteName = 'Cool Toy, Bro!'
export const siteDescription =
  'Welcome to Cool Toy, Bro! where we find all the coolest toys for you, or your bro!'

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

export const survey = [
  {
    id: 'step-1',
    title: "How ballin' is your bro?",
    options: [
      {
        title: 'HOT 🔥',
        value: 'expensive',
      },
      {
        title: 'NOT 📦',
        value: 'cheap',
      },
    ],
  },
  {
    id: 'step-2',
    title: "What's your bro into?",
    options: [
      {
        title: 'TECH 🤓',
        value: 'tech',
      },
      {
        title: 'SPORTS ⚾🏀🏈',
        value: 'sport',
      },
    ],
  },
  {
    id: 'step-3',
    title: 'How smart is your bro?',
    options: [
      {
        title: 'ROCK 🪨',
        value: 'smart',
      },
      {
        title: 'ASTRONAUT 🚀',
        value: 'dumb',
      },
    ],
  },
]
