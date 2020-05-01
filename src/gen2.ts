// gen1.ts - Calculating totals and averages

interface IStudent {
    id: number;
    name: string;
    value: number;
}

interface ICollegeStudent extends IStudent {
    gpa : number;
}

interface IResearcher extends IStudent {
    irid : number;
}

function calcAvg<T extends IStudent>(data : T[]) : number {
    let total : number = 0;

    data.forEach((item: T) => {
        total += item.value;
    });

    return (total / data.length);
}

let mcastudents : ICollegeStudent[] = [
    { id: 1, name: "Ram", gpa: 4.5, value: 850.0 },
    { id: 2, name: "Ram", gpa: 3.5, value: 1125.0 },
    { id: 3, name: "Ram", gpa: 4.1, value: 960.0 },
    { id: 4, name: "Ram", gpa: 3.6, value: 785.0 },
    { id: 5, name: "Ram", gpa: 4.8, value: 896.0 }
];

let phdscholars : IResearcher[] = [
    { id: 1, name: "Ram", irid: 785474, value: 1150.0 },
    { id: 2, name: "Ram", irid: 745874, value: 1195.0 },
    { id: 3, name: "Ram", irid: 854121, value: 1185.0 },
    { id: 4, name: "Ram", irid: 854121, value: 1100.0 }
];


// Find out Averages
let avg : number = calcAvg<ICollegeStudent>(mcastudents);
let avg2 : number = calcAvg<IResearcher>(phdscholars);

console.log(`MCA Students Avg Marks: ${ avg } (Total Students : ${ mcastudents.length })
PHD Scholar Avg Marks: ${ avg2 }  (Total Scholars: ${ phdscholars.length })`);