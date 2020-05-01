// DataProvider.ts - Reads the Data from CSV and returns data

import { ISales } from "../common/ISales";
import { ReadStream } from 'fs';

export class StaticDataProvider {
    constructor() {

    }

    public getData() : ISales[] {
        // Read CSV Data
        return [
            {
                id: 1001,
                name: "XYZ",
                sales: 4343.44,
                profit: 4.6
            },
            {
                id: 1002,
                name: "PQR",
                sales: 8541.44,
                profit: 14.6
            }
        ]
    } 
}