// sort method id used in js for sorting the thing

// this sorting is done ascii characters you can check on google 'ascii character values'


// string sorting

const names = ['alok' , 'zoo' , 'mango' , 'dog' , 'lion']
names.sort();
console.log(names);


// basic sorting for numbers which is not usually used 

const numbers = [1,92,73,44,5]
numbers.sort();
console.log(numbers);


// real time numbers sorting  in ascending order

const num = [1,92,73,44,5];
const num_sort = function (a,b) {
    return a - b ;
}

const answer = num.sort(num_sort);
console.log(answer);


// real time numbers sorting  in ascending order

const number = [1,92,73,44,5];
number.sort((a,b) => {
return b - a ;
});

console.log(number);

// real time example

