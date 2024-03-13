let userAccounts = [{
    name: "John Doe",
    birthday: new Date("1974-05-24"),
    email: "john@email.com",
},
{
    name: "Ashley Jones",
    birthday: new Date("1986-08-09"),
    email: "ashley@email.com",
},
{
    name: "Miek Brown",
    birthday: new Date("2004-11-12"),
    email: "mike@email.com",
},
{
    name: "Jake Smith",
    birthday: new Date("1999-12-03"),
    email: "jake@email.com",
},
{
    name: "Gabe Estrada",
    birthday: new Date("1989-03-09"),
    email: "gabe@gmail.com",
}

]

function idGenerator(users) {
    let i = 0;
    while(i < users.length) {
        // ID generator
        users[i].id = i +Math.ceil(Math.random() * 5);
        if(users[i].id === users[i+1]) {
            users[i].id = i +Math.ceil(Math.random() * 5);
        i++
        }
        console.log(users)
        }
}
idGenerator(userAccounts);

// data types, data structures , recurtions a function that calls on itself