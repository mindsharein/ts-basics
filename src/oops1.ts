// OOPS in JS - ES6
interface INameAge {
    Name : string,
    Age: number;
};

class Person {
    constructor(public Name : string, public Age : number , public Gender : string) {
    }

    public showInfo() {
        console.log("PERSON INFO : \n" +
        "Name : " + this.Name + "\n" +  
        "Age  : " + this.Age + "\n" + 
        "Gender : " + this.Gender);
    }

    public getNameAndAge() : INameAge {
        return {
            Name: this.Name,
            Age: this.Age
        };
    }
}

var p1 = new Person("Ram",25, "Male");

p1.showInfo();