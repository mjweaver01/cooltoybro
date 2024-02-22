export const siteName = 'Cool Toy, Bro! 🧸'

export const collections = [
  {
    title: 'All',
    link: '/',
  },
  {
    title: 'Cheap',
    link: '/?sort=cheap',
  },
  {
    title: 'Expensive',
    link: '/?sort=expensive',
  },
  {
    title: 'Bro?',
    link: '/about',
  },
]

export const emptyProduct = {
  slug: '',
  title: '',
  images: [''],
  collections: [''],
  description: '',
  additionalInformation: '',
  link: '',
  cost: 0,
  rank: {
    cost: 0,
    quality: 0,
    vibes: 0,
    description: '',
  },
}

export type ProductRecord = typeof emptyProduct

export const products: ProductRecord[] = [
  {
    slug: 'rtx-4090',
    title: 'RTX 4090',
    images: ['https://m.media-amazon.com/images/I/51c1zFDNVmL._AC_SX679_.jpg'],
    collections: ['expensive'],
    description:
      "The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds with ray tracing, unprecedented productivity, and new ways to create. It's powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators.",
    additionalInformation: '',
    link: 'https://amzn.to/3T6Kmoc',
    cost: 2359.99,
    rank: {
      cost: 5,
      quality: 5,
      vibes: 5,
      description:
        'As one of the most coveted graphics cards in the game, this card maxes out the CQS, bro! A small price to pay for excellence!',
    },
  },
]
