
const numbers = [1,92,73,44,5]
const value = function(val) {
    return val < 100 ;
}

const ans = numbers.every(value);
console.log(ans);


// real time example

const products = [
    {id  : 1 , price : 1000},
    {id  : 2 , price : 3000},
    {id  : 3 , price : 4000},
]


const price_check = function(amp) {
    return amp.price < 5000 ;
}

const answer = products.every(price_check);
console.log(answer);