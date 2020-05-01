"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts - Test the Code
const ISales_1 = require("./ISales");
const ISales_2 = require("./ISales");
let data = {
    id: 1001,
    name: "XYZ Corp",
    sales: 443,
    profit: 4.5
};
console.log("Sales Data is available at - " + ISales_1.SALES_SERVICE_URL);
console.log("GST Rate is : " + ISales_2.getSalesTaxRate());
console.log(`SALES DATA - 
    ${data.id}
    ${data.name}
    ${data.sales}
    ${data.profit}
`);
