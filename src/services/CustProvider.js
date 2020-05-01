"use strict";
exports.__esModule = true;
var customers = [
    {
        CustID: 1001,
        Name: "ABC Company",
        ContactName: "Ram",
        CreditLimit: 750000,
        Days: 90
    },
    {
        CustID: 1002,
        Name: "XYZ Company",
        CreditLimit: 800000,
        Days: 60
    },
    {
        CustID: 1003,
        Name: "PQR Company",
        ContactName: "John",
        CreditLimit: 200000,
        Days: 30
    },
    {
        CustID: 1004,
        Name: "EFG Company",
        CreditLimit: 100000,
        Days: 30
    }
];
var CustProvider = /** @class */ (function () {
    function CustProvider() {
    }
    CustProvider.prototype.getData = function () {
        return customers;
    };
    CustProvider.prototype.displayData = function () {
        // Iterate through customer array and display
        var avgLimit = 0;
        var total = 0;
        this.getData().forEach(function (item) {
            total += item.CreditLimit;
            console.log(item.CustID + "    " + item.Name + "  " + (item.ContactName ? item.ContactName : "n/a") + "   " + item.CreditLimit + "   " + item.Days);
        });
        console.log("Average Credit Limit : " + total / customers.length);
    };
    return CustProvider;
}());
exports.CustProvider = CustProvider;
