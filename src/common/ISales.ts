// ISales.ts - Interface definition for Sales Data
export interface ISales {
    id : number;
    name: string;
    sales: number;
    profit: number;
}

const GST_RATE : number = 18.0;

export const SALES_SERVICE_URL : string = "https://sales.abc.com/api/";

export function getSalesTaxRate() : number {
    return GST_RATE;
}