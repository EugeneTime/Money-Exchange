module.exports = function makeExchange(currency) {
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" }; 
    let coinsType = {}; 
    if (currency <= 0) return coinsType; 
    let coinsPrice = { 'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1 }; 
    for (coin in coinsPrice) { 
      let coinsCount = Math.floor(currency / coinsPrice[coin]); 
      if (coinsCount) { 
        currency = Math.floor(currency % coinsPrice[coin]);
        coinsType[coin] = coinsCount; 
      } 
    } 
    return coinsType; 
}
