// func3.ts - Passing Arrays to Functions

let marks : number[] = [23,34,45,12,46];

console.log(`Total Score   : ${ TotalMarks(marks) } / 250
             Percent Score : ${ Percentage(marks) } 
             Average Marks : ${ Average(marks) }`);

function Average(m : number[]) : number {
    return TotalMarks(m) / m.length;
}

function Percentage(m : number[]) : number {
    return (TotalMarks(m) / 250) * 100;
}

function TotalMarks(m : number[]) : number {
    let total : number = 0;

    for(let i=0; i < m.length; i++ ) {
        total += m[i];
    }

    return total;
}