const rp = require('request-promise')
const cheerio = require('cheerio')
var stringify = require('csv-stringify');
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
      const print_price = $(selector).text()
      const price = print_price !== '–' ? parseFloat(print_price.replace(" €","").replace(",",".")) : ""
      if ((print_price !== '–') || addNullValues) {
        const res = {
          name: product[0],
          price_level: ps[1],
          price: price,
          price_print_friendly: print_price
        }
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

function resultsToJSON(results) {
   
  const res = mergeResults(results) //.groupBy('name')
  console.log(`Scraped ${res.length} items.`)
  let data = JSON.stringify( res )
  fs.writeFileSync('prices.json', data)
  console.log('Created \'prices.json\'')
  return results
}

function resultsToCSV(results) {
  var columns = {
    name: 'Name',
    price_level: 'Price level',
    price: 'Price',
    price_print_friendly: 'Price (String)'
  }
  const options = {quotedString: true, columns: columns, header: true}
  const res = mergeResults(results)
  stringify(res, options, function(err, data){
    if (err) { throw err }
    fs.writeFileSync('prices.csv', data)
    console.log('Created \'prices.csv\'')
  })

};
 

Promise.all(promiseArr)
  .then(results => resultsToJSON(results))
  .then(results => resultsToCSV(results))
  .catch((err) => {
    console.log(err)
  })
