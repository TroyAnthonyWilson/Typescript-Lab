interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
    return mountains.reduce((c, m) => {return c.height > m.height ? c : m}).name;
}

let tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
 

interface Product {
    name: string;
    price: number;
}

let Products: Product[] = [
    {name: "Apple", price: 1.25},
    {name: "Banana", price: 0.25},
    {name: "Pear", price: 2.25},
    {name: "Grape", price: 3.25},
];

function calcAverageProductPrice(products: Product[]): number{
    return products.reduce((s, p) => s + p.price, 0) / products.length;
}

let average = calcAverageProductPrice(Products);
console.log(average);

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
];

function calcInventoryValue(inventory: InventoryItem[]): number{
    return inventory.reduce((s, i) => s + i.product.price * i.quantity, 0);
}

let value = calcInventoryValue(inventory);

console.log(value);