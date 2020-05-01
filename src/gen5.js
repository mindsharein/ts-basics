"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// gen5.ts
var https = require("https");
var DataProvider = /** @class */ (function () {
    function DataProvider(svcURL) {
        this.svcURL = svcURL;
        this.data = [];
        this.status = 0;
    }
    DataProvider.prototype.fetch = function () {
        var _this = this;
        // Get data from service url
        this.status = 0;
        https.get(this.svcURL, function (resp) {
            var rdata = "";
            resp.on('data', function (item) {
                rdata += item.toString();
                _this.status = 200;
            });
            resp.on('end', function () {
                var respdata = JSON.parse(rdata);
                _this.data = respdata.value;
                _this.status = 200;
            });
            return _this.data;
        }).on("error", function (err) {
            console.log("Error in call : " + err.message);
            _this.status = 500;
        });
    };
    Object.defineProperty(DataProvider.prototype, "Data", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataProvider.prototype, "Status", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    return DataProvider;
}());
var url = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json";
var dp = new DataProvider(url);
dp.fetch(); // Actual fetch of Data
// Wait for 10 Secs
setTimeout(function () {
    if (dp.Status == 200) {
        dp.Data.forEach(function (item) {
            console.log(item.CustomerID + "   " + item.Phone + "             " + item.City + "  " + item.Country);
        });
    }
}, 500);
