

// lets understand in a simple world primitive data type store in stack each variable stores in different rooms so if we change the value of one variable so it change only value of that variable only not other variable . 

let a = 20 ;
let b = a ;

console.log(b);
a = 30 ;
console.log(a);



// but in case of reference data types the values are store in heap and pointer in the stack and varible have only on address so if we make any change in one variable it automatically change in another variable

let c = ['a','b','c'];
let d = a ;

console.log(d);
c.pop();
console.log(c);
console.log(d);