// prom1.ts - Promises
var t1 = setInterval(function () {
    console.log("Runs every second!");
}, 1000);
setTimeout(function () {
    console.log("1. Waited 5 secs!");
    clearTimeout(t1);
}, 5000);
setTimeout(function () {
    console.log("2. Waited 3 secs");
}, 3000);
setTimeout(function () {
    console.log("3. Called after 10 secs");
}, 10000);
setTimeout(function () {
    console.log("4. Waited for 15 secs");
}, 15000);
