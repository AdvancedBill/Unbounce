// landingHeader.js
import { saleMath } from "../saleMath.js";

export const landingHeader = (promo) => {
  console.log(promo);
  console.log(promo.picture.banner);

  const productPic = promo.picture;

  const { listPrice, singlePrice, pairPrice, saveSingle, savePair } =
    saleMath(promo);

  const header = `
    <section id="landing-mast" style="background-image:url(${promo.picture.banner.location});">
        <div id="intro">
          <div id="page-title">
            <h1>${promo.title}</h1>
            <p id="qualifier">${promo.qualifier}</p>
          </div>

          <div id="intro-copy">${promo.description}</div>
        </div>
        <div id="product">
          <figure id="product-image">
            <img
              src="${productPic.singleLeft.location}"
              alt="${productPic.singleLeft.alt}"
              width="400"
              height="400"
            />
          </figure>

          <div id="price-box">
            <p id="price-box-title">Now On Sale</p>
            <span id="price-box-inner">
              <h3 id="price-box-compare">
                List Price: ${listPrice}
              </h3>
              <h2 id="price-box-price">Sale Price: ${singlePrice}</h2>
            </span>
          </div>
        </div>
    </section>
  `;

  const createMainEl = document.createElement("main");
  const docBody = document.body;
  docBody.appendChild(createMainEl);
  const mainEl = document.querySelector("main");
  mainEl.insertAdjacentHTML("beforeend", header);
};
