// class3.ts - Protected Modifiers

class Student {
    protected gpa : number = 0;

    constructor(public id : number, public name : string, private email : string) {

    }

    protected checkGPA() : void {
        if(this.gpa < 0) {
            this.gpa = 0;
        }
    }
}

interface IScholar {
    isid : number;
}

interface ISportsPerson {
    sport: string;
}

class Researcher extends Student implements IScholar, ISportsPerson {
    private examscore : number = 0;
    public isid : number = 85411;
    public sport : string = "Basketball";

    constructor(i : number, n : string, e: string, public thesis : string) {
        super(i,n,e);        
    }

    public get GPA() : number {
        this.checkGPA();

        return this.gpa;
    }
}

let stu1 : Student = new Student(1,"Ram","ram@abc.edu");

let res1 : Researcher = new Researcher(2,"John","john@abc.edu","Cold Fusion");

