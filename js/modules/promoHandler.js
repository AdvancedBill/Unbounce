// promoHandler.js
export function promoHandler() {
  const params = new URLSearchParams(window.location.search);
  const promo = params.get("promo");

  if (promo) {
    // fetch promo.json
    const url = `../../promo/${promo}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const promoData = data[promo];
        if (promoData) {
          document.querySelector(".promo").textContent = promoData.promo;
          document.querySelector(".product").textContent = promoData.product;
          document.querySelector(".price-list").textContent =
            promoData.price.list;
          document.querySelector(".price-sale").textContent =
            promoData.price.sale;
          document.querySelector(".price-save").textContent =
            promoData.price.save;
          document.querySelector(".price-product").textContent =
            promoData.price.product;
          document.querySelector(".title").textContent = promoData.title;
          document.querySelector(".description").textContent =
            promoData.description;
          document.querySelector(".offer").textContent = promoData.offer;
          document
            .querySelector(".single-left")
            .setAttribute("src", promoData.picture["single-left"].location);
          document.querySelector(".single-left-alt").textContent =
            promoData.picture["single-left"].alt;
          document.querySelector(".single-left-title").textContent =
            promoData.picture["single-left"].title;
          document
            .querySelector(".single-right")
            .setAttribute("src", promoData.picture["single-right"].location);
          document.querySelector(".single-right-alt").textContent =
            promoData.picture["single-right"].alt;
          document.querySelector(".single-right-title").textContent =
            promoData.picture["single-right"].title;
          document
            .querySelector(".pair")
            .setAttribute("src", promoData.picture.pair.location);
          document.querySelector(".pair-alt").textContent =
            promoData.picture.pair.alt;
          document.querySelector(".pair-title").textContent =
            promoData.picture.pair.title;
          document
            .querySelector(".in-box")
            .setAttribute("src", promoData.picture["in-box"].location);
          document.querySelector(".in-box-alt").textContent =
            promoData.picture["in-box"].alt;
          document.querySelector(".in-box-title").textContent =
            promoData.picture["in-box"].title;
          document
            .querySelector(".size-comp")
            .setAttribute("src", promoData.picture["size-comp"].location);
          document.querySelector(".size-comp-alt").textContent =
            promoData.picture["size-comp"].alt;
          document.querySelector(".size-comp-title").textContent =
            promoData.picture["size-comp"].title;
        } else {
          console.log("Promotion not found in JSON data");
        }
      })
      .catch((error) => {
        console.log(`Error loading JSON data: ${error}`);
      });
  } else {
    console.log("No promo parameter found in URL");
  }
}
