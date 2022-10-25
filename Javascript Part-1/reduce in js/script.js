//using normal function

const numbers = [1,2,3,4,5,6,7,8,9];

const sum = function(a,b) {
    return (a+b);
}

const answer = numbers.reduce(sum);
console.log(answer);


// using arrow function 

const num = [1,2,3,4,5,6,7,8,9];

const ans = num.reduce((a,b)=>{
    return (a+b) ;
})

console.log(ans);


// using real time example

const mycart = [
    {product_id : 1 , name : 'Mobile' , Price : 10000  },
    {product_id : 2 , name : 'Laptop' , Price : 20000  },
    {product_id : 3 , name : 'HardLamp' , Price : 1000  },
]

const totalAMp = mycart.reduce((totalprice , currentproduct) => {
    return ( totalprice + currentproduct.Price) ;
},0)

console.log(totalAMp);

