/* While loops: are very similar to for loops, but they do not auto increment the index nor do they set a condition to when the loop should end. 

*/

// let bool = [true, false, false, true , true , true, false];

// let i = 0;
// while(i < bool.length) {
//     if(bool[i] === true) {
//     console.log(i);
//     }
//     i++;
// }

// in a while loop the incrameter "i++" should always be at the end of the sequece

// // Minimum President Age up to inagaration
// let presidentAge = new Date("1990-01-25") 
// // Can user be President?
// if(users[i].birthday < presidentAge) {
//     console.log(users[i].name, "You can be President!")
// } else {
//     console.log(users[i].name, "Not old enough.")
// }

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
// WORKING FUNCTION
// function idGenerator(users) {
//     let i = 0;
//     while(i < users.length) {
//         // ID generator
//         users[i].id = i +Math.ceil(Math.random() * 9999999);
//         if(users[i].id === users[i+1]){
//             users[i].id = i +Math.ceil(Math.random() * 9999999)
//         } else if(users[i].id < 1000000) {
//             users[i].id = i +Math.ceil(Math.random() * 9999999)
//             }
//         i++;
//     }
//     console.log(users)
// }
function idGenerator(users) {
    let i = 0;
    while(i < users.length) {
        // ID generator
        users[i].id = i +Math.ceil(Math.random() * 5);
        if(users[i].id === users[i+1]){
            users[i].id = i +Math.ceil(Math.random() * 5)
        i++;
    }
    console.log(users)
}
idGenerator(userAccounts);

// user[i].id 

// TEST AREA
// function idGenerator(users) {
//     let i = 0;
//     while(i < users.length) {
//         // ID generator
//         let usersId = Math.ceil(Math.random() * 5);
//         console.log(usersId),
//         i++;}
//         console.log(users)

        // if(users[i].usersId === users[i+1].usersId) {
        //     Math.ceil(Math.random() * 5)
        // } else if(users[i].id > 5) {
        //     users[i].id = i +Math.ceil(Math.random() * 5)
        //     } else if(users[i].id === users[i+1].id) {
        //         console.log("error Retry")
            
        // }





//         // Minimum President Age up to inagaration
//         let presidentAge = new Date("1990-01-25") 
//         // Can user be President?
//         if(users[i].birthday < presidentAge) {
//             console.log(users[i].name, "You can be President!")
//         } else {
//             console.log(users[i].name, "Not old enough.")
//         }
//         i++;
//     }
//     console.log(users)
// }


// function getAge(user){
//     let i = 0;
//     while(i < user.length) {
//     let d = new Date(user[i].birthday)
//     let day = d.getDate()
//     console.log(day);
//     let month = d.getMonth() + 1;
//     console.log(month);
//     let year = d.getFullYear()
//     console.log(year);
//     }
// }
// getAge();

//     }
// }


// called functions
// getAge(userAccounts);
// getBirthdays(userAccounts);
// console.log(userAccounts)


/*
use your favorite browser to figure out how to conver the current list of user birthdays from a string to a date.

determine if you can compate dates using <, >, == similar to any regualr numbers
*/