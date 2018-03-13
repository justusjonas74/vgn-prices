# VGN Prices 

A simple web scraper to extract prices from ![`www.vgn.de/tickets`](https://www.vgn.de/tickets/) to JSON, CSV and Markdown.

## Usage 
### Use results

The repo includes the latest results, so you don't have to run the script yourself. 

* __JSON__: ![`prices.json`](prices.json)
* __CSV__: ![`prices.csv`](prices.csv)
* __Markdown__: ![`prices.md`](prices.md)

### Do it yourself

```bash
git clone https://github.com/justusjonas74/vgn-prices
cd vgn-prices
npm install 
npm run scraper # generates prices.json and prices.csv
npm run markdown # generates prices.md  based on prices.json
``` 

## Supported Products

Actually only products with a price table on their web page are supported, cause that's the scraping source. 

### Included
* ![`einzelfahrkarte`](https://www.vgn.de/tickets/einzelfahrkarte/#preise)
* ![`4er-ticket`](https://www.vgn.de/tickets/4er-ticket/#preise)
* ![`tagesticket-solo`](https://www.vgn.de/tickets/tagesticket-solo/#preise)
* ![`7-tage-mobicar`](https://www.vgn.de/tickets/7-tage-mobicard#preise)
* ![`31-tage-mobicard`](https://www.vgn.de/tickets/31-tage-mobicard/#preise)
* ![`abo3`](https://www.vgn.de/tickets/abo3/#preise)
* ![`jahresab`](https://www.vgn.de/tickets/jahresabo#preise)
* ![`9-uhr-jahresabo`](https://www.vgn.de/tickets/9-uhr-jahresabo/#preise)
* ![`wochenwertmarke-ausbildung`](https://www.vgn.de/tickets/wochenwertmarke-ausbildung/#preise)

### Not included
* ![`studenten`](https://www.vgn.de/tickets/studenten/)
* ![`10er-streifenkarte`](https://www.vgn.de/tickets/10er-streifenkarte/)
* ![`ferienticket`](https://www.vgn.de/tickets/ferienticket/)
* ![`firmenabo`](https://www.vgn.de/tickets/firmenabo/)
* ![`anschlussfahrausweis`](https://www.vgn.de/tickets/anschlussfahrausweis/)
* ![`flugticket`](https://www.vgn.de/tickets/flugticket/)
* ![`bayern-ticket`](https://www.vgn.de/tickets/bayern-ticket/)
* ![`schoenes-wochenende-ticket`](https://www.vgn.de/tickets/schoenes-wochenende-ticket/)
* ![`city-ticket`](https://www.vgn.de/tickets/city-ticket/)
* ![`fahrrad-tageskarte-bayern`](https://www.vgn.de/tickets/fahrrad-tageskarte-bayern/)
* ![`db-zuschlag`](https://www.vgn.de/tickets/db-zuschlag/)
* ![`bamberger-sonderkarten`](https://www.vgn.de/tickets/bamberger-sonderkarten/)
* ![`kaerwa-tickets`](https://www.vgn.de/tickets/kaerwa-tickets/)
* ![`ermaessigte-monatskarte`](https://www.vgn.de/tickets/ermaessigte-monatskarte/)
* ![`gruppenfahrkarte`](https://www.vgn.de/tickets/gruppenfahrkarte/)
* ![`hotelfahrkarte`](https://www.vgn.de/tickets/hotelfahrkarte/)
* ![`kombiticket`](https://www.vgn.de/tickets/kombiticket/)
* ![`autohaus-ticket`](https://www.vgn.de/tickets/autohaus-ticket/)

## Licence

Source code is licensed under MIT license. No license and no guarantees implied on the produced data, produce and use on your own risk.
