// 実習課題1
const productItem1 = {
    name: "メキシコ",
    price: 1200,
    inStock: false
};
const productItem2 = {
    name: "タンザニア",
    price: 1400,
    inStock: true
};
const productItem3 = {
    name: "グアテマラ",
    price: 2000,
    inStock: false
};
console.log(productItem1);
console.log(productItem2);
console.log(productItem3);
const products = [
    { name: "メキシコ", price: 1200, inStock: true },
    { name: "コロンビア", price: 1500, inStock: false },
    { name: "タンザニア", price: 1300, inStock: true },
];
const inStockFiltered = products.filter((product) => product.inStock);
const inStockProducts = inStockFiltered
    .map((product) => `${product.name}：¥${product.price}`);
const totalPrice = inStockFiltered.reduce((sum, product) => sum + product.price, 0);
console.log("在庫あり商品:", inStockProducts);
console.log("合計金額:", totalPrice);
// 実習課題3
const productInfo1 = {
    name: "メキシコ",
    price: 1200,
    inStock: true,
    roast: {
        level: "深煎り",
        origin: "origin"
    }
};
console.log(productInfo1);
const productInfo2 = {
    name: "メキシコ",
    price: 1200,
    inStock: true,
};
console.log(productInfo2);
export {};
