// ub-23fb.js
import { promoHandler } from "./promoHandler.js";

const scriptTag = document.querySelector(
  'script[type="module"][src*="/js/modules/ub-23fb.js"]'
);
const src = scriptTag.getAttribute("src");
const versionMatch = src.match(/AdvancedBill\/Unbounce@([a-f0-9]+)\//);
const versionNo = versionMatch ? versionMatch[1] : null;
console.log(versionNo);
promoHandler(versionNo);
