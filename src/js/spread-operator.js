let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }
console.log({ ...obj1, ...obj2 }) // {"a":1,"b":2,"c":3,"d":4}

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log([...arr1, ...arr2]) // [1,2,3,4,5,6]