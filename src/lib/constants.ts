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
    products: products.filter(
      (p) =>
        p.collections.includes('best') ||
        (p.flair && p.flair.toString().toLowerCase().includes('best')),
    ),
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
    slug: 'gift-finder',
    title: 'Gift Finder',
    link: '/gift-finder',
  },
  {
    slug: 'bro',
    title: 'Bro?',
    link: '/about',
  },
]

export const quiz = [
  {
    id: 'step-1',
    title: "How ballin' is your bro?",
    options: [
      {
        title: 'HOT 🔥 (Expensive taste)',
        value: 'expensive',
      },
      {
        title: 'NOT 📦 (Tight wad)',
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
      {
        title: 'OTHER 👨 (lifestyle)',
        value: 'lifestyle',
      },
    ],
  },
  {
    id: 'step-3',
    title: 'How smart is your bro?',
    options: [
      {
        title: 'ROCK 🪨 (Easy use)',
        value: 'easy',
      },
      {
        title: 'ROCKET MAN 🚀  (Hard mode)',
        value: 'hard',
      },
    ],
  },
]

export const sortOptions = [
  {
    title: 'Featured',
    value: 'featured',
  },
  {
    title: 'Newest',
    value: 'newest',
  },
  {
    title: 'A to Z',
    value: 'atoz',
  },
  {
    title: 'Z to A',
    value: 'ztoa',
  },
  {
    title: 'Price: Low',
    value: 'low',
  },
  {
    title: 'Price: High',
    value: 'high',
  },
]
