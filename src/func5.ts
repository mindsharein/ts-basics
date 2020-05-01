// Passing Object Arrays to Functions

let data1 : any[] = [
    {
        id: 1001,
        name: "Ram",
        email: "ram@abc.com"
    },
    {
        id: 1002,
        name: "Shyam",
        email: "shyam@abc.com"
    }
];

let data2 : any[] = [
    {
        id: 1003,
        name: "Rahim",
        email: "rahim@abc.com"
    },
    {
        id: 1004,
        name: "John",
        email: "john@abc.com"
    },
];

function getData() : any[] {
    return data1;
}

function getHTML(...data : any[]) : string {
    let html : string = `<table>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>`;

    data.forEach(function(item : any) {
        html += `
            <tr>
                <td>${ item.id }</td>
                <td>${ item.name } </td>
                <td>${ item.email } </td>                
            </tr>
        `
    });

    html+= "</table>";

    return html;
}

console.log(getHTML(...getData(), ...data2));