let countMoney = parseInt(prompt('сколько у вас с собой есть денег'));
let countApples = parseInt(prompt('сколько вы купили яблок'));
let countBreads = parseInt(prompt('сколько вы купили батонов хлеба'));
let priceApple = parseInt(prompt('сколько стоит одно яблоко'));
let priceBread = parseInt(prompt('сколько стоит один батон хлеба'));


let purchaseApples = countApples * priceApple;
let purchaseBreads = countBreads * priceBread;
let purchaseAll = purchaseApples + purchaseBreads;

if (countMoney < purchaseAll) {
    document.write('false');
} else {
    document.write('true');
}