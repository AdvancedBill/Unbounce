# Blue Dynamic Elements

## How It Works

The "Blue" page uses a theme based on the "GO Blue" magazine add from 2021.

### Using Javascript

The page has a default build, that inludes default values. When the page loads it loads a Javascript function that looks to the URL for a "promo=" parameter. It uses the value found to select a Json file with the dynamic values.

The Javascript then looks for any element tags on the page with a class matching key properties in the Json file ("class='sale' > "sale" : "").

Once it finds a matching value it replaces the content inside the tag with the value found in the Json file

### Price Values

Prices on the page are single hearing aid prices unless the value in the Json file for pair is "true". In that case the price values are doubled before being placed on the page.

## Object Build

### Object Properties

- promo
  the promo refers to the promo code, and will alter the coupon code on the page what ever promo code is here.
- product
  this is the name of the product to be featured in the ad.
- productPrice
  price values don't need quotes around them sinse they are integers. also all prices should reflect individual hearing aid price.
- - list
- - sale
- - save
- - product
    this is the actual product to be displayed.
- - pair
    Pair is a boolean, so this value should ONLY be "true" or "false". This will affect the price displayed on the page. By default it is set to false. So you only need to add a true value if you are running a "pair price" for the promo.
- title
- description
- offer
  the offer is a single sentence or short string detailing the offer made. ie:"to save $10 per hearing aid"
- picture
  all pictures need alt tags, titles and file locations
- - single-left
- - single-right
- - pair
- - in-box
- - size-comp
- phone

### Object Template

```
{
 "promo": "",
 "product": "",
 "price": {
   "list": "",
   "sale": "",
   "save": "",
   "product": "",
   "pair": false
 },
 "title": "",
 "description": "",
 "offer": "",
 "picture": {
   "single-left": {
     "alt": "",
     "title": "",
     "location": ""
   },
   "single-right": {
     "alt": "",
     "title": "",
     "location": ""
   },
   "pair": {
     "alt": "",
     "title": "",
     "location": ""
   },
   "in-box": {
     "alt": "",
     "title": "",
     "location": ""
   },
   "size-comp": {
     "alt": "",
     "title": "",
     "location": ""
   }
 }
}

```
### ub-23fb.js
#### The script ultimately fetches and displays promotional data based on the version number.

This script imports the promoHandler function from promoHandler.js
`import { promoHandler } from "./promoHandler.js";`

This code finds the script tag that references ub-23fb.js and stores it in the scriptTag variable
`const scriptTag = document.querySelector('script[type="module"][src*="/js/modules/ub-23fb.js"]');`

This code extracts the src attribute from the script tag found above and stores it in the src variable
`const src = scriptTag.getAttribute("src");`

This code extracts the version number from the src using a regex pattern and stores it in the versionNo variable
`const versionMatch = src.match(/AdvancedBill/Unbounce@([a-f0-9]+)//);`
`const versionNo = versionMatch ? versionMatch[1] : null;`

This code logs the version number to the console for debugging purposes
`console.log(versionNo);`

This code passes the version number to the promoHandler function
`promoHandler(versionNo);`