# Blue Dynamic Elements

## Object Properties

- promo
  the promo refers to the promo code, and will alter the coupon code on the page what ever promo code is here.
- product
  this is the name of the product to be featured in the ad.
- price
  price values don't need quotes around them sinse they are integers. also all prices should reflect individual hearing aid price.
- - list
- - sale
- - save
- - actual
- - pair
    Pair is a boolean, so this value should ONLY be "true" or "false". This will affect the price displayed on the page. By default it is set to false. So you only need to add a true value if you are running a "pair price" for the promo.
- title
- description
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
   "actual": "",
   "pair": false
 },
 "title": "",
 "description": "",
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
