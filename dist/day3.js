const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomBool = () => Math.random() < 0.5;
const products = [
    { name: "メキシコ", price: randomInt(1000, 2000), stock: randomBool() },
    { name: "グアテマラ", price: randomInt(1000, 2000), stock: randomBool() },
    { name: "タンザニア", price: randomInt(1000, 2000), stock: randomBool() },
];
const totalPrice = products
    .filter((product) => product.stock)
    .reduce((sum, product) => sum + product.price, 0);
console.log("商品一覧:", products);
console.log(`合計金額（在庫あり):${totalPrice}円`);
export {};
// export {};
// type Product = {
//   name: string;
//   price: number;
//   stock: boolean;
// };
// const randomInt = (min: number, max: number): number =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
// const randomBool = (): boolean => Math.random() < 0.5;
// const products: Product[] = [
//   { name: "メキシコ", price: randomInt(1000, 2000), stock: randomBool() },
//   { name: "コロンビア", price: randomInt(1000, 2000), stock: randomBool() },
//   { name: "グアテマラ", price: randomInt(1000, 2000), stock: randomBool() },
// ];
// const totalPrice = products
//   .filter((p) => p.stock)
//   .reduce((sum, p) => sum + p.price, 0);
// console.log("商品一覧:", products);
// console.log("合計金額(在庫ありのみ):", totalPrice);
