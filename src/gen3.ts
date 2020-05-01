// gen3.ts - Generics in interfaces
interface ICustomer<T, U> {
    cid : T;
    name: string;
    phone: U;

    getPhone() : U;
}

let c1 : ICustomer<number, string> = {
    cid : 43434,
    name: "Microsoft",
    phone: "+1-800-MSFT",
    getPhone: function() {
        return this.phone;
    } 
}


let c2 : ICustomer<string, number> = {
    cid : "C-1001-009",
    name: "Boeing",
    phone: 18001452145,
    getPhone: function() {
        return this.phone;
    } 
}

let phone1 : string = c1.getPhone();
let phone2 : number = c2.getPhone();

console.log(`Phone nos : ${ phone1 } and ${ phone2 }`);