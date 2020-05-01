// oops2.ts - Interface in TS
interface IInvoice {
    invno : number;
    invdate : string;
    custid: number;
    amount : number;
}

let invoice : IInvoice = {
    invno : 785474,
    invdate : "05/04/2020",
    custid: 1254,
    amount: 75000.00
};

let invoice2 : IInvoice = {
    invno : 785475,
    invdate : "05/04/2020",
    custid: 3541,
    amount : 45000.00
};

console.log(`Invoice Information
    NO   : ${ invoice.invno }
    Date : ${ invoice.invdate }
    Cust : ${ invoice.custid }
    Amt  : ${ invoice.amount }
`);

console.log(`Invoice 2 Information
    NO   : ${ invoice2.invno }
    Date : ${ invoice2.invdate }
    Cust : ${ invoice2.custid }
    Amt  : ${ invoice2.amount }
`);







