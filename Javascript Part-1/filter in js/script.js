//using normal function

const numbers = [1,2,3,4,5,6,7,8,9];

const isEven = function(num){
    return (num  % 2 ===0)
}

const answers = numbers.filter(isEven);
console.log(answers)


// using arrow functon

const number = [1,2,3,4,5,6,7,8,9];

const ans = number.filter(num=> {
    return (num % 2 ===0)
})

console.log(ans);