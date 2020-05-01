import { ICustomer } from "../common/ICustomer";

const customers  : ICustomer[] = [
    {
        CustID : 1001,
        Name : "ABC Company",
        ContactName: "Ram",
        CreditLimit: 750000,
        Days: 90
    },
    {
        CustID : 1002,
        Name : "XYZ Company",
        CreditLimit: 800000,
        Days: 60 
    },
    {
        CustID : 1003,
        Name : "PQR Company",
        ContactName: "John",
        CreditLimit: 200000,
        Days: 30 
    },
    {
        CustID : 1004,
        Name : "EFG Company",
        CreditLimit: 100000,
        Days: 30 
    }
];

export class CustProvider {
    constructor() {

    }

    public getData() : ICustomer[] {
        return customers;
    }

    public displayData() : void {
        // Iterate through customer array and display
        let avgLimit : number = 0;
        let total : number = 0;

        this.getData().forEach((item : ICustomer) => {
            total += item.CreditLimit;

            console.log(`${ item.CustID }    ${ item.Name }  ${ item.ContactName ? item.ContactName : "n/a" }   ${ item.CreditLimit }   ${ item.Days }`);
        });

        console.log(`Average Credit Limit : ${ total / customers.length }`);
    }
}