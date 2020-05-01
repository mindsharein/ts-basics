// destruct4.ts - Tuple Destructuring

let contact : [string, string, number] = ["vijay", "vijay@anc.com", 555445];

let [name1, ...contactinfo] = contact;

let [email, phone] = contactinfo;

console.log(`Name : ${ name1 }   
             Email: ${ email }
             Phone: ${ phone }`);

