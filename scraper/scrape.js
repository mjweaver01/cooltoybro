import fs from 'fs'
import chalk from 'chalk'
import puppeteer from 'puppeteer'
import emptyProduct from '../src/lib/emptyProduct.js'
import { input as sourceLinks } from './input.js'

const log = console.log;

(async () => {
  log(chalk.blue('-----------------------'))
  log(chalk.blue('--- SCRAPE ME DADDY ---'))
  log(chalk.blue('-----------------------'))

  log(chalk.red(`🫦 ${sourceLinks.length} products for me to scrape`))

  const browser = await puppeteer.launch({
    headless: false,
    setDefaultNavigationTimeout: 100000
  })

  const scrapePage = async(link) => {
    log(chalk.yellow(`✊ scraping ${link}`))
    const page = await browser.newPage()

    try {
      await page.goto(link)
      await page.setViewport({ width: 1080, height: 1024 })
      await page.waitForSelector('#productTitle')

      const thumbs = await page.$$('.imageThumbnail')
      if(thumbs.length > 0) {
        for (let image of thumbs) {
          await image.hover()
          await sleep(200)
        }
      }

      const hasOnetime = await page.$$('#newAccordionRow_1')
      if(hasOnetime.length > 0) {
        for (let time of hasOnetime) {
          await time.evaluate(t => t.click())
        }
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
        
        const titleEl = document.getElementById('productTitle')
        const title = (titleEl ? titleEl.innerHTML : '').trim()
        const slug = slugify(title)
        
        const images = Array.from(document.querySelectorAll('.imgTagWrapper img')).map((img) => img.src)
        const videos = Array.from(document.querySelectorAll('.celwidget .a-row video')).map((v) => {
          return { link: v.src, poster: v.poster }
        })

        const priceEl = document.querySelector('.a-price .a-offscreen')
        const price = parseFloat((priceEl ? priceEl.innerHTML : 0).replace('$', ''))

        const collections = price > 100 ? ['expensive'] : ['cheap']

        const descriptionEl = document.getElementById('productDescription')
        let description = minify((descriptionEl ? descriptionEl.innerHTML : '').trim())
        if(description.length <= 0) {
          const accordionEl = document.querySelector('.a-expander-content')
          minify((accordionEl ? accordionEl.innerHTML : '').trim())
        }

        const additionalInfoEl = document.getElementById('feature-bullets')
        const additionalInformation = minify((additionalInfoEl ? additionalInfoEl.innerHTML : '').trim() )
        
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
        flair: isPrime.length > 0 ? ['prime'] : [],
        tags: [],
        rank: emptyProduct.rank,
      }
      
      log(chalk.orange('🥵 got data'))
      const fileData = JSON.parse(fs.readFileSync('./scraper/output.json'))
      fileData.push(record)

      fs.writeFileSync('./scraper/output.json', JSON.stringify(fileData, null, 2));
      log(chalk.blue('💦 saved ' + link))
    } catch (err) {
      log(chalk.error(err))
    } finally {
      await page.close()
    }
  }
  
  let tasks = []
  for (let i = 0; i < sourceLinks.length; i++) {
    tasks.push(scrapePage(sourceLinks[i]))
  }

  Promise.allSettled(tasks).then(async() => { await browser.close() }).then(() => {
    log(chalk.blue('-----------------------'))
    log(chalk.blue('---- FULLY SCRAPED ----'))
    log(chalk.blue('-----------------------'))
  })
})()