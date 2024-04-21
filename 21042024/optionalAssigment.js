const person = {
    name: '',
    lastName: 'Maclane',
    age: 0,
    // address: {       
    //     city: {
    //         name: "Los Angeles",
    //         street: "2"
    //     }
    // }
}

// const name = person.name ? person.name : 'Unknown' ;
// const name = person.name ? 'Exist' : 'Unknown' ;
// // const name = person.name ?? 'Unknown'  
 const age = person.age ?? 'Unknown'  
 console.log(age);

// const street = person.address?.city?.street;
// const street = person.address && person.address.city && person.address.city.street
// console.log(street)


console.log('flow ended')

// console.log(name)
// const id = person.id;
// console.log(id)



// if ('0') {
//     console.log('Truthy')
// }else{
//     console.log('falsy')
// }

// if ('54' == 54) {
//     console.log('true')
// } else {
//     console.log('false')
// } // return true

// if ('54' === 54) {
//     console.log('true')
// } else {
//     console.log('false')
// } // return false





