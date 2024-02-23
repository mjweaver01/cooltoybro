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

const survey = [
  {
    id: 'step-1',
    title: "How ballin' is your bro?",
    options: [
      {
        id: 'expensive',
        title: 'HOT 🔥',
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
        id: 'tech',
        title: 'TECH 🤓',
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
        id: 'smart',
        title: 'ROCK 🪨',
      },
      {
        title: 'ASTRONAUT 🚀',
        value: 'dumb',
      },
    ],
  },
]

// airpods pro https://amzn.to/48zXUgM
// airpods max https://amzn.to/42M1S4x
// mbp 13" m3 max https://amzn.to/3SStMqK
// magic trackpad https://amzn.to/42OKOL3
// magic keyboard https://amzn.to/49LFKta
// haworth fern https://amzn.to/49KreSx

// adobe affiliate program submitted
// alibaba affiliate program submitted
// rakuten affiliate program submitted
