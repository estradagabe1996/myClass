/* Using the random user generator, create a phone book of users.
Use fetch to grab 20 users from the API https://randomuser.me/documentation#howto
Add each user to an array that you create that only holds their first name, last name, phone number, street address, and a photo of them
Create a webpage that displays a contact card for each user displaying the aforementioned data
Deploy the website
randomuser.merandomuser.me
Random User Generator | Documentation
Random user generator is a FREE API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people. */



fetch("https://randomuser.me/api/?results=20")
    .then((response) => response.json())
    .then((data) => {
            let userInfo = [];
            userInfo.push(data)
        for(let i = 0; i < userInfo[0].results.length; i++) {
            let users = {
                firstName: userInfo[0].results[0].name.first,
                lastName: userInfo[0].results[0].name.last,
                phoneNumber: userInfo[0].results[i].phone,
                streetAddress: userInfo[0].results[i].location.street.number + " " + userInfo[0].results[i].location.street.name,
                photo: userInfo[0].results[i].picture.medium,
            };
            userInfo.push(users);
            console.log(users);

            const phonebook = document.getElementsByClassName('phonebook')[0];
            console.log(phonebook);

            userInfo.forEach((user, i) => {
                let userP = document.createElement('P');
                let userPText = document.createTextNode(`${users.firstName} \n ${users.lastName} \n ${users.phoneNumber} \n ${users.streeAddress}`);
                userP.appendChild(userPText);
                phonebook.appendChild(userP);
            })
        }
    })
    
// const phonebook = document.getElementsByClassName('phonebook')[0];
// console.log(phonebook);

// users.forEach((userz, index) => {
//     let userP = document.createElement('P');
//     let userPText = document.createTextNode(`${users}`)
// })
    

