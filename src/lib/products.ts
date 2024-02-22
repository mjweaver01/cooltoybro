import { generateUTM } from '@/lib/helpers'

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

// @todo generate this somehow with a scraper? gpt?
export const products: ProductRecord[] = [
  {
    slug: 'nvidia-rtx-4090',
    title: 'NVIDIA RTX 4090',
    images: ['https://m.media-amazon.com/images/I/51c1zFDNVmL._AC_SX679_.jpg'],
    collections: ['expensive'],
    description:
      "The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds with ray tracing, unprecedented productivity, and new ways to create. It's powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators.",
    additionalInformation: `
      <h2 class="text-3xl font-bold mb-2 mt-4" data-svelte-h="svelte-1hps2m5">Specs</h2>
      <ul class="pl-4">
        <li class="list-disc">16,384 NVIDIA CUDA Cores</li>
        <li class="list-disc">Supports 4K 120Hz HDR, 8K 60Hz HDR, and Variable Refresh Rate as specified in HDMI 2.1a</li>
        <li class="list-disc">New Streaming Multiprocessors: Up to 2x performance and power efficiency</li>
        <li class="list-disc">Fourth-Gen Tensor Cores: Up to 2x AI performance</li>
        <li class="list-disc">Third-Gen RT Cores: Up to 2x ray tracing performance</li>
        <li class="list-disc">AI-Accelerated Performance: NVIDIA DLSS 3</li>
        <li class="list-disc">Game-Winning Responsiveness: NVIDIA Reflex low-latency platform</li>
        <li class="list-disc">Built for Live Streaming: NVIDIA Encoder</li>
        <li class="list-disc">8K HDR Gaming</li>
      </ul>
    `,
    link: 'https://amzn.to/3T6Kmoc',
    cost: 2359.99,
    rank: {
      cost: 5,
      quality: 5,
      vibes: 5,
      description:
        'As one of the most coveted graphics cards in the game, this card maxes out the CQV, bro! A small price to pay for excellence; no if ands or butts.',
    },
  },
  {
    slug: 'wilson-airless-gen-1-basketball',
    title: 'Wilson Airless Gen 1 Basketball',
    images: [
      'https://www.wilson.com/en-us/media/catalog/product/article_images/WZ1016101IDV_/WZ1016101IDV__ca113d1c69a7be7dd3b80c2c0516e9b4.png?dpr=2&fit=bounds&orient=1&quality=95&optimize=high&format=pjpg&auto=webp&enable=upscale&width=778&height=950&canvas=1556%2C1900&bg-color=f5f5f5',
      'https://www.wilson.com/sites/default/files/styles/quilt_2x1/public/24-0108_Airless_Basketball_ePDP_TechBlock1.png?',
      'https://www.wilson.com/sites/default/files/styles/quilt_2x1/public/24-0108_Airless_Basketball_ePDP_TechBlock2.png?',
      'https://www.wilson.com/sites/default/files/styles/quilt_2x1/public/24-0108_Airless_Basketball_ePDP_TechBlock4.png?',
      'https://www.wilson.com/sites/default/files/styles/quilt_2x1/public/24-0108_Airless_Basketball_ePDP_TechBlock3.png?',
    ],
    collections: ['expensive'],
    description: `<p class="product-description_content"><strong>WELCOME TO THE ERA OF AIRLESS</strong><br><br>After the 2023 unveiling of the Wilson Airless Prototype, the next step was clear: make it possible for the world to experience the future of sport for themselves. Enter Wilson Airless Gen1, an updated iteration of the original innovative concept.<br><br>Rather than being inflated, Airless Gen1 relies on a 3D-printed polymer lattice structure. The basketball nearly fits the performance specifications of a regulation basketball, including its weight, size and rebound (bounce). The form of the ball features 8 panel-like lobes and a familiar seam structure, with hexagonal holes across the surface allowing air to pass through freely. Each Airless Gen1 comes with a case, stand, and 3-letter customizable tag.</p><br/>`,
    additionalInformation:
      '<div class="panel-pane pane-fieldable-panels-pane pane-uuid-5c4f8b30-d0c7-4d9b-8691-a844b739c33e pane-bundle-wilson-youtube-slim-banner">            <div class="pane-content">    <div class="fieldable-panels-pane">      <div class="field-collection-container clearfix"><div class="banner-hero -mt-none -w-100">    <div class="video-container text-center">        <iframe id="youtube-player-147616" width="960" height="540?>" title="240209 Wilson MAIN FILM 16x9 FV 01" src="https://www.youtube.com/embed/UNsBUBgh9zA?wmode=opaque&amp;controls=1&amp;rel=0" frameborder="0" allowfullscreen="">          Video of 240209 Wilson MAIN FILM 16x9 FV 01        </iframe>    </div></div></div></div>  </div>    </div>',
    link: generateUTM(
      'wilson.com/en-us/product/airless-gen1-bskt-brown-wz1016101idv#colorsteamname%3D114881&size%3D52577',
    ),
    cost: 2500,
    rank: {
      cost: 5,
      quality: 3,
      vibes: 3,
      description:
        "This is pretty cool, but I'm not spending 2 and a half racks on this; ill try printing my own for that, sheit.",
    },
  },
  {
    slug: 'flipper-zero',
    title: 'Flipper Zero',
    images: [
      'https://shop.flipperzero.one/cdn/shop/products/top.png?v=1671722838',
      'https://shop.flipperzero.one/cdn/shop/products/side.png?v=1671722838',
      'https://shop.flipperzero.one/cdn/shop/products/bottom-uwu.png?v=1671722807',
    ],
    collections: ['expensive'],
    description: `Flipper Zero is a portable multi-tool for pentesters and geeks in a toy-like body. It loves hacking digital stuff, such as radio protocols, access control systems, hardware, and more. It's fully open-source and customizable, so you can extend it in whatever way you like.`,
    additionalInformation: '',
    link: generateUTM('https://shop.flipperzero.one/'),
    cost: 169,
    rank: {
      cost: 4,
      quality: 4,
      vibes: 4,
      description: 'A pretty awesome toy for the aspiring nerd, nerd adjacent, or nerd curious.',
    },
  },
  {
    slug: 'raspberry-pi-zero-2-w',
    title: 'Raspberry Pi Zero 2 W',
    images: [
      'https://m.media-amazon.com/images/I/610Q+AtlC0L._AC_SX679_.jpg',
      'https://assets.raspberrypi.com/static/51035ec4c2f8f630b3d26c32e90c93f1/2b8d7/zero2-hero.webp',
    ],
    collections: ['expensive'],
    description: `At the heart of Raspberry Pi Zero 2 W is RP3A0, a custom-built system-in-package designed by Raspberry Pi in the UK. With a quad-core 64-bit ARM Cortex-A53 processor clocked at 1GHz and 512MB of SDRAM, Zero 2 is up to five times as fast as the original Raspberry Pi Zero. Wireless LAN is built in to a shielded enclosure with improved RF compliance, giving you more flexibility when designing with Raspberry Pi Zero 2 W. All in the same tiny 65mm × 30mm form factor.`,
    additionalInformation: `
      <h2 class="text-3xl font-bold mb-2 mt-4" data-svelte-h="svelte-1hps2m5">Specs</h2>
      <p>1GHz quad-core 64-bit Arm Cortex-A53 CPU</p>
      <p>512MB SDRAM</p>
      <p>2.4GHz 802.11 b/g/n wireless LAN</p>
      <p>Bluetooth 4.2, Bluetooth Low Energy (BLE), onboard antenna</p>
      <p>Mini HDMI® port and micro USB On-The-Go (OTG) port</p>
      <p>microSD card slot</p>
      <p>CSI-2 camera connector</p>
      <p>HAT-compatible 40-pin header footprint (unpopulated)</p>
      <p>H.264, MPEG-4 decode (1080p30); H.264 encode (1080p30)</p>
      <p>OpenGL ES 1.1, 2.0 graphics</p>
      <p>Micro USB power</p>
      <p>Composite video and reset pins via solder test points</p>
      <p>65mm x 30mm</p>
    `,
    link: 'https://amzn.to/49DopDn',
    cost: 25.99,
    rank: {
      cost: 1,
      quality: 5,
      vibes: 5,
      description:
        "Truly one of the biggest bangs for your buck. A QUAD CORE COMPUTER that is HALF THE SIZE OF A CREDIT CARD. I mean, cmon. This thing can run a minecraft server. And it's under $30. Are you not impressed???? A true CQV dinger 🔔🔔🔔🔔🔔",
    },
  },
]

// https://m.media-amazon.com/images/I/610Q+AtlC0L._AC_SX679_.jpg
