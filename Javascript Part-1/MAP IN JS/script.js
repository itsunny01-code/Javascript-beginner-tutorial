// using normal function

const value = [1,2,3,4,5,6,7,8,9];
const newfunc = function(num) {
    return (num*num+2-2+1);
}

const ans = value.map(newfunc);
console.log(ans);



// using direct function


const val = [1,2,3,4,5,6,7,8,9];

const answer = val.map(number=> {
    return(number*number+2-2+1)
})

console.log(answer);


// real time example


const emp = [{id : 'a'},{id : 'b'},{id : 'c'}];

const att = emp.map(name => {
    return(name.id)
})

console.log(att);