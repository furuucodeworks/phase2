"use strict";
// src/day1.ts
let product1Name = "FURUU ブレンド";
let product1Price = 1500;
let product1InStock = true;
let product2Name = "シングルオリジン エチオピア";
let product2Price = 1800;
let product2InStock = false;
// 合計
let total = product1Price + product2Price;
console.log(`合計: ¥${total}`);
let applePrice = 2000;
let orangePrice = 2000;
let total1 = applePrice + orangePrice;
console.log(total1);
const products = ["メキシコ", "コロンビア", "タンザニア"];
products.push("グアテマラ");
products.map((product) => {
    console.log(`商品：${product}`);
    return;
});
// 価格リストの合計を計算してコンソールに出力
const prices = [1900, 2000, 1400];
const totalPrice = prices.reduce((sum, price) => sum + price, 0);
console.log(`合計金額：${totalPrice}円`);
console.log(`合計金額：${totalPrice}円`);
// 1500円以上の商品を抽出
const over1500Price = prices.filter((price) => {
    return price >= 1500;
});
console.log(over1500Price);
const productsTuple = [
    ["nonota", 0, true],
    ["kumita", 35, true]
];
