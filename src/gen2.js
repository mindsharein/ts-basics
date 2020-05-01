// gen1.ts - Calculating totals and averages
function calcAvg(data) {
    var total = 0;
    data.forEach(function (item) {
        total += item.value;
    });
    return (total / data.length);
}
var mcastudents = [
    { id: 1, name: "Ram", gpa: 4.5, value: 850.0 },
    { id: 2, name: "Ram", gpa: 3.5, value: 1125.0 },
    { id: 3, name: "Ram", gpa: 4.1, value: 960.0 },
    { id: 4, name: "Ram", gpa: 3.6, value: 785.0 },
    { id: 5, name: "Ram", gpa: 4.8, value: 896.0 }
];
var phdscholars = [
    { id: 1, name: "Ram", irid: 785474, value: 1150.0 },
    { id: 2, name: "Ram", irid: 745874, value: 1195.0 },
    { id: 3, name: "Ram", irid: 854121, value: 1185.0 },
    { id: 4, name: "Ram", irid: 854121, value: 1100.0 }
];
// Find out Averages
var avg = calcAvg(mcastudents);
var avg2 = calcAvg(phdscholars);
console.log("MCA Students Avg Marks: " + avg + " (Total Students : " + mcastudents.length + ")\nPHD Scholar Avg Marks: " + avg2 + "  (Total Scholars: " + phdscholars.length + ")");
