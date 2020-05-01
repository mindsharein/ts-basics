// gen5.ts
import * as https from "https";

interface ICustomr {
    CustomerID: string;
    CompanyName: string;
    ContactName: string;
    ContactTitle: string;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country:string;
    Phone: string;
    Fax: string;
}

class DataProvider<T> {
    private data : T[] = [];
    private status : number = 0;

    constructor(private svcURL : string) {

    }

    public fetch() : void {
        // Get data from service url
        this.status = 0;


        https.get(this.svcURL,(resp) => {
            let rdata = "";

            resp.on('data', (item) =>  {
                rdata += item.toString();
                this.status = 200;
            });

            resp.on('end', ()=> {
                let respdata = JSON.parse(rdata);
                this.data = respdata.value as T[];
                this.status = 200;
            });

            return this.data;

        }).on("error", (err) => {
            console.log("Error in call : " + err.message);
            this.status = 500;
        });
    }

    public get Data() : T[] {
        return this.data;
    }

    public get Status() : number {
        return this.status;
    }
}
let url = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json";

let dp = new DataProvider<ICustomr>(url);

dp.fetch();   // Actual fetch of Data

if(dp.Status == 200) {  
    dp.Data.forEach((item : ICustomr) => {
        console.log(`${ item.CustomerID }   ${ item.Phone }             ${ item.City }  ${ item.Country }`)
    });
}


