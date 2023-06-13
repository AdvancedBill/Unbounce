export const saleMath = (promo) => {
  const list = promo.price.list;
  const pair = promo.price.pair;
  const single = promo.price.single;
  let saveOnPair;
  let saveOnSingle;

  if (promo.price.isPair === true) {
    saveOnPair = Math.floor(list - single * 2);
    saveOnSingle = Math.floor((list - single * 2) / 2);
  } else {
    saveOnPair = Math.floor(list - pair);
    saveOnSingle = Math.floor((list - pair) / 2);
  }

  const aCurrency = { style: "currency", currency: "USD" };
  const merican = new Intl.NumberFormat("en-US", aCurrency);

  const listPrice = merican.format(list);
  const singlePrice = merican.format(single);
  const pairPrice = merican.format(pair);
  const saveSingle = merican.format(saveOnSingle);
  const savePair = merican.format(saveOnPair);

  return { listPrice, singlePrice, pairPrice, saveSingle, savePair };
};
