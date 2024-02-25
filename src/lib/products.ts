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

export type ProductRecord = typeof emptyProduct & {
  salePrice?: number
  flair?: string[]
  relatedProducts?: string[]
}

// @todo generate this somehow with a scraper? gpt?
export const products: ProductRecord[] = [
  {
    slug: 'nvidia-rtx-4090',
    title: 'NVIDIA RTX 4090',
    images: ['https://m.media-amazon.com/images/I/51c1zFDNVmL._AC_SX679_.jpg'],
    collections: ['expensive', 'best'],
    tags: ['nvidia', 'rtx', '4090', 'graphics', 'card', 'astronaut', 'hard'],
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
    tags: ['basketball', 'airless', '3d', 'print', 'sport', 'easy'],
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
      vibes: 2,
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
    tags: ['flipper', 'zero', 'hacker', 'l33t', 'tech', 'hard'],
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
    tags: ['computer', 'mini pc', 'raspberry', 'pi', 'razberry', 'pie', 'tech', 'hard'],
    flair: ['Best Mini PC', 'prime'],
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
    links: [
      { title: 'Amazon', link: 'https://amzn.to/49DopDn' },
      {
        title: 'Raspberry Pi',
        link: generateUTM('https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/'),
      },
    ],
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
    tags: ['3d printing', 'filament', 'pla', 'tech', 'easy', 'hard'],
    flair: ['Best Filament', 'prime'],
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
    relatedProducts: ['bambu-lab-x1-carbon'],
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
    tags: ['3d printing', 'filament', 'pla', 'tech', 'easy', 'hard'],
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
    relatedProducts: ['polymaker-polymax-pla'],
    price: 1199.0,
    rank: {
      price: 4,
      quality: 5,
      vibes: 5,
      description:
        "<p>This printer changed my life, and changed my opinion on 3D printing. After struggling with several different brands, I finally caved and bought this. Kiss bed leveling goodbye. Go from staring at your nozzle to sending the print to your machine from your phone while you're not home and forgetting about it.</p><br><br><p>Seriously.. just buy it.</p>",
    },
  },
  {
    slug: 'haworth-fern-office-chair',
    title: 'Haworth Fern Office Chair',
    images: [
      'https://m.media-amazon.com/images/I/61fdNJdB1YL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61foTSLz2RL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/a8451e49-13ec-4cdd-882e-d31de87db39e.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/eefdbb24-4a0b-4009-a0e0-a7837cb8206d.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    ],
    collections: ['expensive'],
    flair: ['Best Desk Chair'],
    tags: ['chair', 'deskchair', 'desk chair', 'easy', 'tech', 'hard'],
    relatedProducts: ['apple-macbook-pro-m3-2023'],
    description: '',
    additionalInformation: `
    <h2 class="text-3xl font-bold mb-2 mt-4" data-svelte-h="svelte-1hps2m5">Specs</h2>
    <ul class="pl-4">
      <li class="list-disc">RESPONSIVE COMFORT: Inspired by the natural flexibility of a leaf, the Fern chair is designed to naturally distribute weight as you move. At its core is our patented Wave Suspension system, which mimics the human body and cradles your spine. The three-part back responds to your every move — it’s a total innovation in comfort and support.</li>
      <li class="list-disc">FEATURES Included pneumatic seat height adjustment, padded 4-dimensional arms, optional lumbar adjustment, back stop, seat depth adjustment, soft casters, tilt tension, control, plastic swivel base. Accommodates a range of body shapes with a weight capacity of up to 325 lb.</li>
      <li class="list-disc">NO ASSEMBLY REQUIRED: Ready for use directly from the packaging, so you can focus on the things that are most important.</li>
      <li class="list-disc">QUALITY GUARANTEE: A 12-year warranty promises craftsmanship and quality for years of use.</li>
      <li class="list-disc">GLOBAL COMMITMENT: Fern is BIFMA Level 3 Certified, which means it satisfies the highest level of environmental standards from the Business and Institutional Furniture Manufacturers Association. The BIFMA certification includes inspection of not only the product, but the manufacturing facility and brand that makes it.</li>
    </ul>
    `,
    links: [{ title: 'Amazon', link: 'https://amzn.to/49KreSx' }],
    price: 1249,
    rank: {
      price: 5,
      quality: 5,
      vibes: 5,
      description:
        "Best desk chair; period. I've sat in a lot of chairs in my day, and none are better. There are many different configurations, do your research on the specific model depending on your likings.",
    },
  },
  {
    slug: 'apple-macbook-pro-m3-2023',
    title: 'Apple M3 MacBook Pro Laptop (2023 Model)',
    relatedProducts: ['haworth-fern-office-chair', 'apple-airpods-pro-2nd-gen'],
    images: [
      'https://m.media-amazon.com/images/I/61lsexTCOhL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61RdWPq8UfL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/G/01/apple/MacBook_Pro_M3_Product_Page_L__en-US_01._CB573757570_.jpg',
      'https://m.media-amazon.com/images/G/01/apple/MacBook_Pro_M3_Product_Page_L__en-US_04._CB573757570_.jpg',
      'https://m.media-amazon.com/images/G/01/apple/MacBook_Pro_M3_Product_Page_L__en-US_05._CB573757570_.jpg',
      'https://m.media-amazon.com/images/G/01/apple/MacBook_Pro_M3_Product_Page_L__en-US_05._CB573757570_.jpg',
    ],
    collections: ['expensive'],
    tags: ['mac', 'apple', 'macbook', 'laptop', 'm3', 'tech', 'easy', 'hard'],
    flair: ['Best Laptop', 'prime'],
    description: `
    <ul class="pl-4">
    <li class="list-disc">SUPERCHARGED BY M3 — With an 8-core CPU and 10-core GPU, the Apple M3 chip can help you blaze through everyday multitasking and take on pro projects like editing thousands of photos or 4K video.</li>
    <li class="list-disc">UP TO 22 HOURS OF BATTERY LIFE — Go all day thanks to the power-efficient design of Apple silicon. The MacBook Pro laptop delivers the same exceptional performance whether it’s running on battery or plugged in. (Battery life varies by use and configuration. See apple.com/batteries for more information.)</li>
    <li class="list-disc">BRILLIANT PRO DISPLAY — The 14.2-inch Liquid Retina XDR display features Extreme Dynamic Range, over 1000 nits of brightness for stunning HDR content, up to 600 nits of brightness for SDR content, and pro reference modes for doing your best work on the go. (The display has rounded corners at the top. When measured diagonally, the screen is 14.2 inches. Actual viewable area is less.)</li>
    <li class="list-disc">FULLY COMPATIBLE — All your pro apps run lightning fast — including Adobe Creative Cloud, Apple Xcode, Microsoft 365, Medivis SurgicalAR, and many of your favorite iPhone and iPad apps. And with macOS, work and play on your Mac are even more powerful. Elevate your presence on video calls. Access information in all-new ways. And discover even more ways to personalize your Mac. (Apps are available on the App Store.)</li>
    <li class="list-disc">ADVANCED CAMERA AND AUDIO — Look sharp and sound great with a 1080p FaceTime HD camera, a studio-quality three-mic array, and a six-speaker sound system with Spatial Audio.</li>
    <li class="list-disc">CONNECT IT ALL — This MacBook Pro features a MagSafe charging port, two Thunderbolt / USB 4 ports, an SDXC card slot, an HDMI port, and a headphone jack. Enjoy fast wireless connectivity with Wi-Fi 6E and Bluetooth 5.3. Supports one external display. (Wi‑Fi 6E available in countries and regions where supported.)</li>
    <li class="list-disc">MAGIC KEYBOARD WITH TOUCH ID — The backlit Magic Keyboard has a full-height function key row and Touch ID, which gives you a fast, easy, secure way to unlock your laptop and sign in to apps and sites.</li>
    <li class="list-disc">ADVANCED SECURITY — Every Mac comes with encryption, robust virus protections, and a powerful firewall system. And free security updates help keep your Mac protected.</li>
    <li class="list-disc">WORKS WITH ALL YOUR APPLE DEVICES — You can do amazing things when you use your Apple devices together. Copy something on iPhone and paste it on MacBook Pro. Use your MacBook Pro to answer FaceTime calls or send texts with Messages. And that’s just the beginning.</li>
    <li class="list-disc">BUILT TO LAST — The all-aluminum unibody enclosure is exceptionally durable. Free software updates keep things running smoothly for years to come.</li>
    `,
    additionalInformation: `
    <h2 class="text-3xl font-bold mb-2 mt-4" data-svelte-h="svelte-1hps2m5">Specs</h2>
    <table class=a-bordered><tr><td style=width:120px><p><strong>Display</strong><td><p>14.2-inch (diagonal) mini-LED backlit Liquid Retina XDR display, 3024 by 1964 pixels with ProMotion technology for adaptive refresh rates up to 120Hz, and up to 1000 nits sustained (full-screen) brightness, 1600 nits peak brightness, True Tone technology, ProMotion technology for adaptive refresh rates up to 120Hz<tr><td style=width:120px><p><strong>Processor</strong><td><p>Apple M3 chip, 8-core CPU with 4 performance cores and 4 efficiency cores, 10-core GPU, Hardware-accelerated ray tracing, 16-core Neural Engine, 100GB/s memory bandwidth<tr><td style=width:120px><p><strong>Graphics and Video Support</strong><td><p>Apple 10-core GPU<tr><td style=width:120px><p><strong>Charging and Expansion</strong><td><p>SDXC card slot, HDMI port, 3.5 mm headphone jack, MagSafe 3 port, Three Thunderbolt 4 (USB-C) ports with support for: Charging, DisplayPort, Thunderbolt 4 (up to 40Gb/s), USB 4 (up to 40Gb/s)<tr><td style=width:120px><p><strong>Wireless</strong><td><p>Wi-Fi 6E (802.11ax), Bluetooth 5.3<tr><td style=width:120px><p><strong>In the Box</strong><td><p>14-inch MacBook Pro, 70W USB-C Power Adapter, USB-C to MagSafe 3 Cable (2m)</table>
    `,
    links: [{ title: 'Amazon', link: 'https://amzn.to/3T8OgwZ' }],
    price: 1599.99,
    rank: {
      price: 3,
      quality: 5,
      vibes: 5,
      description: `I\'ve used many laptops, all the *nix-es, brands, etc. and this specific macbook is the best of them all. It plays minecraft; it\'s retina; it\'s portable, but with an almost 15in screen. I made this website with one.
      <br><br>
      I've researched a lot of versions, and this is the best bang-for-your-buck in terms of ram, processor, and storage.
      <br><br>
      If you need a good laptop, this is the one bro.
      `,
    },
  },
  {
    slug: 'apple-airpods-pro-2nd-gen',
    title: 'Apple AirPods Pro (2nd Gen)',
    images: [
      'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61sRKTAfrhL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/51emillNpWL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/51+vJkbGtJL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/5121OBX4JIL._AC_SX679_.jpg',
      // @TODO image support
      // https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/fb043d87-2a63-4e0d-a0a3-52c8b536ea0d/default.jobtemplate.mp4.480.mp4
    ],
    collections: ['expensive'],
    tags: ['airpods', 'apple', 'headphones', 'tech', 'easy'],
    flair: ['prime'],
    description:
      '<p>Active Noise Cancellation performance measured as compared to AirPods Pro (1st generation). <br>Adaptive Audio and Conversation Awareness work with AirPods Pro (2nd generation) with USB-C with the latest firmware when paired with a compatible Apple device running the latest operating system software. <br>AirPods Pro (2nd generation) with USB-C are dust resistant and sweat and water resistant for non-water sports and exercise, and they are IP54 rated. Dust, sweat, and water resistance are not permanent conditions. <br>Compatible hardware and software required for Personalized Spatial Audio with dynamic head tracking. Works with compatible content in supported apps. Not all content available in Dolby Atmos. iPhone with TrueDepth camera required to create a personal profile for Spatial Audio, which will sync across Apple devices running the latest operating system software, including iOS, iPadOS, macOS, and tvOS. <br>Mute and unmute on calls available in compatible applications with the latest firmware. <br>Battery life depends on device settings, environment, usage, and many other factors. <br>MagSafe charging requires a compatible MagSafe charger. Wireless charging requires a Qi-certified wireless charger. AirPods Pro (2nd generation) with USB-C charging case also works with the Apple Watch charger or USB-C connector. <br>Just “Siri” available in English (Australia, Canada, United Kingdom, U.S.). This feature is not available on AirPods with the H1 headphone chip and Intel-based Mac computers. Devices must support and have the latest operating system. <br>One-tap setup, Automatic Switching, and Audio Sharing require a compatible Apple device running the latest operating system software. Device compatibility varies by feature. One-tap setup and Automatic Switching also require an iCloud account.</p>',
    additionalInformation:
      '<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> RICHER AUDIO EXPERIENCE — The Apple-designed H2 chip helps to create more intelligent noise cancellation and deeply immersive sound. The low-distortion, custom-built driver delivers crisp, clear high notes and full, rich bass in stunning definition.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> NEXT-LEVEL ACTIVE NOISE CANCELLATION — Up to 2x more Active Noise Cancellation for dramatically less noise when you want to focus. Transparency mode lets you hear the world around you, and Adaptive Audio seamlessly blends Active Noise Cancellation and Transparency mode for the best listening experience in any environment.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> CUSTOMIZABLE FIT — Includes four pairs of silicone tips (XS, S, M, L) to fit a wide range of ears and provide all-day comfort. The tips create an acoustic seal to help keep out noise and secure AirPods Pro in place.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> DUST, SWEAT, AND WATER RESISTANT — Both AirPods Pro and the MagSafe Charging Case are IP54 dust, sweat, and water resistant, so you can listen comfortably in more conditions.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> PERSONALIZED SPATIAL AUDIO — With sound that suits your unique ear shape along with dynamic head tracking, AirPods Pro deliver an immersive listening experience that places sound all around you. You can also listen to select songs, shows, and movies in Dolby Atmos.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> A HIGHER LEVEL OF CONTROL — Manage playback functions from the stem with touch control. Swipe up or down to adjust volume, press to play and pause music or mute and unmute yourself on calls, and press twice to end calls. And hold the stem to switch between listening modes.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> LONG BATTERY LIFE — Get up to 6 hours of listening time with Active Noise Cancellation enabled. And get up to 30 hours of total listening time with Active Noise Cancellation enabled, using the case.  </span></li>  </ul>' +
      '<table class=a-bordered><tr><td style=width:120px><p><strong>Weight</strong><td><p>AirPods Pro (each): 0.19 ounce (5.3 g), MagSafe Charging Case: 1.79 ounces (50.8 g)<tr><td style=width:120px><p><strong>Dimensions</strong><td><p>AirPods (each): 0.94 by 0.86 by 1.22 inches (24.0 by 21.8 by 30.9 mm), MagSafe Charging Case: 1.78 by 0.85 by 2.39 inches (45.2 by 21.7 by 60.6 mm)<tr><td style=width:120px><p><strong>AirPods Sensors (each):</strong><td><p>Dual beamforming microphones, Inward-facing microphone, Skin-detect sensor, Motion-detecting accelerometer, Speech-detecting accelerometer, Touch control<tr><td style=width:120px><p><strong>Power and Battery</strong><td><p>Up to 6 hours of listening time on a single charge (up to 5.5 hours with Personalized Spatial Audio and Head Tracking enabled), Up to 4.5 hours of talk time with a single charge. AirPods Pro with MagSafe Charging Case: Up to 30 hours of listening time, Up to 24 hours of talk time, 5 minutes in the case provides around 1 hour of listening time or around 1 hour of talk time</table>',
    links: [
      { title: 'Amazon', link: 'https://amzn.to/48zXUgM' },
      { title: 'Apple', link: generateUTM('https://www.apple.com/airpods/') },
    ],
    price: 239,
    rank: {
      price: 3,
      quality: 5,
      vibes: 4,
      description:
        'I use these headphones on a daily basis. The different modes are something unline any other headphones I have used, and have to be experienced to be understood.<br><br>If you are in the market for new headphones, these are the ones for you.',
    },
  },
  {
    slug: 'element-tech-deck',
    title: 'Element Tech Decks',
    images: [
      'https://m.media-amazon.com/images/I/81Ly30GBpML._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/818uJv66InL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81S4bSbGtDL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/811PJId9AAL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81sMQyZSJGL._AC_SX679_.jpg',
    ],
    collections: ['cheap'],
    tags: ['tech', 'deck', 'element', 'skateboard', 'fingerboard', 'easy'],
    flair: ['prime'],
    description:
      'Tech Deck brings you the real deal with authentic fingerboards from real skate companies! Each one features legit graphics from the biggest skate companies in the world, including Blind, Baker, Flip, Finesse, Santa Cruz, Plan B, Sk8mafia, Toy Machine, and more. This 4-Pack includes 4 boards you can build any way you want. Recreate your favorite lines and expand your trickionary by checking out online trick tips on techdeck.com. As you build your mini skateboard collection, compare it online with Tech Deck’s interactive collector’s tool. Ride and grind your new finger skateboards on the X-Connect series. Build out the Big Vert Wall or Flip N’ Grind ramp sets (each sold separately) for you to shred your skateboard decks. There are a ton of Decks, toy figures & playsets to collect! Ride, flip, and grind with Tech Deck fingerboards from real skate companies! Tech Deck mini skateboards for fingers and ramp sets make the perfect gift for girls toys age 6-8 who love small toys and cool toys or as an alternative to toy cars as a boys toys age 6-8 item. Start small, go big and collect them all!',
    additionalInformation:
      '<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> REAL SKATEBOARD GRAPHICS: The Tech Deck Ultra DLX Pack includes 4 fingerboard decks with authentic graphics from the biggest brands in skateboarding.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> CUSTOMIZE: Receive 4 boards with authentic skate graphics to build and customize. Collect the whole series!  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> OFFICIAL: These decks are the real deal! Ride, flip, and grind with an official finger board from real skate companies! From grip tape to bushings, these decks have been recreated down to the smallest detail.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> BECOME A TECH DECK PRO: Grind your new boards on Tech Deck fingerboard obstacles and playsets like the expansive X-Connect World. Shred and ollie on the X-Connect Shredline and Sk8 Garage Skatepark (each sold separately) for new ways to play and progress.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> COLLECT THEM ALL: Great toys for boys or toys for girls and gifts for kids that love collectibles, toy figures &amp; playsets, or mini skateboards. Great Christmas gift, or birthday gifts ages 6 and up!  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Includes: 1 Assembled Board, 3 Boards with Grip Tape, 2 Sticker Sheets, 12 Wheels, 1 Skate Tool, 6 Skateboard Trucks, 24 Screws, 18 Nuts  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Covered by the Spin Master Care Commitment. See below for full details  </span></li>  </ul>',
    links: [{ title: 'Amazon', link: 'https://amzn.to/3uHV0sl' }],
    price: 26.98,
    rank: {
      price: 1,
      quality: 4,
      vibes: 5,
      description:
        'The best desktop fidget toy, aside from a fidget spinner I suppose, which you can print with your X1C ;)',
    },
  },
  {
    slug: 'apple-air-tags',
    title: 'Apple Airtags (4 pack)',
    images: [
      'https://m.media-amazon.com/images/I/71gY9E+cTaS._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71JJueCRWJS._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91bsFWILPGS._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81Lq1AfCYpS._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71YziLCAJSS._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71ZMyXWM9CS._AC_SL1500_.jpg',
    ],
    collections: ['cheap'],
    tags: ['apple', 'air', 'tag', 'airtag', 'tech', 'easy'],
    flair: ['prime'],
    description:
      'AirTag is a supereasy way to keep track of your stuff. Attach one to your keys, slip another in your backpack. And just like that, they’re on your radar in the Find My app, where you can also track down your Apple devices and keep up with friends and family.',
    additionalInformation:
      '<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Keep track of and find your items alongside friends and devices in the Find My app  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Simple one-tap setup instantly connects AirTag with your iPhone or iPad  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Play a sound on the built-in speaker to help find your things, or just ask Siri for help  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Precision Finding with Ultra Wideband technology leads you right to your nearby AirTag (on select iPhone models)  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Find items further away with the help of hundreds of millions of Apple devices in the Find My network  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Put AirTag into Lost Mode to be automatically notified when it’s detected in the Find My network  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> All communication with the Find My network is anonymous and encrypted for privacy, Location data and history are never stored on AirTag  </span></li>  </ul>',
    links: [
      { title: 'Amazon', link: 'https://amzn.to/3SPDryp' },
      { title: 'Apple', link: generateUTM('https://www.apple.com/airtag/') },
    ],
    price: 78,
    rank: {
      price: 2,
      quality: 5,
      vibes: 5,
      description:
        'Track all your important assets with these. Make your life infinitely easier in the event of a life-changing event. Etc.',
    },
  },
  {
    slug: 'twelve-rules-for-life',
    title: '12 Rules for Life: An Antidote to Chaos',
    images: ['https://m.media-amazon.com/images/I/61BRxtp9qtL._SY522_.jpg'],
    collections: ['cheap'],
    tags: ['smart', 'dumb'],
    description: `<span class="a-text-bold">#1 NATIONAL BESTSELLER&nbsp;<br></span><span class="a-text-bold"><br>#1 INTERNATIONAL BESTSELLER<br><br>What does everyone in the modern world need to know? <br><br>Renowned psychologist Jordan B. Peterson's answer to this most difficult of questions uniquely combines the hard-won truths of ancient tradition with the stunning revelations of cutting-edge scientific research.</span><span><br><br>Humorous, surprising and informative, Dr. Peterson tells us why skateboarding boys and girls must be left alone, what terrible fate awaits those who criticize too easily, and why you should always pet a cat when you meet one on the street.<br><br>What does the nervous system of the lowly lobster have to tell us about standing up straight (with our shoulders back) and about success in life? Why did ancient Egyptians worship the capacity to pay careful attention as the highest of gods? What dreadful paths do people tread when they become resentful, arrogant and vengeful? <br><br>Dr. Peterson journeys broadly, discussing discipline, freedom, adventure and responsibility, distilling the world's wisdom into 12 practical and profound rules for life. </span><span class="a-text-italic">12 Rules for Life</span><span>&nbsp;shatters the modern commonplaces of science, faith and human nature, while transforming and ennobling the mind and spirit of its readers.</span>`,
    additionalInformation: `<div class="a-section bucket detail-bullets-wrapper feature"data-cel-widget=detailBulletsWrapper_feature_div data-feature-name=detailBullets data-template-name=detailBullets id=detailBulletsWrapper_feature_div><hr aria-hidden=true class="a-divider-normal bucketDivider"><h2>Product details</h2><div id=detailBullets_feature_div><ul class="a-nostyle a-unordered-list a-vertical a-spacing-none detail-bullet-list"><li><span class=a-list-item><span class=a-text-bold>Publisher ‏ : ‎ </span><span>Random House Canada; Later prt. edition (January 23, 2018)</span></span><li><span class=a-list-item><span class=a-text-bold>Language ‏ : ‎ </span><span>English</span></span><li><span class=a-list-item><span class=a-text-bold>Hardcover ‏ : ‎ </span><span>409 pages</span></span><li><span class=a-list-item><span class=a-text-bold>ISBN-10 ‏ : ‎ </span><span>0345816021</span></span><li><span class=a-list-item><span class=a-text-bold>ISBN-13 ‏ : ‎ </span><span>978-0345816023</span></span><li><span class=a-list-item><span class=a-text-bold>Item Weight ‏ : ‎ </span><span>1.45 pounds</span></span><li><span class=a-list-item><span class=a-text-bold>Dimensions ‏ : ‎ </span><span>6.6 x 1.4 x 9.3 inches</span></span></ul></div><ul class="a-nostyle a-unordered-list a-vertical a-spacing-none detail-bullet-list"><li><span class=a-list-item><span class=a-text-bold>Best Sellers Rank: </span>#240 in Books (<a href="/gp/bestsellers/books/ref=pd_zg_ts_books">See Top 100 in Books</a>)<ul class="a-nostyle a-unordered-list a-vertical zg_hrsr"><li><span class=a-list-item>#1 in <a href="/gp/bestsellers/books/11130/ref=pd_zg_hrsr_books">Popular Applied Psychology</a></span><li><span class=a-list-item>#17 in <a href="/gp/bestsellers/books/4745/ref=pd_zg_hrsr_books">Personal Transformation Self-Help</a></span><li><span class=a-list-item>#18 in <a href="/gp/bestsellers/books/4749/ref=pd_zg_hrsr_books">Success Self-Help</a></span></ul></span></ul><ul class="a-nostyle a-unordered-list a-vertical a-spacing-none detail-bullet-list"><li><span class=a-list-item><span class=a-text-bold>Customer Reviews:</span><style>.noUnderline a:hover{text-decoration:none}.cm-cr-review-stars-spacing-big{margin-top:1px}</style><div id=detailBullets_averageCustomerReviews data-asin=0345816021 data-ref=dpx_acr_pop_><span class=a-declarative data-action=acrStarsLink-click-metrics data-csa-c-func-deps=aui-da-acrStarsLink-click-metrics data-csa-c-id=fppeus-mb7tws-d4cygg-8zeatf data-csa-c-type=widget data-acrstarslink-click-metrics={}><span class="noUnderline reviewCountTextLinkedHistogram"id=acrPopover title="4.7 out of 5 stars"><span class=a-declarative data-action=a-popover data-csa-c-func-deps=aui-da-a-popover data-csa-c-id=dxzvk4-dqbyyj-9qu48-9rxhi2 data-csa-c-type=widget data-a-popover='{"max-width":"700","closeButton":"false","position":"triggerBottom","url":"/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&asin=0345816021"}'><a href=javascript:void(0) class="a-declarative a-popover-trigger"role=button><span class="a-size-base a-color-base">4.7 </span><i class="a-icon a-icon-star a-star-4-5 cm-cr-review-stars-spacing-big"><span class=a-icon-alt>4.7 out of 5 stars</span></i> <i class="a-icon a-icon-popover"></i></a> </span><span class=a-letter-space></span> </span></span><span class=a-letter-space></span> <span class=a-declarative data-action=acrLink-click-metrics data-csa-c-func-deps=aui-da-acrLink-click-metrics data-csa-c-id=quqrnp-1rcjgt-ha3zo0-gm7dhj data-csa-c-type=widget data-acrlink-click-metrics={}><a href=#customerReviews class=a-link-normal id=acrCustomerReviewLink><span class=a-size-base id=acrCustomerReviewText>60,151 ratings</span></a></span><script>var dpAcrHasRegisteredArcLinkClickAction;P.when("A","ready").execute(function(c){!0!==dpAcrHasRegisteredArcLinkClickAction&&(dpAcrHasRegisteredArcLinkClickAction=!0,c.declarative("acrLink-click-metrics","click",{allowLinkDefault:!0},function(c){window.ue&&ue.count("acrLinkClickCount",(ue.count("acrLinkClickCount")||0)+1)}))})</script><script>P.when("A","cf").execute(function(c){c.declarative("acrStarsLink-click-metrics","click",{allowLinkDefault:!0},function(c){window.ue&&ue.count("acrStarsLinkWithPopoverClickCount",(ue.count("acrStarsLinkWithPopoverClickCount")||0)+1)})})</script></div></span></ul><div class=a-row></div><div class=a-row></div></div>`,
    links: [{ title: 'Amazon', link: 'https://amzn.to/3OY2lei' }],
    price: 15.99,
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description: '',
    },
  },
]

// Be here now Ram dass https://amzn.to/49obkgQ

// Mad Men season 1 https://amzn.to/4bMQJEC
// string winder https://amzn.to/3wtibXT
// keyboard wrist rest
// mouse wrist rest https://amzn.to/3Tata16
// minecraft crocs https://amzn.to/49Kas67
// ON Gold Standard Protein Powder https://amzn.to/48ocB6k
// Hydroflask https://amzn.to/3P09wCz
// Levi XX Chinos https://amzn.to/49Ne1IQ

// magic trackpad https://amzn.to/42OKOL3
// https://m.media-amazon.com/images/I/41KZtzhlK+L._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/51qMqmaeiOL._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/41nNdemE08L._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/51WD2FUXHOL._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/610zm3d008L._AC_SX679_.jpg
// <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> WIRELESS, RECHARGEABLE CONVENIENCE — Magic Trackpad connects wirelessly to your device via Bluetooth. And the rechargeable internal battery means no loose batteries to replace.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> MAGIC TRACKING EXPERIENCE — Sensors underneath the trackpad surface detect subtle differences in the amount of pressure you apply, bringing more functionality to your fingertips and enabling a deeper connection to your content.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> WORKS WITH MAC OR IPAD — It’s ready to go right out of the box and pairs automatically with your Mac or iPad so you can get to work right away. Requires a Bluetooth-enabled Mac with OS X 10.11 or later or an iPad with iPadOS 13.4 or later.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SWIPE AND SCROLL MORE PRODUCTIVELY — It features a large edge-to-edge glass surface area, making scrolling and swiping more efficient and comfortable than ever.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> GO WEEKS WITHOUT CHARGING — The incredibly long-lasting internal battery will power your Magic Trackpad for about a month or more between charges. Comes with a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac or iPad.  </span></li>  </ul>
// <table id="productDetails_techSpec_section_1" class="a-keyvalue prodDetTable" role="presentation">     <tbody><tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> Product Dimensions </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;6.85 x 5.04 x 0.43 inches </td>  </tr>    <tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> Item Weight </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;8.1 ounces </td>  </tr>    <tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> Manufacturer </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;Apple </td>  </tr>    <tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> Language </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;English </td>  </tr>    <tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> ASIN </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;B09BRG3MZ2 </td>  </tr>      <tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> Country of Origin </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;China </td>  </tr>    <tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> Item model number </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;MK2D3AM/A </td>  </tr>    <tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> Batteries </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;1 Lithium Ion batteries required. (included) </td>  </tr>      <tr>  <th class="a-color-secondary a-size-base prodDetSectionEntry"> Date First Available </th>   <td class="a-size-base prodDetAttrValue">
// &lrm;August 3, 2021 </td>  </tr>    </tbody></table>

// magic keyboard https://amzn.to/49LFKta
// https://m.media-amazon.com/images/I/71cboO+0CcL._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/51Q9w5igDML._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/517siQ0wvQL._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/61x06g-wN9L._AC_SX679_.jpg
// https://m.media-amazon.com/images/I/51mqIKEAHWL._AC_SX679_.jpg
// <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> WIRELESS, RECHARGEABLE CONVENIENCE — Magic Keyboard connects wirelessly to your Mac, iPad, or iPhone via Bluetooth. And the rechargeable internal battery means no loose batteries to replace.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> WORKS WITH MAC, IPAD, OR IPHONE — It pairs quickly with your device so you can get to work right away.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> ENHANCED TYPING EXPERIENCE — Magic Keyboard delivers a remarkably comfortable and precise typing experience.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> GO WEEKS WITHOUT CHARGING — The incredibly long-lasting internal battery will power your keyboard for about a month or more between charges. (Battery life varies by use.) Comes with a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac or iPad.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SYSTEM REQUIREMENTS — Requires a Mac with macOS 11.3 or later, an iPad with iPadOS 14.5 or later, or an iPhone or iPod touch with iOS 14.5 or later.  </span></li>  </ul>
//

// mechanical keyboard https://amzn.to/3SPBTVd
// standard strat kit https://amzn.to/49sQFYX
// coleman minibike https://amzn.to/3OR4jx2
// litter robot https://amzn.to/3SQ0068
// airpods max https://amzn.to/42M1S4x

// Xbox Series X 1TB SSD Console
//  https://amzn.to/3wrzbxE
// 449
// <table id="productDetails_detailBullets_sections1" class="a-keyvalue prodDetTable" role="presentation">          <tbody><tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> ASIN </th>  <td class="a-size-base prodDetAttrValue"> B08H75RTZ8 </td> </tr>            <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Release date </th>  <td class="a-size-base prodDetAttrValue"> November 10, 2020 </td> </tr>              <tr>   <th class="a-color-secondary a-size-base prodDetSectionEntry">Customer Reviews</th>  <td class="a-size-base">   <style type="text/css">
//     /*
//     * Fix for UDP-1061. Average customer reviews has a small extra line on hover
//     * https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40
//     */
//     .noUnderline a:hover {
//         text-decoration: none;
//     }

//     .cm-cr-review-stars-spacing-big {
//         margin-top: 1px;
//     }
// </style>

//                    <div id="averageCustomerReviews" data-asin="B08H75RTZ8" data-ref="dpx_acr_pop_">
//                                 <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-acrStarsLink-click-metrics" data-acrstarslink-click-metrics="{}" data-csa-c-id="ylregl-i792n0-flgkqx-dvo5g9">     <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="4.8 out of 5 stars">
//         <span class="a-declarative" data-action="a-popover" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B08H75RTZ8&quot;}" data-csa-c-id="ye35lq-yo4t49-g58fid-6apmlc"> <a href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">  <span class="a-size-base a-color-base"> 4.8 </span>   <i class="a-icon a-icon-star a-star-5 cm-cr-review-stars-spacing-big"><span class="a-icon-alt">4.8 out of 5 stars</span></i>   <i class="a-icon a-icon-popover"></i></a> </span> <span class="a-letter-space"></span> </span>

//        </span> <span class="a-letter-space"></span>             <span class="a-declarative" data-action="acrLink-click-metrics" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-acrLink-click-metrics" data-acrlink-click-metrics="{}" data-csa-c-id="33jolr-wlxqs1-kp21lj-umaau4"> <a id="acrCustomerReviewLink" class="a-link-normal" href="#customerReviews"> <span id="acrCustomerReviewText" class="a-size-base">25,976 ratings</span> </a> </span> <script type="text/javascript">

//                     var dpAcrHasRegisteredArcLinkClickAction;
//                     P.when('A', 'ready').execute(function(A) {
//                         if (dpAcrHasRegisteredArcLinkClickAction !== true) {
//                             dpAcrHasRegisteredArcLinkClickAction = true;
//                             A.declarative(
//                                 'acrLink-click-metrics', 'click',
//                                 { "allowLinkDefault": true },
//                                 function (event) {
//                                     if (window.ue) {
//                                         ue.count("acrLinkClickCount", (ue.count("acrLinkClickCount") || 0) + 1);
//                                     }
//                                 }
//                             );
//                         }
//                     });
//                 </script>
//                  <script type="text/javascript">
//             P.when('A', 'cf').execute(function(A) {
//                 A.declarative('acrStarsLink-click-metrics', 'click', { "allowLinkDefault" : true },  function(event){
//                     if(window.ue) {
//                         ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
//                     }
//                 });
//             });
//         </script>

//            </div>
//       <br> 4.8 out of 5 stars </td> </tr>                <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Best Sellers Rank </th> <td> <span>  <span>#57 in Video Games (<a href="/gp/bestsellers/videogames/ref=pd_zg_ts_videogames">See Top 100 in Video Games</a>)</span> <br>  <span>#1 in <a href="/gp/bestsellers/videogames/20972813011/ref=pd_zg_hrsr_videogames">Xbox Series X &amp; S Consoles</a></span> <br>  <span>#2 in <a href="/gp/bestsellers/videogames/720022/ref=pd_zg_hrsr_videogames">Xbox Consoles</a></span> <br>  </span> </td> </tr>                                                                                         <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Product Dimensions </th>  <td class="a-size-base prodDetAttrValue"> 5.94 x 11.85 x 5.94 inches; 9.8 Pounds </td> </tr>            <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Type of item </th>  <td class="a-size-base prodDetAttrValue"> Video Game </td> </tr>                          <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Item model number </th>  <td class="a-size-base prodDetAttrValue"> Internacional </td> </tr>            <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Item Weight </th>  <td class="a-size-base prodDetAttrValue"> 9.8 pounds </td> </tr>            <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Department </th>  <td class="a-size-base prodDetAttrValue"> Unisex </td> </tr>            <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Manufacturer </th>  <td class="a-size-base prodDetAttrValue"> Microsoft </td> </tr>            <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Country of Origin </th>  <td class="a-size-base prodDetAttrValue"> China </td> </tr>            <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Batteries </th>  <td class="a-size-base prodDetAttrValue"> 2 A batteries required. (included) </td> </tr>            <tr> <th class="a-color-secondary a-size-base prodDetSectionEntry"> Date First Available </th>  <td class="a-size-base prodDetAttrValue"> September 22, 2020 </td> </tr>      </tbody></table>
// https://m.media-amazon.com/images/I/51ojzJk77qL._SX522_.jpg
// https://m.media-amazon.com/images/I/61c937dHIvL._SX522_.jpg
// https://m.media-amazon.com/images/I/71ut3JnAiUL._SX522_.jpg
// https://m.media-amazon.com/images/I/51b72fFNWRL._SX522_.jpg
// https://m.media-amazon.com/images/S/aplus-media-library-service-media/d98148fa-ff4e-4807-aed9-6fdeb840a137.__CR0,0,1464,600_PT0_SX1464_V1___.jpg
// https://m.media-amazon.com/images/S/aplus-media-library-service-media/1e80b47c-6597-461c-87b8-f838d840b75e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg
// https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/4e508e43-40ec-4ba8-9499-5d8d5ee771c6/default.jobtemplate.mp4.480.mp4
// Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever. And when you add Xbox Game Pass Ultimate (membership sold separately), you get online multiplayer to play with friends and an instant library of 100+ high-quality games, including day one releases from Xbox Game Studios.*
// <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> XBOX SERIES X: The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.*  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> FASTER LOAD TIMES: Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS – all powered by Xbox Velocity Architecture.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> IN THE BOX: Xbox Series X console, one Xbox Wireless Controller, an ultra high-speed HDMI cable, power cable, and 2 AA batteries.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SURROUND SOUND: Enhance gameplay with both full-spectrum visuals and immersive audio with Dolby Vision and Dolby Atmos  </span></li>  </ul>

// nintendo switch OLED https://cooltoybro.com
// akatsuke mousepad https://amzn.to/49uVhOy
// liquidIV https://amzn.to/3uBzbuB
// zum lavender https://amzn.to/3UTjMAm
// R8 radar detector https://amzn.to/4bT7Wwj
// northface full zip jacket https://amzn.to/3SRuS6f
// osprey daylite https://amzn.to/4bOYzxu
// Nectar 14" Cooling Matress https://amzn.to/3UN3Q2B
// DOHM Sound Machine https://amzn.to/42OL8tn
// Meta Quest 3 https://amzn.to/3uMpHfW
//
//
// adobe affiliate program submitted
// alibaba affiliate program submitted
// rakuten affiliate program submitted - DENIED
