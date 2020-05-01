import { DataProvider } from "./services/DataProvider";
import ISupplier from "./common/ISupplier";
import IProduct from "./common/IProduct";

let svcUrl : string = "https://services.odata.org/V3/Northwind/Northwind.svc";

async function displaySuppliers() {
    let dp = new DataProvider(svcUrl);

    let suppliers = await dp.getData<ISupplier>("Suppliers");
    let products = await dp.getData<IProduct>("Products");

    if(suppliers) {
        console.log("SUPPLIERS");

        suppliers.forEach((item : ISupplier) => {
            console.log(`${ item.SupplierID }   ${ item.CompanyName }   ${ item.City }  ${ item.Country}`);
        });
    }

    if(products) {
        console.log("\nPRODUCTS -")
        products.forEach((item : IProduct) => {
            console.log(`${ item.ProductID }   ${ item.ProductName }`);
        });
    }
}

displaySuppliers();