const AddNumbers = function(a,b=0) {  
    return a+b
}

let answers = AddNumbers(8,9);
let answerss = AddNumbers(8); // Using  default function (b=0) we can now add only one numbers
console.log(answers);
console.log(answerss);





const numbers= function(...n) {
    return ...n ;
} 

const AddNUMBERS = numbers(2,3,4,5,5,4,5,1,5,1,5,1,5,1,45,1,54,1,4,41,52,4,5,1,5,45,4,5,);
console.log(AddNUMBERS);