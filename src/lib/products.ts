import emptyProduct from './emptyProduct'
import { generateUTM } from './helpers'

export type ProductRecord = typeof emptyProduct & {
  salePrice?: number
  flair?: string[]
  relatedProducts?: string[]
  videos?: { poster: string; link: string }[]
}

// @todo generate this somehow with a scraper? gpt?
export const products: ProductRecord[] = [
  {
    slug: 'nvidia-rtx-4090',
    title: 'NVIDIA RTX 4090',
    images: ['https://m.media-amazon.com/images/I/51c1zFDNVmL._AC_SX679_.jpg'],
    collections: ['expensive', 'best'],
    tags: ['nvidia', 'rtx', '4090', 'graphics', 'card', 'tech', 'hard'],
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
    price: 260,
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
    tags: ['basketball', 'airless', '3d', 'print', 'sports', 'easy', 'toy'],
    description: `<p class="product-description_content"><strong>WELCOME TO THE ERA OF AIRLESS</strong><br><br>After the 2023 unveiling of the Wilson Airless Prototype, the next step was clear: make it possible for the world to experience the future of sport for themselves. Enter Wilson Airless Gen1, an updated iteration of the original innovative concept.<br><br>Rather than being inflated, Airless Gen1 relies on a 3D-printed polymer lattice structure. The basketball nearly fits the performance specifications of a regulation basketball, including its weight, size and rebound (bounce). The form of the ball features 8 panel-like lobes and a familiar seam structure, with hexagonal holes across the surface allowing air to pass through freely. Each Airless Gen1 comes with a case, stand, and 3-letter customizable tag.</p><br/>`,
    additionalInformation:
      '<div class="panel-pane pane-fieldable-panels-pane pane-uuid-5c4f8b30-d0c7-4d9b-8691-a844b739c33e pane-bundle-wilson-youtube-slim-banner">   <div class="pane-content">    <div class="fieldable-panels-pane">      <div class="field-collection-container clearfix"><div class="banner-hero -mt-none -w-100">    <div class="video-container text-center">        <iframe id="youtube-player-147616" width="960" height="540?>" title="240209 Wilson MAIN FILM 16x9 FV 01" src="https://www.youtube.com/embed/UNsBUBgh9zA?wmode=opaque&amp;controls=1&amp;rel=0" frameborder="0" allowfullscreen=""> Video of 240209 Wilson MAIN FILM 16x9 FV 01        </iframe>    </div></div></div></div>  </div>    </div>',
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
      vibes: 1,
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
    tags: ['flipper', 'zero', 'hacker', 'l33t', 'tech', 'hard', 'toy'],
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
    tags: ['computer', 'mini pc', 'raspberry', 'pi', 'razberry', 'pie', 'tech', 'easy', 'hard'],
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
    price: 26,
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
    tags: ['3d printing', 'filament', 'pla', 'tech', 'hard'],
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
    price: 30,
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
    tags: ['3d printing', 'filament', 'pla', 'tech', 'hard'],
    flair: ['Best 3D Printer'],
    description: `
    <div class="ProductMeta__Text">
      <div>
    <b>Product Features</b>
      <ul class="pl-4">
        <li class="list-disc">Multi Color &amp; Multi Material Capability</li>
        <li class="list-disc">High quality printing with 7 μm Lidar Resolution </li>
        <li class="list-disc">High speed CoreXY with 20000 mm/s² Acceleration</li>
        <li class="list-disc">Dual Auto Bed Leveling</li>
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
    price: 1200.0,
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
    tags: ['chair', 'deskchair', 'desk chair', 'easy', 'lifestyle'],
    relatedProducts: [
      'apple-macbook-pro-m3-2023',
      'apple-airpods-max',
      'akatsuke-mat',
      'mechanical-keyboard-brown-switches',
    ],
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
    relatedProducts: [
      'haworth-fern-office-chair',
      'apple-airpods-pro-2nd-gen',
      'akatsuke-mat',
      'mechanical-keyboard-brown-switches',
    ],
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
    price: 1600,
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
    tags: ['deck', 'element', 'skateboard', 'fingerboard', 'easy', 'toy'],
    flair: ['prime'],
    description:
      'Tech Deck brings you the real deal with authentic fingerboards from real skate companies! Each one features legit graphics from the biggest skate companies in the world, including Blind, Baker, Flip, Finesse, Santa Cruz, Plan B, Sk8mafia, Toy Machine, and more. This 4-Pack includes 4 boards you can build any way you want. Recreate your favorite lines and expand your trickionary by checking out online trick tips on techdeck.com. As you build your mini skateboard collection, compare it online with Tech Deck’s interactive collector’s tool. Ride and grind your new finger skateboards on the X-Connect series. Build out the Big Vert Wall or Flip N’ Grind ramp sets (each sold separately) for you to shred your skateboard decks. There are a ton of Decks, toy figures & playsets to collect! Ride, flip, and grind with Tech Deck fingerboards from real skate companies! Tech Deck mini skateboards for fingers and ramp sets make the perfect gift for girls toys age 6-8 who love small toys and cool toys or as an alternative to toy cars as a boys toys age 6-8 item. Start small, go big and collect them all!',
    additionalInformation:
      '<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> REAL SKATEBOARD GRAPHICS: The Tech Deck Ultra DLX Pack includes 4 fingerboard decks with authentic graphics from the biggest brands in skateboarding.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> CUSTOMIZE: Receive 4 boards with authentic skate graphics to build and customize. Collect the whole series!  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> OFFICIAL: These decks are the real deal! Ride, flip, and grind with an official finger board from real skate companies! From grip tape to bushings, these decks have been recreated down to the smallest detail.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> BECOME A TECH DECK PRO: Grind your new boards on Tech Deck fingerboard obstacles and playsets like the expansive X-Connect World. Shred and ollie on the X-Connect Shredline and Sk8 Garage Skatepark (each sold separately) for new ways to play and progress.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> COLLECT THEM ALL: Great toys for boys or toys for girls and gifts for kids that love collectibles, toy figures &amp; playsets, or mini skateboards. Great Christmas gift, or birthday gifts ages 6 and up!  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Includes: 1 Assembled Board, 3 Boards with Grip Tape, 2 Sticker Sheets, 12 Wheels, 1 Skate Tool, 6 Skateboard Trucks, 24 Screws, 18 Nuts  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Covered by the Spin Master Care Commitment. See below for full details  </span></li>  </ul>',
    links: [{ title: 'Amazon', link: 'https://amzn.to/3uHV0sl' }],
    price: 27,
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
    title: '12 Rules for Life: An Antidote to Chaos – Jordan Peterson',
    images: ['https://m.media-amazon.com/images/I/61BRxtp9qtL._SY522_.jpg'],
    collections: ['cheap'],
    tags: ['smart', 'dumb', 'easy', 'lifestyle'],
    flair: ['prime'],
    description: `<span class="a-text-bold">#1 NATIONAL BESTSELLER&nbsp;<br></span><span class="a-text-bold"><br>#1 INTERNATIONAL BESTSELLER<br><br>What does everyone in the modern world need to know? <br><br>Renowned psychologist Jordan B. Peterson's answer to this most difficult of questions uniquely combines the hard-won truths of ancient tradition with the stunning revelations of cutting-edge scientific research.</span><span><br><br>Humorous, surprising and informative, Dr. Peterson tells us why skateboarding boys and girls must be left alone, what terrible fate awaits those who criticize too easily, and why you should always pet a cat when you meet one on the street.<br><br>What does the nervous system of the lowly lobster have to tell us about standing up straight (with our shoulders back) and about success in life? Why did ancient Egyptians worship the capacity to pay careful attention as the highest of gods? What dreadful paths do people tread when they become resentful, arrogant and vengeful? <br><br>Dr. Peterson journeys broadly, discussing discipline, freedom, adventure and responsibility, distilling the world's wisdom into 12 practical and profound rules for life. </span><span class="a-text-italic">12 Rules for Life</span><span>&nbsp;shatters the modern commonplaces of science, faith and human nature, while transforming and ennobling the mind and spirit of its readers.</span>`,
    additionalInformation: `<div class="a-section bucket detail-bullets-wrapper feature"data-cel-widget=detailBulletsWrapper_feature_div data-feature-name=detailBullets data-template-name=detailBullets id=detailBulletsWrapper_feature_div><hr aria-hidden=true class="a-divider-normal bucketDivider"><h2>Product details</h2><div id=detailBullets_feature_div><ul class="a-nostyle a-unordered-list a-vertical a-spacing-none detail-bullet-list"><li class="list-disc"><span class=a-list-item><span class=a-text-bold>Publisher ‏ : ‎ </span><span>Random House Canada; Later prt. edition (January 23, 2018)</span></span><li class="list-disc"><span class=a-list-item><span class=a-text-bold>Language ‏ : ‎ </span><span>English</span></span><li class="list-disc"><span class=a-list-item><span class=a-text-bold>Hardcover ‏ : ‎ </span><span>409 pages</span></span><li class="list-disc"><span class=a-list-item><span class=a-text-bold>ISBN-10 ‏ : ‎ </span><span>0345816021</span></span><li class="list-disc"><span class=a-list-item><span class=a-text-bold>ISBN-13 ‏ : ‎ </span><span>978-0345816023</span></span><li class="list-disc"><span class=a-list-item><span class=a-text-bold>Item Weight ‏ : ‎ </span><span>1.45 pounds</span></span><li class="list-disc"><span class=a-list-item><span class=a-text-bold>Dimensions ‏ : ‎ </span><span>6.6 x 1.4 x 9.3 inches</span></span></ul></div><ul class="a-nostyle a-unordered-list a-vertical a-spacing-none detail-bullet-list"><li class="list-disc"><span class=a-list-item><span class=a-text-bold>Best Sellers Rank: </span>#240 in Books (<a href="/gp/bestsellers/books/ref=pd_zg_ts_books">See Top 100 in Books</a>)<ul class="a-nostyle a-unordered-list a-vertical zg_hrsr"><li class="list-disc"><span class=a-list-item>#1 in <a href="/gp/bestsellers/books/11130/ref=pd_zg_hrsr_books">Popular Applied Psychology</a></span><li class="list-disc"><span class=a-list-item>#17 in <a href="/gp/bestsellers/books/4745/ref=pd_zg_hrsr_books">Personal Transformation Self-Help</a></span><li class="list-disc"><span class=a-list-item>#18 in <a href="/gp/bestsellers/books/4749/ref=pd_zg_hrsr_books">Success Self-Help</a></span></ul></span></ul><ul class="a-nostyle a-unordered-list a-vertical a-spacing-none detail-bullet-list"><li class="list-disc"><span class=a-list-item><span class=a-text-bold>Customer Reviews:</span><style>.noUnderline a:hover{text-decoration:none}.cm-cr-review-stars-spacing-big{margin-top:1px}</style><div id=detailBullets_averageCustomerReviews data-asin=0345816021 data-ref=dpx_acr_pop_><span class=a-declarative data-action=acrStarsLink-click-metrics data-csa-c-func-deps=aui-da-acrStarsLink-click-metrics data-csa-c-id=fppeus-mb7tws-d4cygg-8zeatf data-csa-c-type=widget data-acrstarslink-click-metrics={}><span class="noUnderline reviewCountTextLinkedHistogram"id=acrPopover title="4.7 out of 5 stars"><span class=a-declarative data-action=a-popover data-csa-c-func-deps=aui-da-a-popover data-csa-c-id=dxzvk4-dqbyyj-9qu48-9rxhi2 data-csa-c-type=widget data-a-popover='{"max-width":"700","closeButton":"false","position":"triggerBottom","url":"/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&asin=0345816021"}'><a href=javascript:void(0) class="a-declarative a-popover-trigger"role=button><span class="a-size-base a-color-base">4.7 </span><i class="a-icon a-icon-star a-star-4-5 cm-cr-review-stars-spacing-big"><span class=a-icon-alt>4.7 out of 5 stars</span></i> <i class="a-icon a-icon-popover"></i></a> </span><span class=a-letter-space></span> </span></span><span class=a-letter-space></span> <span class=a-declarative data-action=acrLink-click-metrics data-csa-c-func-deps=aui-da-acrLink-click-metrics data-csa-c-id=quqrnp-1rcjgt-ha3zo0-gm7dhj data-csa-c-type=widget data-acrlink-click-metrics={}><a href=#customerReviews class=a-link-normal id=acrCustomerReviewLink><span class=a-size-base id=acrCustomerReviewText>60,151 ratings</span></a></span><script>var dpAcrHasRegisteredArcLinkClickAction;P.when("A","ready").execute(function(c){!0!==dpAcrHasRegisteredArcLinkClickAction&&(dpAcrHasRegisteredArcLinkClickAction=!0,c.declarative("acrLink-click-metrics","click",{allowLinkDefault:!0},function(c){window.ue&&ue.count("acrLinkClickCount",(ue.count("acrLinkClickCount")||0)+1)}))})</script><script>P.when("A","cf").execute(function(c){c.declarative("acrStarsLink-click-metrics","click",{allowLinkDefault:!0},function(c){window.ue&&ue.count("acrStarsLinkWithPopoverClickCount",(ue.count("acrStarsLinkWithPopoverClickCount")||0)+1)})})</script></div></span></ul><div class=a-row></div><div class=a-row></div></div>`,
    links: [{ title: 'Amazon', link: 'https://amzn.to/3OY2lei' }],
    price: 15,
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description: '',
    },
  },
  {
    slug: 'optimum-nutrition-gold-standard-whey-protein-powder',
    title: 'Optimum Nutrition Gold Standard Whey Protein Powder',
    images: [
      'https://m.media-amazon.com/images/I/71lttf6xi7L._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/813MSxTRhbL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/81Ae1lQJkVL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/81UsOFlXmWL._AC_SX450_.jpg',
      'https://m.media-amazon.com/images/I/712uI1vkZbL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/81Yg2YQIEbL._AC_SY450_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/e62c6197-93b0-4d70-9eb0-431c6a2e838a/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/51Ut3GHM59L.SX522_.jpg',
      },
    ],
    price: 84,
    description:
      '<!-- show up to 2 reviews by default --><p> </p><p><span>OPTIMUM NUTRITION\'S GOLD STANDARD 100% Whey uses pure Whey Protein Isolates as the primary ingredient. Combined with ultra-filtered whey protein concentrate, each serving provides 24 grams of all-whey protein and 5.5 grams of naturally occurring Branched Chain Amino Acids (BCAAs) which are prized by athletes for their muscle building qualities. With more than 20 tempting flavors to choose from, ON GOLD STANDARD 100% Whey gives you plenty of ways to keep workout recovery interesting. Search "ON Apparel TRUE STRENGTH" to see our new ON clothing line!</span></p>  <p></p>',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Gold Standard 100% Whey Protein: 24 grams of blended protein consisting of whey protein isolate, whey protein concentrate, and whey peptides to support lean muscle mass - they don\'t call it the Gold Standard of quality for nothing  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 5.5 grams of naturally occurring branched chain amino acids (BCAAs) and 11 grams of naturally occurring essential amino acids (EAAs) per serving to support muscle recovery  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Anytime formula: great before or after exercise, between meals, with a meal, or any time of day when you need extra protein  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Banned substance tested and the highest quality control measures so you feel comfortable and confident consuming the product  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Optimum Nutrition is the World\'s #1 Sports Nutrition Brand*  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> *Source Euromonitor International Limited; Consumer Health 2023 Edition, Sports Nutrition category, % retail value shares, 2022 data  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['cheap', 'dumb', 'lifestyle'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/48ocB6k',
      },
    ],
    flair: ['prime'],
    tags: [],
    rank: {
      price: 2,
      quality: 5,
      vibes: 5,
      description: 'The best protein powder in the best flavor, period. All bros agree.',
    },
  },
  {
    slug: 'apple-airpods-max',
    title: 'Apple AirPods Max',
    images: [
      'https://m.media-amazon.com/images/I/81jqUPkIVRL._AC_SX342_.jpg',
      'https://m.media-amazon.com/images/I/81S533RgkwL._AC_SX342_.jpg',
      'https://m.media-amazon.com/images/I/71aAV-Vhg8L._AC_SX342_.jpg',
      'https://m.media-amazon.com/images/I/712Jl7+DA4L._AC_SX342_.jpg',
      'https://m.media-amazon.com/images/I/91lPKrrfwYS._AC_SX342_.jpg',
      'https://m.media-amazon.com/images/I/71urS8imiUL._AC_SX342_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/6d6dd680-d893-4dc2-9883-f6874ba65d99/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/71j7AK0ImLL.SX522_.jpg',
      },
    ],
    relatedProducts: [
      'apple-macbook-pro-m3-2023',
      'akatsuke-mat',
      'mechanical-keyboard-brown-switches',
      'haworth-fern-office-chair',
    ],
    price: 525,
    description:
      'Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> BREATHTAKING AUDIO QUALITY — Apple-designed dynamic driver provides high-fidelity audio. Computational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> FOCUS ON WHAT’S PLAYING — Active Noise Cancellation blocks outside noise so you can immerse yourself in music.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> HEAR THE WORLD AROUND YOU — Transparency mode lets you hear and interact with the world around you.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> PERSONALIZED SPATIAL AUDIO — With sound that suits your unique ear shape along with dynamic head tracking, AirPods Max deliver an immersive listening experience that places sound all around you. You can also listen to select songs, shows, and movies in Dolby Atmos.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> ACOUSTIC-FIRST DESIGN — Designed with a knit-mesh canopy and memory foam ear cushions for an exceptional over-ear fit that perfectly seals in sound.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> MAGICAL EXPERIENCE — Pair AirPods Max by simply placing them near your device and tapping Connect on your screen. AirPods Max pause audio when you take them off. And Automatic Switching makes listening between your iPhone, iPad, and Mac completely effortless.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> LONG BATTERY LIFE — Up to 20 hours of listening, movie watching, or talk time with Active Noise Cancellation and Personalized Spatial Audio enabled.  </span></li>  </ul>   <!-- Loading EDP related metadata -->      <div class="a-row a-expander-container a-expander-inline-container"> <div aria-expanded="false" class="a-expander-content a-expander-extend-content" style="display:none">    <ul class="a-unordered-list a-vertical a-spacing-none">  <li class="a-spacing-mini"><span class="a-list-item">PRECISION CONTROL — Use the Digital Crown to play and pause music, to answer, end, and mute yourself on calls, and to control volume and skip between tracks.</span></li>  <li class="a-spacing-mini"><span class="a-list-item">A SMARTER CASE — Store in an ultra low-power state with the slim Smart Case.</span></li>  <li class="a-spacing-mini"><span class="a-list-item">LEGAL DISCLAIMERS — This is a summary of the main product features. See “Additional information” to learn more.</span></li>  </ul>   </div> <a data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" aria-expanded="false" role="button" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-extend-header" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Show more&quot;, &quot;collapse_prompt&quot;:&quot;Show less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Show more</span></a>  </div>',
    collections: ['expensive'],
    tags: ['apple', 'airpods', 'max', 'headphones', 'easy', 'tech'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/42M1S4x',
      },
      {
        title: 'Apple',
        link: 'https://www.apple.com/airpods-max/',
      },
    ],
    flair: ['prime'],
    rank: {
      price: 3,
      quality: 5,
      vibes: 3,
      description:
        'Simply the best over ear headphones on the market. Probably not the coolest looking headphones, but arguable also the coolest looking headphones.',
    },
  },
  {
    slug: 'crocs-unisex-adult-minecraft-clog',
    title: 'Crocs Minecraft Clogs',
    images: [
      'https://m.media-amazon.com/images/I/81a-GNuHb+L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81LneZsGG8L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81srG0X7HSL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91oU8uXL+cL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71bymF2i2cL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91-J52rd3sL._AC_SL1500_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/63dd1acb-f6b0-450c-af23-d94007154f8d/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/91fspNg6TDL.SX522_.png',
      },
    ],
    price: 60,
    description:
      '<!-- show up to 2 reviews by default --><p> <span>Step into adventure mode with Minecraft x Crocs, built from the ground up and brought to life for real-world escapades. © 2023 Mojang AB. All Rights Reserved. Minecraft, the MINECRAFT logo and the MOJANG STUDIOS logo are trademarks of the Microsoft group of companies.</span>  </p>',
    additionalInformation: '',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/49Kas67',
      },
    ],
    flair: ['prime'],
    tags: ['lifestyle', 'easy'],
    rank: {
      price: 2,
      quality: 5,
      vibes: 5,
      description: 'Literally cannot be any more swagged out than some minecraft Crocs.',
    },
  },
  {
    slug: 'fender-player-stratocaster-black-bundle',
    title: 'Fender Player Stratocaster®',
    images: [
      'https://m.media-amazon.com/images/I/811bQoNd7LL._AC_SY606_.jpg',
      'https://m.media-amazon.com/images/I/61ZnYD870eL._AC_SY879_.jpg',
      'https://m.media-amazon.com/images/I/61HY14KvSzL._AC_SY879_.jpg',
      'https://m.media-amazon.com/images/I/71tZSAWAoqL._AC_SX450_.jpg',
      'https://m.media-amazon.com/images/I/81hwSlTc6LL._AC_SX450_.jpg',
      'https://m.media-amazon.com/images/I/71+TCejiKzL._AC_SX450_.jpg',
      'https://m.media-amazon.com/images/I/71+rNK0Hy7L._AC_SX450_.jpg',
    ],
    videos: [
      {
        link: 'https://d1f0esyb34c1g2.cloudfront.net/transcode/storyTeller/A1455M4GZBYJ66/6b6a22d0-66cb-43f4-8689-f355dc2da3ae-SBV_291884-T1/b8d67515-1fde-4153-8388-9b4e69da4494/1603906339496sbv.mp4',
        poster:
          'https://d1f0esyb34c1g2.cloudfront.net/transcode/storyTeller/A1455M4GZBYJ66/6b6a22d0-66cb-43f4-8689-f355dc2da3ae-SBV_291884-T1/b8d67515-1fde-4153-8388-9b4e69da4494/1603906339496.0000000.jpg',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/4a71db4a-f535-416e-bce1-687715e348e4.mp4/productVideoOptimized.mp4',
        poster:
          'https://d1f0esyb34c1g2.cloudfront.net/transcode/AssetLibrary/AssetLibrary/amzn1.assetlibrary.asset1.cb8ad579c6e9de2f4b323d22c3a071e3:version_v1/20438b41-f6b9-45d2-97f5-9b8e49a7e325/1663770720823.0000001.jpg',
      },
      {
        link: 'https://d1f0esyb34c1g2.cloudfront.net/transcode/storyTeller/ENTITY2LNEJFANNN7QS/afa5136e-05d3-403b-b1eb-ad721adce2ea/ba0172c2-ff3a-4363-82b1-dae73bf3f874/1613510558235sbv.mp4',
        poster:
          'https://d1f0esyb34c1g2.cloudfront.net/transcode/storyTeller/ENTITY2LNEJFANNN7QS/afa5136e-05d3-403b-b1eb-ad721adce2ea/ba0172c2-ff3a-4363-82b1-dae73bf3f874/1613510558235.0000000.jpg',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/9e9c0426-800f-4cfe-8bbd-9a22a6972f49.mp4/productVideoOptimized.mp4',
        poster:
          'https://d1f0esyb34c1g2.cloudfront.net/transcode/AssetLibrary/AssetLibrary/amzn1.assetlibrary.asset1.3953ae21beeb4c607c1e7986adc552e8:version_v1/6dcf1519-43b6-4d72-b0f4-744075a25154/1697077064523_THUMBNAIL-360P-FRAME-3-CAPTURE-2.0000001.jpg',
      },
      {
        link: 'https://d1f0esyb34c1g2.cloudfront.net/transcode/storyTeller/A1HCW54TXS7F4T/1667508622697/e9571956-26a7-4c9d-9e4e-04c8f512a0a7/1667509652500sbv.mp4',
        poster:
          'https://d1f0esyb34c1g2.cloudfront.net/transcode/storyTeller/A1HCW54TXS7F4T/1667508622697/e9571956-26a7-4c9d-9e4e-04c8f512a0a7/1667509652500.0000000.jpg',
      },
    ],
    price: 850,
    description:
      "<!-- show up to 2 reviews by default --><p> <span>The inspiring sound of a Stratocaster is one of the foundations of Fender. Featuring this classic sound - bell-like high end, punchy mids and robust low end, combined with crystal-clear articulation - the Player Stratocaster is packed with authentic Fender feel and style. It's ready to serve your musical vision, it's versatile enough to handle any style of music and it's the perfect platform for creating your own sound. Respecting our heritage while maintaining our innovative spirit, the power trio of Player Series single-coil pickups are crisp and articulate - it's authentic Fender tone with a modern edge. The \"Modern C\"-shaped maple neck's comfortable contours and smooth finish are ideal for almost any playing style. By adding a 22nd medium jumbo fret to the contemporary 9.5\"-radius fingerboard we've made it easier to express yourself musically. The updated 2-point tremolo design has smoother travel for enhanced playing feel while simultaneously giving you rock-solid tuning stability since there's less friction against the posts. Other features include master volume and tone controls, a 5-way pickup switch, 3-ply pickguard, synthetic bone nut, dual-wing string tree, sealed tuning machines and four-bolt \"F\"-stamped neck plate that marks this instrument as the real deal - as Fender as it gets. Own your tone and create something new with the Player Stratocaster.FINGERBOARD RADIUS: 9.5' (241 mm)NUMBER OF FRETS: 22TRUSS ROD: StandardTRUSS ROD NUT: 3/16' Hex AdjustmentSTRING NUT: Synthetic BoneNUT WIDTH: 1.650' (42 mm)NUT MATERIAL: Synthetic BoneBRIDGE: 2-Point Synchronized Tremolo with Bent Steel SaddlesBODY FINISH: Gloss PolyesterBRIDGE PICKUP: Player Series Alnico 5 Strat Single-CoilPICKUP CONFIGURATION: SSSAdding value to your purchase, Austin Bazaar bundles your instrument with quality accessories, saving you time and money. Transport and store your guitar in style with the included Fender premium w</span>  </p>",
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> PLAYER SERIES PICKUPS: Designed for authentic Fender tone - with a bit of an edge - our Player Series pickups are crisp and articulate, a modern tweak of our classic sound.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 2-POINT TREMOLO BRIDGE: This Stratocaster features a two-point tremolo bridge for smooth, superior tremolo action.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 22-FRET NECK: Adding another fret extends the range, while the \'Modern C\'-shaped neck profile is comfortable for almost any playing style.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> COMFORTABLE: The "Modern C"-shaped maple neck\'s comfortable contours and smooth finish are ideal for almost any playing style. By adding a 22nd medium jumbo fret to the contemporary 9.5"-radius fingerboard we\'ve made it easier to express yourself musically.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> EVERYTHING YOU NEED IN ONE BOX: Adding value to your purchase, Austin Bazaar bundles your instrument with quality accessories, saving you time and money. Transport and store your guitar in style with the included Fender premium wood case. The added 10ft instrument cable, clip-on tuner, guitar strap, nickel strings and 24-pack picks are a reliable choice for your needs in the studio and on stage. Learn more about your instrument with the included Austin Bazaar Instructional DVD.  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['expensive'],
    relatedProducts: ['daddario-pro-winderoriginal-guitar-string-winder-cutter'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/49sQFYX',
      },
    ],
    tags: ['lifestyle', 'easy'],
    flair: ['prime', 'Best Guitar'],
    rank: {
      price: 3,
      quality: 5,
      vibes: 5,
      description:
        'The "Mexican Strat" is the best blend of affordability, sound, and playability. This kit gives you everything you need to get on your feet and go from newbie to playing shows.',
    },
  },
  {
    slug: 'xbox-series-x-1tb',
    title: 'Xbox Series X 1TB',
    images: [
      'https://m.media-amazon.com/images/I/51ojzJk77qL._SX342_.jpg',
      'https://m.media-amazon.com/images/I/61c937dHIvL._SX342_.jpg',
      'https://m.media-amazon.com/images/I/71ut3JnAiUL._SX342_.jpg',
      'https://m.media-amazon.com/images/I/51b72fFNWRL._SX342_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/4e508e43-40ec-4ba8-9499-5d8d5ee771c6/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/410cvzsv59L.SX522_.jpg',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/e21d94c2-f97d-4a63-a593-8b0cf006111b.mp4/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/e21d94c2-f97d-4a63-a593-8b0cf006111b.mp4/r/THUMBNAIL_1080P_FRAME_3_CAPTURE_2.JPG',
      },
      {
        link: 'https://d1f0esyb34c1g2.cloudfront.net/transcode/storyTeller/A2CBHOW8LPM3Y6/1624404332005/ccf8837d-fc2d-45e4-90ea-dd1894ba385e/1624404380968sbv.mp4',
        poster:
          'https://d1f0esyb34c1g2.cloudfront.net/transcode/storyTeller/A2CBHOW8LPM3Y6/1624404332005/ccf8837d-fc2d-45e4-90ea-dd1894ba385e/1624404380968.0000000.jpg',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/f6f6940d-2c07-4d61-8ae6-22ee28144257.mp4/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/f6f6940d-2c07-4d61-8ae6-22ee28144257.mp4/r/THUMBNAIL_1080P_FRAME_3_CAPTURE_2.JPG',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/cc96d5df-33f9-4037-9acf-bf8874a65c32.mp4/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/cc96d5df-33f9-4037-9acf-bf8874a65c32.mp4/r/THUMBNAIL_1080P_FRAME_3_CAPTURE_2.JPG',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/bb42ce41-b374-465f-b782-3826834ee0ba.mp4/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/bb42ce41-b374-465f-b782-3826834ee0ba.mp4/r/THUMBNAIL_360P_FRAME_3_CAPTURE_2.JPG',
      },
    ],
    price: 449,
    description:
      '<!-- show up to 2 reviews by default --><p> <span>Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever. And when you add Xbox Game Pass Ultimate (membership sold separately), you get online multiplayer to play with friends and an instant library of 100+ high-quality games, including day one releases from Xbox Game Studios.*</span>  </p>',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> XBOX SERIES X: The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.*  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> FASTER LOAD TIMES: Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS – all powered by Xbox Velocity Architecture.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> IN THE BOX: Xbox Series X console, one Xbox Wireless Controller, an ultra high-speed HDMI cable, power cable, and 2 AA batteries.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SURROUND SOUND: Enhance gameplay with both full-spectrum visuals and immersive audio with Dolby Vision and Dolby Atmos  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['expensive'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3wrzbxE',
      },
    ],
    flair: ['prime'],
    tags: ['tech', 'easy', 'toy'],
    rank: {
      price: 3,
      quality: 5,
      vibes: 5,
      description: '',
    },
  },
  {
    slug: 'litter-robot-4',
    title: 'Litter Robot 4',
    images: [
      'https://m.media-amazon.com/images/I/816HD3JHl1L._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/71PPQppaY7L._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/81lp8K65a0L._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/81zZmRf-VdL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/81M3N4plO-L._AC_SX522_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/8a43aff9-1923-46a1-b26d-1b3c3070c3bf/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/61ykLqmuNgL.SX522_.jpg',
      },
    ],
    price: 899,
    description:
      'Never scoop again with Litter-Robot 4: The smartest, quietest, highest-rated WIFI-enabled, self-cleaning litter box for cats. Add a Carpet Tray to use Litter-Robot 4 on any surface.',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> LITTER-ROBOT 4 BUNDLE: Save on the Litter-Robot 4 Bundle, which comes complete with Litter-Robot 4 automatic litter box, ramp, fence, Litter-Robot LitterTrap Mat, OdorTrap Holder with 6 OdorTrap Packs &amp; 50 waste drawer liners.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SELF-CLEANING LITTER BOX: Never scoop again with Litter-Robot 4, the automatic, self-cleaning cat litter box. The patented sifting process automatically separates your cat\'s waste from the clean litter. Just empty the waste drawer when full.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> MONITOR + CONTROL VIA APP: Control the smart litter box straight from the Whisker app. Monitor waste and litter levels in real time, see litter box activity, and track kitty’s weight after each use. Compatible with any clumping litter.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> REDUCES LITTER BOX ODORS &amp; TRACKING: The automatic clean cycle and OdorTrap Packs significantly reduce odors compared to standard litter boxes. The LitterTrap Mat and fence reduce litter tracking by catching litter on the way out.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SAFETY &amp; USE: Suitable for up to 4 cats; each cat must weigh at least 3 lbs (1.4 kg) to safely use Litter-Robot in Automatic Mode. Weight scale technology is most accurate when the unit sits on a firm surface, not carpeting or uneven surfaces.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> DESIGNED &amp; ASSEMBLED IN THE USA: Litter-Robot comes with our comprehensive WhiskerCare 1-Year Warranty with an extended plan available for purchase. Whisker products may be returned within 90 days of receipt for a full refund minus shipping.  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['expensive'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3SQ0068',
      },
      {
        title: 'Litter Robot',
        link: generateUTM('https://www.litter-robot.com/litter-robot-4.html'),
      },
    ],
    flair: ['prime'],
    tags: ['tech', 'easy', 'lifestyle'],
    rank: {
      price: 4,
      quality: 5,
      vibes: 5,
      description:
        "Listen, I f-ing hate anything to do with litter.<br><br>If you never want to scoop litter again, here you go. It's wifi connected, it supports multi-cats, and tells you when it's full. Not cheap but simply the best.",
    },
  },
  {
    slug: 'zum-goats-milk-soap-bar-3-pack',
    title: 'Zum Bar Soap (3 Pack)',
    images: [
      'https://m.media-amazon.com/images/I/71sL39GiEEL._SY355_.jpg',
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/0a1e3e7b-3b14-4401-aee9-6cf7f04c6e40.__CR0,0,1455,450_PT0_SX970_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/1083ea62-ab89-424c-aa23-f8138d3152ae.__CR0,0,1455,450_PT0_SX970_V1___.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/5143c1ae-1c64-43ad-8fcd-1b70fb9b1b29/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/61BDg+lqCUL.SX522_.jpg',
      },
    ],
    price: 18,
    description:
      "Saponified 100% food grade olive, coconut, palm & castor oils, in a goat's milk base, with herbs, essential oils,mineral pigments, and aloe ferox. Enjoy! *Zum Bars contain natural mineral pigments that may stain when rubbed directly on fabrics, washcloths, or clothing.",
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Plant-Packed Formula: Crafted with natural, food-grade oils like olive, coconut, palm and castor oils, goat milk and essential oils  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Goat Milk Soap Benefits: Zum Bars are jam-packed with nutrients and created using a cold-processed method to maintain the integrity of the goat\'s milk and other ingredients  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Lavender Soap Bundle Scent Notes: Lavender Zum features classic floral lavender paired with woodsy frankincense, earthy rosemary and energizing mint  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Natural &amp; Cruelty-Free: We use ingredients from nature and don\'t test our products on animals, making our products vegetarian and cruelty-free  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> About Zum by Indigo Wild: Zum’s natural products for body and home are handcrafted in the U.S.A. with ingredients you can say, spell and love to smell  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['best', 'easy', 'lifestyle'],
    tags: [],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3UTjMAm',
      },
    ],
    flair: ['prime', 'Best Soap'],
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description: 'The best soap for your or your bro',
    },
  },
  {
    slug: 'nectar-copper-14-queen-mattress',
    title: '14" Queen Mattress',
    images: [
      'https://m.media-amazon.com/images/I/81WBGPBD0pL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/717yWUytXZL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/81c7gFBPKcL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/81nQXSkl6dL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/81WPrVPd1IL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/81WWlXmayBL._AC_SX522_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/d0664908-6000-42a0-b570-00f12aae3d43/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/51QrA+sdr1L.SX522_.jpg',
      },
    ],
    price: 1249,
    description:
      "<!-- show up to 2 reviews by default --><p> <span>JOIN MORE THAN 5.5 MILLION HAPPY SLEEPERS. Recognized as the fastest-growing e-commerce retailer by Internet Retailer, Nectar is part of the Resident family of brands. Our award-winning memory foam and hybrid mattresses have premium layers with a cooling cover to ensure you'll be ready to seize the day, night, and everything in between. We offer a 365-night trial to make sure Nectar is right for you–sleep on it in all four seasons. Nectar is built to the highest standards with innovative, quality materials. We stand behind our construction and craftsmanship for as long as you own your mattress with our Forever Warranty™–the longest in the industry.</span>  </p>",
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Mesh  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 365-NIGHT HOME TRIAL - Our industry-leading year-long trial period starts the day your Nectar mattress is delivered. Sleep on it in all four seasons.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> THERAPEUTIC GEL MEMORY FOAM - Nectar is a gel memory foam bed-in-a-box mattress designed for every kind of sleeper. It helps you sleep cool and conforms to every curve. Get support where you need it, and comfort where you want it.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> TRIPLE-ACTION COOLING - Sleep easy breezy on a breathable cover with cooling technology and real copper fibers that wick heat. ActiveCool HD-infused phase change material reacts to your body temp.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> PERFECT SUPPORT FOR ANY POSITION - Whether you\'re a side sleeper, back sleeper, stomach sleeper, or just toss and turn, Nectar offers optimal level of firmness, coolness, breathability, and comfort.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> FOREVER WARRANTY - We guarantee the mattress for as long as you own it. We offer the longest warranty in the industry, and proudly stand behind our products.  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['expensive'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3UN3Q2B',
      },
    ],
    flair: ['prime'],
    tags: ['easy', 'lifestyle'],
    rank: {
      price: 5,
      quality: 5,
      vibes: 5,
      description:
        'I waded through many show room floors and shitty alternatives to land upon this mattress. The reviews speak for themselves. I have the king, but yanno, do your thing, king.',
    },
  },
  {
    slug: 'akatsuke-mousepad',
    title: 'Akatuske Mousepad',
    images: ['https://m.media-amazon.com/images/I/41AuOAwvyAL._AC_SY355_.jpg'],
    price: 22,
    description:
      '<!-- show up to 2 reviews by default --><p> <span>Extended Mouse Pad:31.5x11.8x0.16 Inch provides perfect movement space. High-quality Material:100%Polyester cloth, and 4mm thickness Rubber pad. Package Includes:1 x Extended Gaming Mousepad with Stitched Edges (4mm thickness). Non-Slip Rubber Base:The soft and dense non-skid nature rubber base keeps the pad firmly in surface. Durable Design:The durable stitched edges and the high-density premium texture ensure long-term use. Ultra Smooth Surface:Smooth surface and accurate mouse movement improve gaming and working experience.</span>  </p>',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Size: 31.5 x 11.8 x 0.16 inches  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Ultra-smooth Cover: 4mm Rubber pad at the bottom  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> ANTI-SLIP RUBBER BASE：Adopting High Elasticity Natural Rubber Material  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Waterproof &amp; Easy-Clean: Effectively prevent damage from spilled drinks or other accidents  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> DELICATE STITCHED EDGES：Our Mouse Pad Features Durable Stitched Edges To Prevent The Mouse Pad From Fraying And Degumming  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/49uVhOy',
      },
    ],
    flair: ['prime'],
    tags: ['easy', 'lifestyle'],
    rank: {
      price: 1,
      quality: 4,
      vibes: 5,
      description:
        'The cheapest way to flex on all your homies and let them know what a bad boy you are.',
    },
  },
  {
    slug: 'yogasleep-dohm-uno-white-noise-sound-machine',
    title: 'White Noise Sound Machine',
    images: [
      'https://m.media-amazon.com/images/I/61T+QOLlemL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/71aasvEp5PL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/81K-fhhfDuL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/81q8MJvcJpL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/811sez7qOXL._AC_SY450_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/v2/8c13a149-23e9-5519-8836-e781dc7e0f34/ShortForm-Generic-480p-16-9-1409173089793-rpcbe5.mp4',
        poster: 'https://m.media-amazon.com/images/I/51LrECeHzRL.SX522_.jpg',
      },
    ],
    price: 37,
    description:
      '<!-- show up to 2 reviews by default --><p> <span>Beloved by generations since 1962, the Dohm is the original white noise machine. The Uno model features our fan based natural white noise producing our signature sound – the soothing ambient sounds of rushing air, without the disturbance of actual moving air or other irritations. With a single speed option and adjustable tone and volume, the Dohm Uno makes it simple to create a personalized sound environment, excellently masking background sounds and allowing for better sleep, office privacy, effective soothing for kids and babies, and calming for sound-sensitive dogs. Powered by a 6-foot 120V AC plug (for domestic use only), just plug in the Dohm Uno, flip the switch, then rotate the cap and collar to find the best sound for you. Let the noise-masking magic happen for a natural sleep aid, office privacy, baby soothing, tinnitus relief, respite from noisy snorers and unfamiliar hotel rooms, and a relaxing calming balm for barking dogs. The Dohm Uno features a simple and compact design that fits anywhere and blends unobtrusively into surroundings.</span>  </p>',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> THE ORIGINAL WHITE NOISE MACHINE, SIMPLIFIED: Beloved by generations since 1962, the Dohm Uno model features our fan-based natural white noise producing our signature sound – the soothing ambient sounds of rushing air, without the disturbance of actual moving air.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> CUSTOMIZED SOUND EXPERIENCE: With one-speed option for adjustable volume, the Dohm Uno makes it simple to create a personalized sound environment, excellently masking background noise and allowing for better sleep, office privacy, effective soothing for kids and babies, and calming for sound-sensitive dogs.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> UNBEATABLE QUALITY &amp; GUARANTEE: Sleeping is believing. For over 50 years, Yogasleep by Marpac has been the gold standard in white noise machines - read the reviews and you\'ll learn why. Assembled for decades in the USA and backed by a one-year limited warranty and the always exceptional Yogasleep customer service promise, we stand behind each product and offer you a 101 night trial to try it out.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> SIMPLE TO USE: Powered by a 6-foot 120V AC plug, just plug in the Dohm Uno, flip the switch to on, then rotate the collar to find the best sound for you. Let the noise-masking magic happen for a natural sleep aid, office privacy, baby soothing, tinnitus relief, respite from noisy snorers and unfamiliar hotel rooms, and a relaxing calming balm for barking dogs.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> CLASSIC DESIGN: Featuring a compact and basic design that fits anywhere and blends unobtrusively into surroundings.  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/42OL8tn',
      },
    ],
    flair: ['prime'],
    tags: ['easy', 'lifestyle', 'tech'],
    rank: {
      price: 2,
      quality: 5,
      vibes: 4,
      description:
        'The best sound machine out there. Makes real noise, not from a speaker, and you can adjust the sounds it makes.',
    },
  },
  {
    slug: 'be-here-now',
    title: 'Be Here Now – Ram Dass',
    images: [
      'https://m.media-amazon.com/images/I/81xNWm7jhXL._SY342_.jpg',
      'https://m.media-amazon.com/images/S/aplus-media/vc/24128703-f0ec-4b06-a050-5cda52baf78a.__CR0,0,300,300_PT0_SX300_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media/vc/12fb73a4-22ed-4524-8490-5ef15d4a76ba.__CR0,0,300,300_PT0_SX300_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media/vc/2b9c7745-4a62-4981-88d9-0cb43ed5fc11.__CR0,0,300,300_PT0_SX300_V1___.jpg',
      'https://m.media-amazon.com/images/S/aplus-media/vc/d2a654cb-fa2d-4901-88af-6c7bbd908433.__CR0,0,970,300_PT0_SX970_V1___.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/42dcbb8f-16f6-4590-b066-df32018a3e1c/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/61QvQ29TIrL.SX522_.jpg',
      },
    ],
    price: 9,
    description:
      "Be Here Now, or Remember, Be Here Now, is a 1971 book on spirituality, yoga, and meditation by the American yogi and spiritual teacher Ram Dass. The core book was first printed in 1970 as From Bindu to Ojas and its current title comes from a statement his guide, Bhagavan Das, made during Ram Dass's journeys in India. ",
    additionalInformation:
      '<h2 class="text-3xl font-bold mb-2 mt-4" data-svelte-h="svelte-1hps2m5">About the book</h2><div aria-expanded="true" class="a-expander-content a-expander-partial-collapse-content a-expander-content-expanded" style="padding-bottom: 20px;"> <span class="a-text-bold">Beloved guru Ram Dass tells the story of his spiritual awakening and gives you the tools to take control of your life in this “counterculture bible” (</span><span class="a-text-bold a-text-italic">The New York Times</span><span class="a-text-bold">) featuring powerful guidance on yoga, meditation, and finding your true self.</span><span><br><br>When </span><span class="a-text-italic">Be Here Now </span><span>was first published in 1971, it filled a deep spiritual emptiness, launched the ongoing mindfulness revolution, and established Ram Dass as perhaps the preeminent seeker of the twentieth century.<br><br>Just ten years earlier, he was known as Professor Richard Alpert. He held appointments in four departments at Harvard University. He published books, drove a Mercedes and regularly vacationed in the Caribbean. By most societal standards, he had achieved great success. . . . And yet he couldn’t escape the feeling that something was missing.&nbsp;<br>&nbsp;<br>Psilocybin and LSD changed that. During a period of experimentation, Alpert peeled away each layer of his identity, disassociating from himself as a professor, a social cosmopolite, and lastly, as a physical being. Fear turned into exaltation upon the realization that at his truest, he was just his inner-self: a luminous being that he could trust indefinitely and love infinitely.<br><br>And thus, a spiritual journey commenced. Alpert headed to India where his guru renamed him Baba Ram Dass—“servant of God.” He was introduced to mindful breathing exercises, hatha yoga, and Eastern philosophy. If he found himself reminiscing or planning, he was reminded to&nbsp;“Be Here Now.”&nbsp;He started upon the path of enlightenment, and has been journeying along it ever since.<br><br></span><span class="a-text-italic">Be Here Now</span><span>&nbsp;is a vehicle for sharing the true message, and a guide to self-determination.</span>  </div>',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/49obkgQ',
      },
    ],
    flair: ['prime'],
    tags: ['easy', 'hard', 'lifestyle'],
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description:
        'Get yourself some perspective on life n sheit, bro. Or read the Bible and FIND GOD',
    },
  },
  {
    slug: 'quest-3-128gb-',
    title: 'Quest 3 – 128GB',
    images: [
      'https://m.media-amazon.com/images/I/81whTB488bL._SX342_.jpg',
      'https://m.media-amazon.com/images/I/8135wwgyceL._SX342_.jpg',
      'https://m.media-amazon.com/images/I/61KC7rKQFpL._SX342_.jpg',
      'https://m.media-amazon.com/images/I/7198k6pwLML._SX342_.jpg',
      'https://m.media-amazon.com/images/I/61iW8kY+yXL._SX342_.jpg',
      'https://m.media-amazon.com/images/I/81yHEZvUyJL._SX342_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/0e134d83-fbf3-49e8-9bb6-1454bfe5370b/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/51ea89zXvZL.SX522_.jpg',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/9efc699d-2c51-4f75-a62a-43f62217b74a.mp4/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/9efc699d-2c51-4f75-a62a-43f62217b74a.mp4/r/THUMBNAIL_360P_FRAME_3_CAPTURE_2.JPG',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/8931ceb7-4b62-4154-92d2-7b5c458f730d.mp4/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/8931ceb7-4b62-4154-92d2-7b5c458f730d.mp4/r/THUMBNAIL_360P_FRAME_3_CAPTURE_2.JPG',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/2c073208-05b7-4912-8ca7-ef5d383ba666.mp4/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/2c073208-05b7-4912-8ca7-ef5d383ba666.mp4/r/THUMBNAIL_360P_FRAME_3_CAPTURE_2.JPG',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/60811430-abeb-41c5-bd68-5b44e13087f7.m4v/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/60811430-abeb-41c5-bd68-5b44e13087f7.m4v/r/THUMBNAIL_360P_FRAME_3_CAPTURE_2.JPG',
      },
      {
        link: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/68c3d475-53dd-4d11-b180-70e7bbbc5a2f.mov/productVideoOptimized.mp4',
        poster:
          'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/68c3d475-53dd-4d11-b180-70e7bbbc5a2f.mov/r/THUMBNAIL_1080P_FRAME_3_CAPTURE_2.JPG',
      },
    ],
    price: 499,
    description:
      "<!-- show up to 2 reviews by default --><p> <span>Expand your world with Meta Quest 3, a mixed reality headset that lets you jump into full immersion or blend physical and virtual worlds to transform your home into an exciting new playground. It’s the most powerful Quest yet, reimagined from the inside out with breakthrough technology. Extraordinary experiences come to life with lightning fast performance and dazzling details. And with the world's best library of 500+ immersive apps, there’s something for everyone to discover. Unlock access to the best immersive experiences with a 6-month subscription2 to Meta Quest+ and embark on a journey to save all of reality with the marquee VR action RPG Asgard’s Wrath 21. Included with purchase for a limited time. See child safety guidance online; Accounts for 10+. Based on the graphic performance of the Snapdragon XR2 Gen 2 vs Meta Quest 2. Asgard’s Wrath 2 is intended for mature audiences. Offer ends 3/30/24; terms apply. Eligibility and auto-renewal terms apply for trial subscriptions. See full terms. Unlock access to the best immersive experiences with a 6-month subscription2 to Meta Quest+ and embark on a journey to save all of reality with the marquee VR action RPG Asgard’s Wrath 21. Included with purchase for a limited time. See child safety guidance online; Accounts for 10+. Based on the graphic performance of the Snapdragon XR2 Gen 2 vs Meta Quest 2. Asgard’s Wrath 2 is intended for mature audiences. Offer ends 3/30/24; terms apply. Eligibility and auto-renewal terms apply for trial subscriptions. See full terms.</span>  </p>",
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Get the epic new Asgard’s Wrath 2 included (a $59.99 value)* when you buy Meta Quest 3 128GB*.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Dive into extraordinary experiences with a mixed reality headset that transforms your home into an exciting new playground, where virtual elements blend into your actual surroundings.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> It’s the most powerful Quest yet*, featuring next-level performance with more than double the graphic processing power of Quest 2. (*Based on the graphic performance of the Snapdragon XR2 Gen 2 vs Meta Quest 2.)  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Experience more immersion with dazzling visuals with the 4K+ Infinite Display (a nearly 30% leap in resolution from Quest 2) and rich 3D audio with enhanced sound clarity, bass performance and a 40% louder volume range than Quest 2  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Reach out and touch virtual worlds with Touch Plus controllers that give you fine-tuned precision, realistic sensations and more intuitive interactions. You can even navigate without controllers with Direct Touch that follows your gestures, so you can use just your hands to find your way.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Explore the world’s best library of 500+ immersive apps and find your favorite content across gaming, fitness, wellness, entertainment, social experiences and more.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Get up to 2.2 hours of usage on average with the option to extend your battery life further with Battery Saver mode. Use the included 18W power adapter to fully charge your headset.* (*Battery life is dependent on various factors such as device settings, usage, age of battery, Bluetooth usage, and wireless conditions.)  </span></li>  </ul>   <!-- Loading EDP related metadata -->      <div class="a-row a-expander-container a-expander-inline-container"> <div aria-expanded="false" class="a-expander-content a-expander-extend-content" style="display:none">    <ul class="a-unordered-list a-vertical a-spacing-none">  <li class="a-spacing-mini"><span class="a-list-item">Play what you love longer with maximum comfort. Personalize your fit with added customization and a redesigned slimmer profile compared to Quest 2.</span></li>  <li class="a-spacing-mini"><span class="a-list-item">Everyone in the family is safe to explore with privacy features and supervision tools. See child safety guidance online; Accounts for 10+.</span></li>  </ul>   </div> <a data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" aria-expanded="false" role="button" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-extend-header" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Show more&quot;, &quot;collapse_prompt&quot;:&quot;Show less&quot;}" data-csa-c-id="9zrdpg-ged0dg-cryzz1-mdc970"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Show more</span></a>  </div>',
    collections: ['expensive'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3uMpHfW',
      },
    ],
    flair: ['prime'],
    tags: ['tech', 'easy'],
    rank: {
      price: 4,
      quality: 4,
      vibes: 2,
      description:
        'If this is what you\'re into, the Quest 3 is the best bang for your buck. The rare "Don\'t be an apple sucker" on this one.',
    },
  },
  {
    slug: 'coleman-65cc-mini-bike',
    title: 'Coleman 65hp Mini Bike',
    images: [
      'https://m.media-amazon.com/images/I/81+ofcJCkjS._AC_SY355_.jpg',
      'https://m.media-amazon.com/images/I/71TPKn2cOwL._AC_SX355_.jpg',
      'https://m.media-amazon.com/images/I/71LBeHIlH0L._AC_SX355_.jpg',
      'https://m.media-amazon.com/images/I/71aIAkrqpgL._AC_SX355_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/268843bb-488c-447d-a450-baa083d275d7/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/61J-S8X04cL.SX522_.jpg',
      },
    ],
    price: 850,
    description:
      '<!-- show up to 2 reviews by default --><p> <span>The Coleman Trail200U (CT200U) is a nostalgic, reliable, affordable off-road trail mini bike that will take an adult back to their childhood. The Coleman mini bike will provide years of fun on the trail for the entire family. It comes with easy pull start operation, 196cc engine, low pressure tires for a soft and stable ride, rugged and proven clutch, jackshaft, and chain drive along with rear drum - handle operated braking system.</span>  </p>',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> IDEAL FOR BEGINNER &amp; EXPERIENCED RIDERS: With a load capacity of 200 pounds and clearance of 5. 5 inches, this scooter is perfect for everyone 13+  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> POWERFUL AND EFFICIENT: The 4 stroke OHV 1 cylinder engine with 196cc/6; 5hp will power you through the trails all day with plenty of muscle while still being fuel efficient  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> EASY AND SMOOTH: Easy pull start and rear drum break allows for easy operation; While the low-pressure tires provide a soft, smooth ride for stability even on rugged terrain  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> DURABLE: Built with a rugged, proven clutch and a solid, sturdy metal frame, this heavy-duty mini bike will withstand years of fun on the trail  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> ASSEMBLY: Proper product assembly is critically important to ensure the product functions correctly. Assembly instructions must be followed precisely. Professional assembly is recommended  </span></li>  </ul>',
    collections: ['expensive'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3OR4jx2',
      },
    ],
    flair: ['prime'],
    tags: ['sports', 'easy', 'toy'],
    rank: {
      price: 4,
      quality: 4,
      vibes: 5,
      description:
        'Literally any bro would make questionable sacrifices for one of these. The coolest toy under 1k for any real adrenaline junkie, or just someone who grew up in a trailer park and had one of these like I did.',
    },
  },
  {
    slug: 'tieti-24ghz-wireless-bluetooth-mechanical-gaming-keyboard',
    title: 'Tieti Wireless Mechanical Keyboard',
    images: [
      'https://m.media-amazon.com/images/I/71uoLvPTtAL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/714Qz0HUktL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/71bCQhdn30L._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/719YyI-uk8L._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/71a8J0xC+pL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/71wNU41vauL._AC_SX522_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/6722b3b0-c829-4094-b0a4-11292b145aea/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/51ICEucRa+L.SX522_.jpg',
      },
    ],
    price: 33,
    description:
      'This 65% keyboard supports 2.4GHz Wireless, Bluetooth, and corded modes. Being a Mechanical Gaming Keyboard, it has Hot Swappable Keyboard with RGB Backlght, Full Keys Programmable, 4200mAh Battery, and Cherry MX Switches of your choice',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> 65% Mechanical Keyboard: B-2 Spirit Mini 67 keyboard compresses powerful features into 65% of the overall size. Easy to use even in the tightest of spaces, it is suitable for on-the-go use.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Hot-swappable Switches:Gaming keyboard with hot-swappable switches, full keyboard pluggable, plug-and-play. Using German cherry MX switches, with a unique crackling sound and tactile sensation, giving your fingertips a different kind of fun.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 18 Million RGB Backlight: 22 different RGB lighting modes and effects, FN+＞/＜adjusts the lighting effects and the breathing speed to provide you with an immersive gaming experience. Each LED is precisely calibrated to display the perfect RGB backlighting. Create custom animations with TIETI-Synapse software.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 3 Modes of Connection: This keyboard includes 2.4G wireless connectivity, Bluetooth mode, and Type-C USB wired. The mechanical game keyboard can easily connect three devices at the same time through Bluetooth settings, and can flexibly switch the game and working mode without repeatedly plugging in.Compatible with Windows / MAC / IOS / Android.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Ergonomic keyboard: Wireless gaming keyboard is ergonomically designed to relax your wrists to bring comfort and reduce the burden for long-term typing or gaming. Choose thick dyed keycaps with clear legends and textures, durable keycaps will not oil or fade during long term using.  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3OYM8pc',
      },
    ],
    flair: ['prime'],
    tags: ['tech', 'easy'],
    rank: {
      price: 0,
      quality: 0,
      vibes: 0,
      description: '',
    },
  },
  {
    slug: 'osprey-daylite-plus-commuter-backpack',
    title: 'Osprey Daylite Backpack',
    images: [
      'https://m.media-amazon.com/images/I/81VSFgVff1L._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/81cIjxhsreL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/91mXV7lcLeL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/81LJ+EBQZFL._AC_SY606_.jpg',
      'https://m.media-amazon.com/images/I/71wMj-gdsiL._AC_SY879_.jpg',
      'https://m.media-amazon.com/images/I/71ylSL9BG7L._AC_SY741_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/f93a841c-696f-4fea-9fd6-d3e530fab306/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/51jtEE54UGL.SX522_.jpg',
      },
    ],
    price: 68,
    description:
      '<!-- show up to 2 reviews by default --><p> <span>Since Osprey was founded in 1974, every single product design has passed through the hands of owner and founder Mike Pfotenhauer, who created his first backpack at age 16. In Santa Cruz, California, the young entrepreneur opened a retail shop in the front of his rental house where backpackers and travelers came for custom-fit, made-to-order packs constructed over several days by Mike himself. As the demand for the great-fitting packs increased, Osprey found itself relocating to its current home in Southwest Colorado. Today, Osprey is a melting pot of diverse personalities, backgrounds and abilities. All share the common belief that adventure is open to everyone and found anywhere.</span>  </p>',
    additionalInformation:
      '<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Premium efficiency and design  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Storage tuned to the each season  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Purpose designed to help mak the most of each exploration. Internal hydration sleeve  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/4bOYzxu',
      },
    ],
    flair: ['prime'],
    tags: ['lifestyle', 'easy'],
    rank: {
      price: 2,
      quality: 5,
      vibes: 3,
      description:
        'Probably not che coolest backpack, but the undeniable best quality for the money backpack.',
    },
  },
  {
    slug: 'daddario-pro-winderoriginal-guitar-string-winder-cutter',
    title: "D'Addario Pro-Winder",
    images: ['https://m.media-amazon.com/images/I/71flky14taL._AC_SX425_.jpg'],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/4b2024f4-dec3-4cfd-8a08-b01ffc6e1201/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/81qzEXkbuOL.SX522_.jpg',
      },
    ],
    price: 11,
    description:
      'Pro-Winder is a high-quality string winder with a built-in clipper and bridge pin puller. The Pro-Winder is designed to fit virtually all guitars, banjos, ukuleles, and mandolins. Ergonomically designed with durable hardened steel wire cutters, the Pro-Winder string winder is the ultimate all-in-one restringing tool.',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> ALL-IN-ONE GUITAR STRING WINDER TOOL - The ergonomic and high-quality design of the D\'Addario Accessories Pro-Winder makes string changes quicker and easier than ever before with its built-in clippers, bridge pin puller and peg winder all rolled into one tool.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> MUST HAVE FOR EVERY GUITAR CASE – Why fill up your case with three tools when you can have one that does it all? This indispensable tool has been designed to fit comfortably in your hand and for use on virtually all electric and acoustic guitars, basses, banjos and mandolins. Also available in a bass guitar version.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> GUITAR WINDER - The guitar peg winder fits onto the guitar tuning peg and rotates to help wind the guitar strings making a quicker string change for your guitar.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> BUILT IN STRING CUTTER – With the hardened steel clippers on the Pro-Winder String Cutter you can cleanly cut through your old strings to remove them quicker and easier, and trim the excess off new strings after looping them through the tuning machines.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> INTEGRATED GUITAR PIN REMOVER - Designed with acoustic guitarists in mind, the Pro-Winder has a built-in bridge pin puller. This makes removing stubborn pins simple without risking damage caused by pliers and other tools.  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['cheap'],
    relatedProducts: ['fender-player-stratocaster-black-bundle'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3wtibXT',
      },
    ],
    flair: ['prime', 'Best Winder'],
    tags: ['lifestyle', 'easy'],
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description:
        "The truth when it comes to guitar winders/cutters. Don't waste your time with the rest, this is the best.",
    },
  },
  {
    slug: 'uniden-r8-radar-laser-detector',
    title: 'Uniden R8 Radar Detector',
    images: ['https://m.media-amazon.com/images/I/71PgNkqQR2L._AC_SX679_.jpg'],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/e2a903fa-4b03-4937-a8ff-dc784b10bb70/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/517MSG9WZsL.SX522_.jpg',
      },
    ],
    price: 612,
    description:
      "<!-- show up to 2 reviews by default --><p> <span>The R8 is an all new platform with unsurpassed range and sensitivity. It's Dual Antenna allows the R8 to detect threats from all four directions, with voice alerts for the direction of the threat. It even shows the band and signal strength for each. Perfect just got better!</span>  </p>",
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> DUAL ANTENNA\'S WITH DIRECTIONAL ARROWS - The R8 is an all new platform with unsurpassed range and sensitivity. It\'s Dual Antenna allows the R8 to detect threats from all four directions, with voice alerts for the direction of the threat. It even shows the band and signal strength for each. Perfect just got better!.Operating temperature : -4° to +185° F (Radar/Laser), -20° to +85° C (Radar/Laser).  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> GPS TECHNOLOGY w/ AUTO MUTE MEMORY - The R8 can remember and automatically mute false alerts (such as retail store doors) along your routes so you never have to listen to the same false alert twice.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> RED LIGHT AND SPEED CAMERA ALERTS - Preloaded Red Light and Speed Camera locations with Free Database and Firmware updates ensures your detector will never be out of date.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> LARGE MULTI-COLOR OLED DISPLAY - is easy-to-Read and allows for more useful information to be displayed at once. This improves your overall situational awareness.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> VOICE ALERTS - Voice alerts allow for hands-free operation and provide clear communication. Voice Alerts are programable to fit your style so you can keep your eyes on the road with no distractions.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> ADVANCED FALSE ALERT FILTERING - the R8 has the Best K/KA Band filtering with the Least Amount of False Alerts from blind spot monitoring &amp; Collison avoidance systems in other vehicles.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Package Includes: Radar Detector, Single and Double Window Mount Bracket, Zippered Carrying Case, Neoprene Carrying Case, Velcro Tape, Power Cord, Data Cable and Owner’s Manual.  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['expensive'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/4bT7Wwj',
      },
    ],
    tags: ['tech', 'easy'],
    flair: ['prime', 'Best Detector'],
    rank: {
      price: 0,
      quality: 0,
      vibes: 0,
      description:
        'The best radar detector, period. The R7 is just as good, but this is the best one.',
    },
  },
  {
    slug: 'hydro-flask-stainless-steel-wide-mouth-water-bottle',
    title: 'Hydro Flask',
    images: [
      'https://m.media-amazon.com/images/I/61Ur5t1fRCL._AC_SY879_.jpg',
      'https://m.media-amazon.com/images/I/61e8VtTZCYL._AC_SY879_.jpg',
      'https://m.media-amazon.com/images/I/51I0xRyTc8L._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/51zyX1YbaXL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/71JA-wCrc8L._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/71XSFpSXXaL._AC_SY450_.jpg',
    ],
    videos: [
      {
        link: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/58da2237-70f7-4977-8882-c14b1063df1d/default.jobtemplate.mp4.480.mp4',
        poster: 'https://m.media-amazon.com/images/I/61rxYy7Te6L.SX522_.jpg',
      },
    ],
    price: 45,
    description:
      'A 40 oz Wide Mouth water bottle with our leakproof Flex Straw Cap—easy to fill, easy to drink. Open it up, add your ice, and flip to sip. The insulated stainless steel keeps it cold for up to 24 hours.',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold"> About this item </h1> <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> TempShield️ double-wall vacuum insulation keeps contents cold up to 24 hours  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Insulated Flex Straw Cap is leakproof when closed  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Made with 18/8 pro-grade stainless steel for durability, pure taste and no flavor transfer  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Wide Mouth opening is ice-cube friendly  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Color Last powder coat stays clean and colorful  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Bottle fits most backcountry water filters  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> BPA-Free  </span></li>  </ul>   <!-- Loading EDP related metadata -->      <div class="a-row a-expander-container a-expander-inline-container"> <div aria-expanded="false" class="a-expander-content a-expander-extend-content" style="display:none">    <ul class="a-unordered-list a-vertical a-spacing-none">  <li class="a-spacing-mini"><span class="a-list-item">Dishwasher safe</span></li>  <li class="a-spacing-mini"><span class="a-list-item">Flex Straw Cap not intended for use with hot liquids</span></li>  <li class="a-spacing-mini"><span class="a-list-item">Not for use on a stove, in a microwave or freezer</span></li>  </ul>   </div> <a data-csa-c-func-deps="aui-da-a-expander-toggle" data-csa-c-type="widget" data-csa-interaction-events="click" aria-expanded="false" role="button" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-extend-header" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Show more&quot;, &quot;collapse_prompt&quot;:&quot;Show less&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Show more</span></a>  </div>',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3P09wCz',
      },
    ],
    tags: ['lifestyle', 'easy'],
    rank: {
      price: 2,
      quality: 5,
      vibes: 5,
      description: 'The best bottle for hot or cold drinks. No S brand. No LEAD!',
    },
  },
  {
    slug: 'original-nitro-gym-shirt',
    title: 'WSBB Mens Gym T-Shirt',
    images: [
      'https://www.westside-barbell.com/cdn/shop/products/blacknitrotfront_1080x.png?v=1666658877',
      'https://www.westside-barbell.com/cdn/shop/products/blacknitrotback_1080x.png?v=1666659347',
    ],
    price: 30,
    description:
      'At one time this gym shirt was so exclusive that no one dared to wear one if you were not an official member and this was strictly enforced!',
    additionalInformation:
      'After receiving numerous requests from athletes, coaches, visitors, and fans who wanted to represent and spread the word of the conjugate system, Lou decided to make these to be the first-ever garment produced for the public to purchase. On the front, it has our original nitro logo of a pitbull with a barbell chain stacked with weight. On the back, it is an image of the dog from behind.',
    collections: ['cheap'],
    links: [
      {
        title: 'Westside Barbell',
        link: generateUTM(
          'https://www.westside-barbell.com/collections/apparel/products/original-nitro-gym-shirt',
        ),
      },
    ],
    flair: ['prime'],
    tags: ['sports', 'easy', 'lifestyle'],
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description: 'The shirt speaks for itself. IYKYK.',
    },
  },
  {
    slug: 'holy-bible-king-james-english-version-gustave-dore-illustrated-leather-bound-gift-edition',
    title: 'Leather Bound KJV Holy Bible – Gustave Dore Illustrated',
    images: [
      'https://m.media-amazon.com/images/I/71giaRXpqFL._AC_SY450_.jpg',
      'https://m.media-amazon.com/images/I/51q9EfCNu5L._AC_SX355_.jpg',
      'https://m.media-amazon.com/images/I/41cUC2bAD0L._AC_SX355_.jpg',
      'https://m.media-amazon.com/images/I/81LZKzHcZXL._AC_SX355_.jpg',
      'https://m.media-amazon.com/images/I/71saj9EEuIL._AC_SX355_.jpg',
      'https://m.media-amazon.com/images/I/81Odc08ovBL._AC_SX355_.jpg',
      'https://m.media-amazon.com/images/I/71xsnu+yfML._AC_SX355_.jpg',
    ],
    videos: [],
    price: 40,
    description:
      "<p> <span>When the King James translation of the Bible was first published in 1611, it was the first time that many people throughout the English-speaking world were able to read the Old and New Testaments in their native tongue. It proved so wildly popular, in fact, that it was the only book that many families owned. The majestic scope and poetry of the King James translation's language made an incomparable impact on Western religion, culture, and literature that still resonates today. <br>This gorgeous gift edition also contains over two hundred beautiful, rarely collected full-page illustrations by Gustave Dore (1832-1883).</span>  </p>",
    additionalInformation:
      ' <h1 class="a-size-base-plus a-text-bold"> About this item </h1>               <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> ISBN-13: 9781435125391  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Publication date: 2/16/2012  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Pages: 1360  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Product dimensions: 6.60 (w) x 9.36 (h) x 2.70 (d)  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Package Information: This book will be packaged in Brand New Box of size 10x8x3.  </span></li>  </ul>   <!-- Loading EDP related metadata -->',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3Ijuvww',
      },
    ],
    flair: ['prime'],
    tags: ['easy', 'lifestyle'],
    rank: {
      price: 1,
      quality: 5,
      vibes: 5,
      description:
        'The best book is a book with pictures; and these pictures depict the most epic stories ever recorded. God bless!',
    },
  },
  {
    slug: 'liquid-iv-hydration-multiplier-strawberry-hydration-powder-packets-electrolyte-drink-mix-easy-open-single-serving-stick-non-gmo-48-sticks',
    title: 'Liquid I.V. – Strawberry (48ct)',
    images: [
      'https://m.media-amazon.com/images/I/41glHTDByDL._SX300_SY300_QL70_FMwebp_.jpg',
      'https://m.media-amazon.com/images/I/81Xzg9ImH1L._SX569_.jpg',
      'https://m.media-amazon.com/images/I/81-gkgIrecL._SX569_.jpg',
      'https://m.media-amazon.com/images/I/81OBbd3gAgL._SX569_.jpg',
      'https://m.media-amazon.com/images/I/711gf++W+qL._SX569_.jpg',
      'https://m.media-amazon.com/images/I/71N37JR+GfL._SX569_.jpg',
    ],
    videos: [],
    price: 60,
    description:
      'Hydration Multiplier is a great-tasting, Non-GMO electrolyte drink mix powered by Cellular Transport Technology (CTT)®️ to hydrate faster and more efficiently than water alone. 1 stick contains 3x the electrolytes of traditional sports drinks with 5 essential vitamins.',
    additionalInformation:
      '<h1 class="a-size-base-plus a-text-bold" style="display: none;"> About this item </h1>               <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Liquid I.V. Hydration Multiplier – Hydrate 2x faster than water alone with Hydration Multiplier, a great-tasting electrolyte drink powder with five essential vitamins and 3x the electrolytes of traditional sports drinks. Whether you’re in need of hydration for exercise, travel, or long nights, Liquid I.V. Hydration Multiplier packets have you covered.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Great taste - Strawberry Hydration Multiplier is bursting with the freshly-picked taste of ripe, juicy strawberries topped with decadent notes of whipped cream.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Cellular Transport Technology – The science of Cellular Transport Technology (CTT), used in Liquid I.V. products, is based on an optimal ratio of ingredients designed to enhance rapid absorption of water and other key ingredients into your body. Thanks to this fast acting system, Hydration Multiplier helps provide faster, more efficient hydration.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Non-GMO and made with premium ingredients – Hydration Multiplier Electrolyte Powder Drink Mix is made with natural flavors and has no artificial colors or sweeteners. Every serving contains 5 essential vitamins: vitamins B3, B5, B6, B12 and vitamin C. It\'s also gluten-free, soy-free, and dairy-free.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> On-the-go hydration – Enjoy convenient, on-the-go hydration with Hydration Multiplier. These single-serving, travel-friendly stick packets are perfect for taking to the gym, sports games, and long flights. Pour one easy-to-open stick packet into 16oz of water, mix or shake, and hydrate.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Global impact – Liquid I.V. believes equitable access to clean and abundant water is the foundation of a healthier world. We prioritize partnerships with leading water, humanitarian, and community-based organizations to fund and foster innovative solutions to help communities protect both their water and their futures.  </span></li>  </ul>   <!-- Loading EDP related metadata -->               <span class="edp-feature-declaration" data-edp-feature-name="featurebullets" data-edp-asin="B08MVF7XFZ" data-data-hash="832084747" data-defects="[{&quot;id&quot;:&quot;defect-mismatch-info&quot;,&quot;value&quot;:&quot;Different from product&quot;},{&quot;id&quot;:&quot;defect-missing-information&quot;,&quot;value&quot;:&quot;Missing information&quot;},{&quot;id&quot;:&quot;defect-unessential-info&quot;,&quot;value&quot;:&quot;Unimportant information&quot;},{&quot;id&quot;:&quot;defect-other-productinfo-issue&quot;,&quot;value&quot;:&quot;Other&quot;}]" data-metadata="CATALOG" data-feature-container-id="" data-custom-event-handler="" data-display-name="Bullet Points" data-edit-data-state="featureBulletsEDPEditData" data-position="" data-resolver="CQResolver"></span>',
    collections: ['cheap'],
    links: [
      {
        title: 'Amazon',
        link: 'https://amzn.to/3UYz0UA',
      },
    ],
    flair: ['prime'],
    tags: ['easy', 'lifestyle'],
    rank: {
      price: 2,
      quality: 5,
      vibes: 5,
      description:
        'This is better for you than any drink - even water. Well, next to water. It tastes like a fairy squirted in your mouth, and gives you all your essential vitamins and minerals. Delicious.',
    },
  },
]
