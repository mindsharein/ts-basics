// index.ts - Test the Code
import { ISales, SALES_SERVICE_URL } from "./common/ISales";

import { getSalesTaxRate as gstRate } from "./common/ISales";

import { StaticDataProvider } from "./services/StaticDataProvider";

console.log("Sales Data is available at - " + SALES_SERVICE_URL);
console.log("GST Rate is : " + gstRate());

let provider : StaticDataProvider = new StaticDataProvider();
let x : number = 0;

console.log(`ID     NAME        SALES       PROFIT
-------------------------------------------------------------------`);
provider.getData().forEach((data : ISales) => {
    console.log(`
        ${ data.id }    ${ data.name }      ${ data.sales }     ${ data.profit }
    `);
});