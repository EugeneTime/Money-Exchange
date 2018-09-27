module.exports = function makeExchange(currency) {

    let sumCoins = currency;
    let h, q, d, n, p;
    let typeCoins = {};

    if (currency > 10000) return{error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0) return{};
    
    while (sumCoins >= 1) {
        switch (true) {
            case (sumCoins >= 50):
                h = Math.floor(sumCoins / 50); sumCoins %= 50; if(h !== 0) typeCoins.H = h;
                break;
            case (sumCoins >= 25):
                q = Math.floor(sumCoins / 25); sumCoins %= 25; if(q !== 0) typeCoins.Q = q;
                break;
            case (sumCoins >= 10):
                d = Math.floor(sumCoins / 10); sumCoins %= 10; if(d !== 0) typeCoins.D = d;
                break;
            case (sumCoins >= 5):
                n = Math.floor(sumCoins / 5); sumCoins %= 5; if(n !== 0) typeCoins.N = n;
                break;
            case (sumCoins >= 1):
                p = Math.floor(sumCoins / 1); sumCoins = 0; if(p !== 0) typeCoins.P = p;
                break;
        }
    }

    return typeCoins;
}
