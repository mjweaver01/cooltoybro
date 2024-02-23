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
    tags: ['chair', 'deskchair', 'desk chair'],
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
    slug: '2023-apple-macbook-pro-m3',
    title: '2023 Apple MacBook Pro Laptop M3',
    images: [
      'https://m.media-amazon.com/images/I/61lsexTCOhL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61RdWPq8UfL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/G/01/apple/MacBook_Pro_M3_Product_Page_L__en-US_01._CB573757570_.jpg',
      'https://m.media-amazon.com/images/G/01/apple/MacBook_Pro_M3_Product_Page_L__en-US_04._CB573757570_.jpg',
      'https://m.media-amazon.com/images/G/01/apple/MacBook_Pro_M3_Product_Page_L__en-US_05._CB573757570_.jpg',
      'https://m.media-amazon.com/images/G/01/apple/MacBook_Pro_M3_Product_Page_L__en-US_05._CB573757570_.jpg',
    ],
    collections: ['expensive'],
    tags: ['mac', 'apple', 'macbook', 'laptop', 'm3'],
    flair: ['Best Laptop'],
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
]

// airpods pro https://amzn.to/48zXUgM
// airpods max https://amzn.to/42M1S4x
// mbp 13" m3 max https://amzn.to/3SStMqK
// magic trackpad https://amzn.to/42OKOL3
// magic keyboard https://amzn.to/49LFKta

// adobe affiliate program submitted
// alibaba affiliate program submitted
// rakuten affiliate program submitted
