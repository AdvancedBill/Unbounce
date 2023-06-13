// ub-hcra.js
import { fetchJson } from "./fetchJson.js";
import { landingHeader } from "./ShopifyLanding/landing_header.js";

const usePromo = "d37"; // sets promotion

// calls json
async function promo(promotion) {
  const promoData = await fetchJson("../../promo/ub-hcra.json"); // calls promoData from json using `fetchJson.js`, passing in the url as a param
  const promoItem = promoData[promotion]; // concatinates promoData with the requested promotion
  return promoItem; // returns promotion info
}



(async () => {
  const promoItem = await promo(usePromo);
  landingHeader(promoItem);
})();