import fs from 'fs'
import puppeteer from 'puppeteer'
import emptyProduct from '../src/lib/emptyProduct.js'
import { input as sourceLinks } from './input.js'

(async () => {
  console.log('---------------------')
  console.log('---SCRAPE ME DADDY---')
  console.log('---------------------')

  console.log(`${sourceLinks.length} products for me to scrape`)

  sourceLinks.map(async (link) => {
    console.log(`scraping ${link}`)

    const browser = await puppeteer.launch({
      // headless: false,
      setDefaultNavigationTimeout: 100000
    })

    const page = await browser.newPage()
    await page.goto(link)
    await page.setViewport({ width: 1080, height: 1024 })
    await page.waitForSelector('#productTitle')

    const thumbs = await page.$$('.imageThumbnail')
    for (let image of thumbs) {
      await image.hover()
    }

    const hasOnetime = await page.$$('#newAccordionRow_1')
    for (let time of hasOnetime) {
      await time.click()
    }

    const isPrime = await page.$$('.a-icon-prime')

    await page.waitForSelector('.celwidget .a-row video')

    const data = await page.evaluate(() => {
      const minify = it => it.replace(/(\r\n|\n|\r)/gm,"")
      function slugify(str) {
        return String(str)
          .normalize('NFKD') 
          .replace(/[\u0300-\u036f]/g, '') 
          .trim() 
          .toLowerCase()
          .replace(/[^a-z0-9 -]/g, '') 
          .replace(/\s+/g, '-') 
          .replace(/-+/g, '-');
      }

      const title = document.getElementById('productTitle').innerHTML.trim()
      const slug = slugify(title)
      const images = Array.from(document.querySelectorAll('.imgTagWrapper img')).map((img) => img.src)
      const videos = Array.from(document.querySelectorAll('.celwidget .a-row video')).map((v) => {
        return { link: v.src, poster: v.poster }
      })
      const price = parseFloat(document.querySelector('.a-price span').innerHTML.replace('$', ''))
      const collections = price > 100 ? ['expensive'] : ['cheap']
      const description = minify(document.getElementById('productDescription').innerHTML.trim())
      const additionalInformation = minify(document.getElementById('feature-bullets').innerHTML.trim() )
      
      return { 
        slug,
        title,
        images,
        videos,
        price,
        description,
        additionalInformation,
        collections,
      }
    })
    
    const record = {
      ...data,
      links: [{
        title: "Amazon",
        link
      }],
      tags: isPrime.length > 0 ? ['prime'] : [],
      flair: [],
      rank: emptyProduct.rank,
    }
    
    console.log('got data!')
    const fileData = JSON.parse(fs.readFileSync('./scraper/output.json'))
    fileData.push(record)
    console.log(fileData)
    fs.writeFileSync('./scraper/output.json', JSON.stringify(fileData, null, 2));
    console.log('saved ' + link)

    await browser.close()
  })
})()