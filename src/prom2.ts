// prom2.ts

function translate(word : string) : Promise<string> {
    // Delay here
    for(let i=0;i<100000000;i++) {
        let x = Math.random();
        x = x * x;
    }

    return Promise.resolve("Ola!");
}

function getNumber() : Promise<number> {
    let p : Promise<number> = new Promise((resolve, reject) => {
        // long running operation
        setTimeout(() => {
            let n : number = Math.random() * 10;

            if(n > 3) {
                resolve(n);
            } else {
                reject("Generated number less than 3");
            }
        }, 4000);
    });

    return p;
}

(async() => {

    let t = await translate("Hello");
    console.log(t);

    let n = await getNumber();
    console.log(n);

})();


setInterval(()=> {
    console.log(new Date().toTimeString());
},1000);
