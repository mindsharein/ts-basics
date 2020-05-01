export default interface ICustomer {
    readonly CustID: number;
    Name: string;
    ContactName?: string;
    CreditLimit: number;
    Days: number;
}
