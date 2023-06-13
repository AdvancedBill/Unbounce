# Landing Page
## [HCRA | ub/hcra/b.html](https://save.advancedhearing.com/ub/hcra/b.htlml)
This landing page is designed after the `wave` ad set. It features a the blue leaf wave masthead and a long form layout. Using the page titled `HCRA` in the unbouce dashboard `b.html` is the b variant.

### `ub-hcra.js`
This is the primary file that gets loaded. it calls in the modules for each campaign. All the modules are converted from shopify: hence all the modules are housed in `./ShopifyLanding` directory.

- It imports two functions, `fetchJson` and `landingHeader`, from separate JavaScript files.
- It sets a constant variable `usePromo` which represents a specific promotion.
- Then it defines an asynchronous function called `promo` that takes a parameter `promotion`. Inside this function:
 - It fetches JSON data from a specific URL using the `fetchJson` function, passing the URL as a parameter.
 - It assigns the requested promotion data from the fetched JSON to the `promoItem` variable.
 - It returns the `promoItem` variable, which contains information about the promotion.
- It immediately invokes an asynchronous function using the arrow `function syntax (async () => { ... })()`.
 - Inside this function:
   - It awaits the promo function, passing the usePromo constant as the argument.
   - It assigns the returned value (promotion information) to the promoItem variable.
   - It calls the landingHeader function, passing the promoItem as an argument.
In summary, this code module fetches JSON data from a specific URL, retrieves a specific promotion item from the fetched data, and then calls the landingHeader function with the promotion item as an argument.

- #### landing_header
`landingHeader.js` exports a function called landingHeader that takes a promo object as an argument. The function is responsible for generating HTML content for a landing page header based on the provided promo data.

The code starts by importing a `saleMath` function from another module named "saleMath.js." It then logs the promo object to the console.

Next, the function extracts relevant data from the promo object, such as the `product` `picture`, `list price`, `single price`, `pair price`, and `savings`. It does this by invoking the `saleMath` function and assigning the returned values to variables.

The function then uses template literals to build an HTML string that represents the structure and content of the landing page header. It incorporates the extracted data from the promo object dynamically into the HTML string.

Finally, the function appends the generated HTML string to the end of the document body, allowing it to be rendered on the landing page.

### `ub-hcra.json`
This json is the file that holds all campaigns with all the information for each promotion. Allowing the page to dynamically build.
Overall, this JSON object provides comprehensive information about the HearClear™ Rechargeable Hearing Aids, their pricing, features, promotional offer, and visual assets.

### `ub-hcra.html`
Basically used as a build page. for building, staging and develpoing js modules. 



