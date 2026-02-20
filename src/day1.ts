// src/day1.ts
let product1Name: string = "FURUU ブレンド";
let product1Price: number = 1500;
let product1InStock: boolean = true;


let product2Name: string = "シングルオリジン エチオピア";
let product2Price: number = 1800;
let product2InStock: boolean = false;

// 合計
let total: number = product1Price + product2Price;
console.log(`合計: ¥${total}`);



let applePrice: number = 2000;
let orangePrice: number = 2000;

let total1: number = applePrice + orangePrice;

console.log(total1);


const products: string[] = ["メキシコ", "コロンビア", "タンザニア"];
products.push("グアテマラ");
products.map((product) => {
    console.log(`商品：${product}`);
    return
});


// 価格リストの合計を計算してコンソールに出力
const prices: number[] = [1900, 2000, 1400];

const totalPrice: number = prices.reduce((sum, price) => sum + price, 0);

console.log(`合計金額：${totalPrice}円`);


console.log(`合計金額：${totalPrice}円`);

// 1500円以上の商品を抽出
const over1500Price: number[] = prices.filter((price) => {
    return price >= 1500
})
console.log(over1500Price);


const productsTuple: [string, number, boolean][] = [
    ["nonota", 0, true],
    ["kumita", 35, true]
];
