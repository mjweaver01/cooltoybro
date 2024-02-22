import { generateUTM } from '@/lib/helpers'

export const emptyProduct = {
  slug: '',
  title: '',
  images: [''],
  collections: [''],
  tags: [''],
  description: '',
  additionalInformation: '',
  links: [{ title: '', link: '' }],
  price: 0,
  rank: {
    price: 0,
    quality: 0,
    vibes: 0,
    description: '',
  },
}

export type ProductRecord = typeof emptyProduct & { salePrice?: number; flair?: string[] }

// @todo generate this somehow with a scraper? gpt?
export const products: ProductRecord[] = [
  {
    slug: 'nvidia-rtx-4090',
    title: 'NVIDIA RTX 4090',
    images: ['https://m.media-amazon.com/images/I/51c1zFDNVmL._AC_SX679_.jpg'],
    collections: ['expensive', 'best'],
    tags: ['nvidia', 'rtx', '4090', 'graphics', 'card'],
    flair: ['Best Graphics Card'],
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
    links: [{ title: 'Amazon', link: 'https://amzn.to/3T6Kmoc' }],
    price: 2359.99,
    rank: {
      price: 5,
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
    tags: ['basketball', 'airless', '3d', 'print'],
    description: `<p class="product-description_content"><strong>WELCOME TO THE ERA OF AIRLESS</strong><br><br>After the 2023 unveiling of the Wilson Airless Prototype, the next step was clear: make it possible for the world to experience the future of sport for themselves. Enter Wilson Airless Gen1, an updated iteration of the original innovative concept.<br><br>Rather than being inflated, Airless Gen1 relies on a 3D-printed polymer lattice structure. The basketball nearly fits the performance specifications of a regulation basketball, including its weight, size and rebound (bounce). The form of the ball features 8 panel-like lobes and a familiar seam structure, with hexagonal holes across the surface allowing air to pass through freely. Each Airless Gen1 comes with a case, stand, and 3-letter customizable tag.</p><br/>`,
    additionalInformation:
      '<div class="panel-pane pane-fieldable-panels-pane pane-uuid-5c4f8b30-d0c7-4d9b-8691-a844b739c33e pane-bundle-wilson-youtube-slim-banner">            <div class="pane-content">    <div class="fieldable-panels-pane">      <div class="field-collection-container clearfix"><div class="banner-hero -mt-none -w-100">    <div class="video-container text-center">        <iframe id="youtube-player-147616" width="960" height="540?>" title="240209 Wilson MAIN FILM 16x9 FV 01" src="https://www.youtube.com/embed/UNsBUBgh9zA?wmode=opaque&amp;controls=1&amp;rel=0" frameborder="0" allowfullscreen="">          Video of 240209 Wilson MAIN FILM 16x9 FV 01        </iframe>    </div></div></div></div>  </div>    </div>',
    links: [
      {
        title: 'Wilson',
        link: generateUTM(
          'https://wilson.com/en-us/product/airless-gen1-bskt-brown-wz1016101idv#colorsteamname%3D114881&size%3D52577',
        ),
      },
    ],
    price: 2500,
    rank: {
      price: 5,
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
    tags: ['flipper', 'zero', 'hacker', 'l33t'],
    description: `Flipper Zero is a portable multi-tool for pentesters and geeks in a toy-like body. It loves hacking digital stuff, such as radio protocols, access control systems, hardware, and more. It's fully open-source and customizable, so you can extend it in whatever way you like.`,
    additionalInformation: '',
    links: [{ title: 'Flipper', link: generateUTM('https://shop.flipperzero.one/') }],
    price: 169,
    rank: {
      price: 4,
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
    collections: ['cheap', 'best'],
    tags: ['computer', 'mini pc', 'raspberry', 'pi', 'razberry', 'pie'],
    flair: ['Best Mini PC'],
    description: `At the heart of Raspberry Pi Zero 2 W is RP3A0, a custom-built system-in-package designed by Raspberry Pi in the UK. With a quad-core 64-bit ARM Cortex-A53 processor clocked at 1GHz and 512MB of SDRAM, Zero 2 is up to five times as fast as the original Raspberry Pi Zero. Wireless LAN is built in to a shielded enclosure with improved RF compliance, giving you more flexibility when designing with Raspberry Pi Zero 2 W. All in the same tiny 65mm × 30mm form factor.`,
    additionalInformation: `
      <h2 class="text-3xl font-bold mb-2 mt-4" data-svelte-h="svelte-1hps2m5">Specs</h2>
      <ul class="pl-4">
      <li class="list-disc">1GHz quad-core 64-bit Arm Cortex-A53 CPU</li>
      <li class="list-disc">512MB SDRAM</li>
      <li class="list-disc">2.4GHz 802.11 b/g/n wireless LAN</li>
      <li class="list-disc">Bluetooth 4.2, Bluetooth Low Energy (BLE), onboard antenna</li>
      <li class="list-disc">Mini HDMI® port and micro USB On-The-Go (OTG) port</li>
      <li class="list-disc">microSD card slot</li>
      <li class="list-disc">CSI-2 camera connector</li>
      <li class="list-disc">HAT-compatible 40-pin header footprint (unpopulated)</li>
      <li class="list-disc">H.264, MPEG-4 decode (1080p30); H.264 encode (1080p30)</li>
      <li class="list-disc">OpenGL ES 1.1, 2.0 graphics</li>
      <li class="list-disc">Micro USB power</li>
      <li class="list-disc">Composite video and reset pins via solder test points</li>
      <li class="list-disc">65mm x 30mm</li>
      </ul>
    `,
    links: [{ title: 'Amazon', link: 'https://amzn.to/49DopDn' }],
    price: 25.99,
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description:
        '<p>Truly one of the biggest bangs for your buck. <strong>a QUAD CORE computer</strong> that is  <strong>HALF the size of a CREDIT CARD</strong>.</p>' +
        '<p class="mt-4">Create your own IoT device; make a network-wide ad blocker; have a computer in your back pocket; run your own minecraft server. The options are endless!</p>' +
        "<p class='mt-4'>I mean, c'mon. And it's under $30. Are you not impressed???? </p><p>A true CQV dinger </p><p>🔔🔔🔔🔔🔔</p>",
    },
  },
  {
    slug: 'polymaker-polymax-pla',
    title: 'Polymaker Polymax™ PLA',
    images: [
      'https://m.media-amazon.com/images/I/81sYK4P3JML._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/719dSMFJmSL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71n9YbPS5xL._AC_SX679_.jpg',
    ],
    collections: ['cheap', 'best'],
    tags: ['3d printing', 'filament', 'pla'],
    flair: ['Best Filament'],
    description: `PolyMax™ PLA is an incredibly easy-to-print filament with improved mechanical properties, making it an excellent alternative to ABS and PLA+.`,
    additionalInformation: `
      <h2 class="text-3xl font-bold mb-2 mt-4" data-svelte-h="svelte-1hps2m5">Specs</h2>
      <ul class="pl-4">
      <li class="list-disc">😀 【Almost Unbreakable!】 - PolyMax 1.75mm PLA is an engineered PLA with enhanced toughness, ductility and durability. This 3D filament 1.75 is the perfect material for applications demanding high impact resistance. The mechanical properties can be compared to ABS. PolyMax PLA combines excellent mechanical properties with great printability. Selected color: Black PLA filament 1.75mm ( PLA Black Filament )</li>
      <li class="list-disc">🧵 【Tangle Free & Moisture Free】 - PolyMax PLA is carefully winded to avoid any tangling issues, dried and vacuum sealed in a resealable ziplock bag with desiccant. Please make sure to NEVER let go the tip of the filament as it may create nodes. Holes on the side of the spool can be used to prevent this issue</li>
      <li class="list-disc">🛠️ 【Excellent Toughness & Layer Adhesion 】 - No warping, no jamming, no blobs or layer delamination issues. PolyMax PLA is a worry-free 3D Printer Filament Black which has great bed adhesion, very consistent color and dimensional accuracy. It is one of the toughest compare to all competitive filaments such as PLA+ filament</li>
      <li class="list-disc">🎁 【Best Gift for your 3D Printer】 - PolyMax PLA is a high quality 1.75 mm filament PLA and your 3D Printer will love it. Polymaker Black PLA 1.75mm filament is the ideal gift for you and your 3D Printer</li>
      <li class="list-disc">⚙ 【Printing Settings】 - Nozzle: 215˚C; Bed: 50˚C; Speed: 60mm/s (PolyMax Black PLA 1.75mm)</li>
      <li class="list-disc">♻️ 【Cardboard Spool】 - Comes in upgraded 3.0 version packaging with fully recycled cardboard spool and box</li>
      <li class="list-disc">🛡️ 【Risk Free & Lifetime Technical Support】 - We offer a full refund if the product is not performing as expected. This PLA is designed for your toughest 3D Printer Prints. Let us help you get your perfect beautiful prints and contact us via Amazon anytime you needexpected. This PLA is designed for your toughest 3D Printer Prints. Let us help you get your perfect beatiful prints and contact us via Amazon anytime you need</li>
      </ul>
    `,
    links: [{ title: 'Amazon', link: 'https://amzn.to/3wtzmIU' }],
    price: 29.99,
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description:
        '<p>Simply put, if you want to 3D print anything PLA, this is the best option for any and all printers, and any and all skill types.</p>',
    },
  },
  {
    slug: 'bambu-lab-x1-carbon',
    title: 'Bambu Lab X1 Carbon',
    images: [
      'https://us.store.bambulab.com/cdn/shop/products/20230113-091104_1400x.png?v=1700445923',
      'https://cdn.shopify.com/s/files/1/0574/3116/2995/files/20230327-110841.png?v=1679888340',
      'https://cdn.shopify.com/s/files/1/0611/4036/9460/files/Frame_1860477.png?v=1690266189',
      'https://cdn.shopify.com/s/files/1/0611/4036/9460/files/Group_47867.png?v=1691132874',
      'https://cdn.shopify.com/s/files/1/0611/4036/9460/files/20230725-151623.gif?v=1690269465',
      'https://cdn.shopify.com/s/files/1/0611/4036/9460/files/Frame_1123860909.png?v=1690266556',
      'https://cdn.shopify.com/s/files/1/0611/4036/9460/files/P1S-Studio.png?v=1689304919',
    ],
    collections: ['expensive', 'best'],
    tags: ['3d printing', 'filament', 'pla'],
    flair: ['Best 3D Printer'],
    description: `
    <div class="ProductMeta__Text">
                    <div>
    <b>Product Features</b>
      <ul>
        <li>Multi Color &amp; Multi Material Capability</li>
        <li>High quality printing with 7 μm Lidar Resolution </li>
        <li>High speed CoreXY with 20000 mm/s² Acceleration</li>
        <li>Dual Auto Bed Leveling</li>
      </ul>
     </div>
<br>
                  </div>
    `,
    additionalInformation: `
      <div class="pct pct_mc">
      <div class="pct_st-tbc">
      <h2 class="text-3xl font-bold mb-2 mt-4">Tech Specs</h2>
      <div class="pct_tbc">
      <div class="TableWrapper"><table class="pct_tb">
      <tbody>
      <tr class="pct_tr">
      <td class="pct_td"><b>Build Volume (W×D×H)</b></td>
      <td class="pct_td">256 × 256 × 256 mm³</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Nozzle</b></td>
      <td class="pct_td">0.4 mm Hardened Steel Included</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Hotend</b></td>
      <td class="pct_td">All-Metal</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Max Hot End Temperature</b></td>
      <td class="pct_td">300 ℃</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Filament Diameter</b></td>
      <td class="pct_td">1.75 mm</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Supported Filament</b></td>
      <td class="pct_td">PLA, PETG, TPU, ABS, ASA, PVA, PET<br>Ideal for PA, PC, Carbon/ Glass Fiber Reinforced Polymer</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Build Plate Surface</b></td>
      <td class="pct_td">Bambu Textured PEI Plate / Bambu Cool Plate (<span data-mce-fragment="1">Pre-installed, Random)</span>
      </td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Max Build Plate Temperature</b></td>
      <td class="pct_td">110℃@220V, 120℃@110V</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Max Speed of Tool Head</b></td>
      <td class="pct_td">500 mm/s</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Max Acceleration of Tool Head</b></td>
      <td class="pct_td">20 m/s²</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Physical Dimensions</b></td>
      <td class="pct_td">389 × 389 × 457 mm, Net weight 14.13 kg, Gross weight 18 kg</td>
      </tr>
      <tr class="pct_tr">
      <td class="pct_td"><b>Electrical Requirements</b></td>
      <td class="pct_td">100-240 VAC, 50/60 Hz, 1000W@220V, 350W@110V</td>
      </tr>
      </tbody>
      </table></div>
      </div>
      </div>
      </div>
    `,
    links: [
      {
        title: 'Bambu Lab US',
        link: generateUTM('https://us.store.bambulab.com/products/x1-carbon-3d-printer'),
      },
    ],
    price: 1199.0,
    rank: {
      price: 4,
      quality: 5,
      vibes: 5,
      description:
        "<p>This printer changed my life, and changed my opinion on 3D printing. After struggling with several different brands, I finally caved and bought this. Kiss bed leveling goodbye. Go from staring at your nozzle to sending the print to your machine from your phone while you're not home and forgetting about it.</p><br><br><p>Seriously.. just buy it.</p>",
    },
  },
]
