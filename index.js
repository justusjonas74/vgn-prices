const rp = require('request-promise')
const cheerio = require('cheerio')
const fs = require('fs')

const PRICE_LEVELS = require('./price-levels.js')
const PRODUCTS_TYPES = require('./products.js')

function requestProductPage (productType, addNullValues = false) {
  const options = {
    uri: productType.url,
    transform: function (body) {
      return cheerio.load(body)
    }
  }
  return rp(options)
}

function scrapProductPage ($, products, addNullValues) {
  var results = []
  products.forEach((product) => {
    PRICE_LEVELS.forEach((ps) => {
      const selector = `.${product[1]}.${ps[0]} .Price`
      const price = $(selector).text()
      if ((price !== '–') || addNullValues) {
        const res = {
          name: product[0],
          price_level: ps[1],
          price: price}
        results.push(res)
      }
    })
  })
  return results
}

const promiseArr = PRODUCTS_TYPES.map((productType) => {
  return requestProductPage(productType)
    .then(($) => scrapProductPage($, productType.products, false))
})

function mergeResults (arr) {
  var res = []
  arr.forEach(e => {
    res = res.concat(e)
  })
  return res
}

Promise.all(promiseArr)
  .then(results => {
    const res = mergeResults(results)
    let data = JSON.stringify({products: res})
    fs.writeFileSync('results.json', data)
  })
  .catch((err) => {
    console.log(err)
  })
