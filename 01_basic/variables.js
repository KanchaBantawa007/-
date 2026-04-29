const accountId = "123456"
var acconutPassword = "12345678"
let accountEmail = "iamrai2gmail.com" //let is used to declare a variable that can be reassigned later, but cannot be redeclared in the same scope.
accountBalance = 1000 //when we declare a variable without using var, let, or const, it becomes a global variable. In this case, accountBalance is a global variable that can be accessed and modified from anywhere in the code.
let accountCity;//its O/P `undefined` because we have declared the variable but not assigned any value to it.   


//accountId = "1" due to const variable we can't change the value.
acconutPassword = "123456789_+"
accountEmail = "iamrai2???gmail.com"
accountBalance = 2000
//apart from const variable we can change the value of var and let variable.


console.log(accountId)
console.log(acconutPassword)
console.log(accountEmail)
console.log(accountBalance)


//it give O/P in table format.
console.table({accountId, acconutPassword, accountEmail, accountBalance, accountCity}) 