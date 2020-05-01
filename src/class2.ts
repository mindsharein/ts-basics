class A {
    public static j : number = 500;

    constructor(public i : number) {

    }

    public static getGreeting() : string {
        return "Hello";
    }

    public static get Greeting() : string {
        return "Hi";
    }

}

/*let a1 : A = new A(100);
let a2 : A = new A(200);*/

A.getGreeting()
