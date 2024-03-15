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
            let userData = [];
        for(let i = 0; i < userInfo[0].results.length; i++) {
            let users = {
                firstName: userInfo[0].results[i].name.first,
                lastName: userInfo[0].results[i].name.last,
                phoneNumber: userInfo[0].results[i].phone,
                streetAddress: userInfo[0].results[i].location.street.number + " " + userInfo[0].results[i].location.street.name,
                photo: userInfo[0].results[i].picture.medium,
            };
            userData.push(users);
        }
        console.log(userData);
        
        
        user1.innerText = `${"First Name: " + userData[0].firstName} \n ${"Last Name: " + userData[0].lastName} \n ${"Phone Number : " + userData[0].phoneNumber} ${"Street Address: " + userData[0].streetAddress} ${"Photo ID: " + userData[0].photo} `;
        user2.innerText = `${"First Name: " + userData[1].firstName} \n ${"Last Name: " + userData[1].lastName} \n ${"Phone Number : " + userData[1].phoneNumber} ${"Street Address: " + userData[1].streetAddress} ${"Photo ID: " + userData[1].photo} `;
        user3.innerText = `${"First Name: " + userData[2].firstName} \n ${"Last Name: " + userData[2].lastName} \n ${"Phone Number : " + userData[2].phoneNumber} ${"Street Address: " + userData[2].streetAddress} ${"Photo ID: " + userData[2].photo} `;
        user4.innerText = `${"First Name: " + userData[3].firstName} \n ${"Last Name: " + userData[3].lastName} \n ${"Phone Number : " + userData[3].phoneNumber} ${"Street Address: " + userData[3].streetAddress} ${"Photo ID: " + userData[3].photo} `;
        user5.innerText = `${"First Name: " + userData[4].firstName} \n ${"Last Name: " + userData[4].lastName} \n ${"Phone Number : " + userData[4].phoneNumber} ${"Street Address: " + userData[4].streetAddress} ${"Photo ID: " + userData[4].photo} `;
        user6.innerText = `${"First Name: " + userData[5].firstName} \n ${"Last Name: " + userData[5].lastName} \n ${"Phone Number : " + userData[5].phoneNumber} ${"Street Address: " + userData[5].streetAddress} ${"Photo ID: " + userData[5].photo} `;
        user7.innerText = `${"First Name: " + userData[6].firstName} \n ${"Last Name: " + userData[6].lastName} \n ${"Phone Number : " + userData[6].phoneNumber} ${"Street Address: " + userData[6].streetAddress} ${"Photo ID: " + userData[6].photo} `;
        user8.innerText = `${"First Name: " + userData[7].firstName} \n ${"Last Name: " + userData[7].lastName} \n ${"Phone Number : " + userData[7].phoneNumber} ${"Street Address: " + userData[7].streetAddress} ${"Photo ID: " + userData[7].photo} `;
        user9.innerText = `${"First Name: " + userData[8].firstName} \n ${"Last Name: " + userData[8].lastName} \n ${"Phone Number : " + userData[8].phoneNumber} ${"Street Address: " + userData[8].streetAddress} ${"Photo ID: " + userData[8].photo} `;
        user10.innerText = `${"First Name: " + userData[9].firstName} \n ${"Last Name: " + userData[9].lastName} \n ${"Phone Number : " + userData[9].phoneNumber} ${"Street Address: " + userData[9].streetAddress} ${"Photo ID: " + userData[9].photo} `;
        user11.innerText = `${"First Name: " + userData[10].firstName} \n ${"Last Name: " + userData[10].lastName} \n ${"Phone Number : " + userData[10].phoneNumber} ${"Street Address: " + userData[10].streetAddress} ${"Photo ID: " + userData[10].photo} `;
        user12.innerText = `${"First Name: " + userData[11].firstName} \n ${"Last Name: " + userData[11].lastName} \n ${"Phone Number : " + userData[11].phoneNumber} ${"Street Address: " + userData[11].streetAddress} ${"Photo ID: " + userData[11].photo} `;
        user13.innerText = `${"First Name: " + userData[12].firstName} \n ${"Last Name: " + userData[12].lastName} \n ${"Phone Number : " + userData[12].phoneNumber} ${"Street Address: " + userData[12].streetAddress} ${"Photo ID: " + userData[12].photo} `;
        user14.innerText = `${"First Name: " + userData[13].firstName} \n ${"Last Name: " + userData[13].lastName} \n ${"Phone Number : " + userData[13].phoneNumber} ${"Street Address: " + userData[13].streetAddress} ${"Photo ID: " + userData[13].photo} `;
        user15.innerText = `${"First Name: " + userData[14].firstName} \n ${"Last Name: " + userData[14].lastName} \n ${"Phone Number : " + userData[14].phoneNumber} ${"Street Address: " + userData[14].streetAddress} ${"Photo ID: " + userData[14].photo} `;
        user16.innerText = `${"First Name: " + userData[15].firstName} \n ${"Last Name: " + userData[15].lastName} \n ${"Phone Number : " + userData[15].phoneNumber} ${"Street Address: " + userData[15].streetAddress} ${"Photo ID: " + userData[15].photo} `;
        user17.innerText = `${"First Name: " + userData[16].firstName} \n ${"Last Name: " + userData[16].lastName} \n ${"Phone Number : " + userData[16].phoneNumber} ${"Street Address: " + userData[16].streetAddress} ${"Photo ID: " + userData[16].photo} `;
        user18.innerText = `${"First Name: " + userData[17].firstName} \n ${"Last Name: " + userData[17].lastName} \n ${"Phone Number : " + userData[17].phoneNumber} ${"Street Address: " + userData[17].streetAddress} ${"Photo ID: " + userData[17].photo} `;
        user19.innerText = `${"First Name: " + userData[18].firstName} \n ${"Last Name: " + userData[18].lastName} \n ${"Phone Number : " + userData[18].phoneNumber} ${"Street Address: " + userData[18].streetAddress} ${"Photo ID: " + userData[18].photo} `;
        user20.innerText = `${"First Name: " + userData[19].firstName} \n ${"Last Name: " + userData[19].lastName} \n ${"Phone Number : " + userData[19].phoneNumber} ${"Street Address: " + userData[19].streetAddress} ${"Photo ID: " + userData[19].photo} `;
        
        
    
    })

            // const phonebook = document.getElementsByClassName('phonebook')[0];
            // console.log(phonebook);

            // userInfo.forEach((user, [i]) => {
            //     let userP = document.createElement('P');
            //     let userPText = document.createTextNode(`${users.firstName} \n ${users.lastName} \n ${users.phoneNumber} \n ${users.streeAddress}`);
            //     userP.appendChild(userPText);
            //     phonebook.appendChild(userP);
        // user1.innerText = `${"First Name: " + usersInfo[0].firstName} \n ${"Last Name: " + users[0].lastName} \n ${"Phone Number: " + usersInfo[0].phoneNumber} \n ${"Street Address: " + usersInfo[0].streetAddress} \n ${"Photo ID: " + usersInfo[0].photo}`;

    
    
// const phonebook = document.getElementsByClassName('phonebook')[0];
// console.log(phonebook);

// users.forEach((userz, index) => {
//     let userP = document.createElement('P');
//     let userPText = document.createTextNode(`${users}`)
// })
    

