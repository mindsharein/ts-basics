// Function Arguments - Optional Parameters and Default Params

function addNos(n1 : number, n2 : number, n3? : number) : number {
    if(n3) {
        return n1 + n2 + n3;
    }

    return n1 + n2;
}

function showMessage(msg : string, times : number = 3) {
    if(times > 1) {
        for(let i=0; i < times; i++) {
            console.log(msg);
        }
    }
    else {
        console.log(msg);
    }
}
showMessage("Namaste!");
showMessage("Hello there!",1);

function Power(n : number, e : number = 2) : number {
    return Math.pow(n,e);
}

Power(20)



//console.log(`Sum is : ${ addNos(34, 44, 20) } `);