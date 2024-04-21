// create person object with keys firstName, lastName, age, address->{street,city}

const person = {
    firstName: 'Sarah',
    lastName: 'Conor',
    age: 30,
    address: {
        street: 34,
        city: "New York"
    }    
};

// const fName = person.firstName
// const lName = person.lastName
// const age = person.age
// const city = person.address.street

const {lastName:lName, address:{city:ct}, firstName:fName} = person

console.log(fName, lName, ct)





// console.log("First name : "+fName +", Last name: "+ lName +', age '+ age+ ", street: "+ st)
// console.log(`First name ${fName}, Last name: ${lName}, age ${age} street: ${city}`)








// Targil kita:
// Create 3 consts fName , lName , age
// Put relevant values from person object to those consts
// create st const and put street from this object

