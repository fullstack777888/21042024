const myArray = ['a', 2, 'c', 'd', 1000, 'asd ', 'qweqw', 21312];


// const a = myArray[0]
// const b = myArray[1]

// const [a, b] = myArray //same as ^


const [beni,, sarah, ...rest] = myArray


console.log(beni);
console.log(sarah);
console.log(rest)


// targil kita
// create array with 5 elements, 
// get 2 values to 2 different variables (const) with destructure
//  from the array first one and the last one 
