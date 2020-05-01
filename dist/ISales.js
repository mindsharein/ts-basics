"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GST_RATE = 18.0;
exports.SALES_SERVICE_URL = "https://sales.abc.com/api/";
function getSalesTaxRate() {
    return GST_RATE;
}
exports.getSalesTaxRate = getSalesTaxRate;
