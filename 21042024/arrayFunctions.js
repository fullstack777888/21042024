const items = [
    { name: 'iPhhone12', price: 5000 },
    { name: 'samsung', price: 3000 },
    { name: 'xiamoi', price: 2000 },
    { name: 'galaxy', price: 2800 },
    { name: 'onePlus', price: 4000 },
    { name: 'appo', price: 1500 },
]


// for (const item of items) {
//     console.log(item);
// }

// console.log(items.length); 

// items.forEach((item) => {
//     console.log(item)
//  })

// 1 
//  const expensiveItems = items.filter((item) => {
//     if (item.price > 2500) {
//         return true;
//     }
// })

// same like ^
// const expensiveItems = items.filter((item) => {
//     return item.price > 2500;
// })

// same like ^
const expensiveItems = items.filter((item) => item.price > 2500)

const inexpensiveItems = items.filter((item) => {
    if (item.price < 2000) {
        return true;
    }
})

const foundItem = items.find((item) => item.name === 'onePlus')
// const foundItem = items.find((item) => item.price > 1000)

const mappedItems = items.map((item) => {
    item.price = item.price + 100;
    item.isPhone = true;
    return item;
})


const isExist = items.some((item) => item.name === 'samsung')
const isExist2 = items.some((item) => item.name === 'philips')

console.log('expensiveItems: ', expensiveItems)
console.log('inexpensiveItems: ', inexpensiveItems)
console.log('foundItem: ', foundItem)
console.log('mappedItems: ', mappedItems)
console.log('isExist: ', isExist)
console.log('isExist2: ', isExist2)