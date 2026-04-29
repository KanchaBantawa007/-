const id = "34abcsh"
console.log( typeof(id))

let typeChange = Number (id)
console.log(typeChange) // NaN (Not a Number) is a special value in JavaScript that represents an invalid number. It is the result of an operation that cannot produce a valid number, such as trying to convert a non-numeric string to a number.
console.log( typeof(typeChange))


console.log("====NULL====")
const temp = null
console.log( typeof(temp))
console.log(temp) // null
let tempChange = Number (temp)
console.log(tempChange) // 0
console.log( typeof(tempChange))

console.log("====UNDEFINED====")
let temp2
console.log( typeof(temp2))
let tempChange2 = Number (temp2)
console.log(tempChange2) // NaN
console.log( typeof(tempChange2))

console .log("====BOOLEAN====")
const isTrue = true
console.log( typeof(isTrue))
console.log(isTrue) // true
let isTrueChange = Number (isTrue)
console.log(isTrueChange) // 1
console.log( typeof(isTrueChange))


const isLoggedIn = 1
console.log(isLoggedIn)
console.log( typeof(isLoggedIn))
let isLoggedInChange = Boolean (isLoggedIn)
console.log(isLoggedInChange) // 0
console.log( typeof(isLoggedInChange))

const hasLoggedIn = "ram"
console.log(hasLoggedIn)
console.log( typeof(hasLoggedIn))
let hasLoggedInChange = Boolean (hasLoggedIn)
console.log(hasLoggedInChange) // 0
console.log( typeof(hasLoggedInChange))

// 1=> true 0=> false
//""=> false "ram"  => true