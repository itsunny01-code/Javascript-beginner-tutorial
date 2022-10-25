
const numbers = [1,92,73,44,5]
const value = function(val) {
    return val%2 === 0 ;
}

const ans = numbers.some(value);
console.log(ans);


// real time example

const products = [
    {id  : 1 , price : 1000},
    {id  : 2 , price : 3000},
    {id  : 3 , price : 4000},
]


const price_check = function(amp) {
    return amp.price < 2000 ;
}

const answer = products.some(price_check);
console.log(answer);