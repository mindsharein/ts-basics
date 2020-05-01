// Two Dimensional Arrays
var matrix = [
    [12, 34, 85],
    [85, 74, 96],
    [78, 52, 65]
];


console.log("Length: " + matrix.length);

// Print the Matrix on the screen
for (var i = 0; i < matrix.length; i++) {
    var output = "";
    for (var j = 0; j < matrix[i].length; j++) {
        output += matrix[i][j] + "\t\t";
    }
    console.log(output);
}
