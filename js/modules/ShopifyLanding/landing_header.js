// landingHeader.js
import { saleMath } from "../saleMath";

export const landingHeader = (promo) => {
  console.log(promo);

  const productPic = promo.picture;

  const { listPrice, singlePrice, pairPrice, saveSingle, savePair } =
    saleMath(promo);

  const header = `
    <section id="landing-mast">
      <div id="mast-container">
        <span id="empty"></span>
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
      </div>
    </section>
  `;

  const docBody = document.body;
  docBody.insertAdjacentHTML("beforeend", header);
};
