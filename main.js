"use strict";

// // const ageCheck = (age) => {
// //     if (age <21 ) {
// //         console.log("No drinkgs for you!")
// //     } else {
// //         console.log("PARTAYYY")
// //     }
// // }

// // ageCheck(21);

// // const lengthOutput = (strang) => {
// //     return strang.length;
// // }
// // console.log(lengthOutput([1,2,3,4,5]));

// const quoteFinder = (testString) => "winter is coming".indexOf(testString);

// console.log(quoteFinder('is')); //gives 7 because that is where 'is' starts in the given string.

const employee = {
    firstName: 'Bailey',
    lastName: 'Dennis',
    role: 'student',
    accountNumber: '2-458554842136',
    isManager: false,
    titles: ['student developer', 'coffee girl'],
    accolade: {
        title: 'EMS NICU Specialist',
        dateEarned: '6/15/2015',
        expires: 'Never',
        isCool: true
    }
}

// console.log(employee.firstName);
// const keyToCheck = 'accolade'

// console.log(employee[keyToCheck]['isCool']); //variable usage requires bracket notation!

let caste = (obj) => {
    if (obj.firstName[0] === "B") {
        obj.status = 'VIP';
        console.log('VIP BABY');
    } else {
        obj.status = 'PEASANT';
        console.log('GET OUT PEASANT');
    }
    console.log(employee.status);
}

console.log(caste(employee));