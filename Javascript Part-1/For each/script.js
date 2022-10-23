// Diect foreach 

const Values = [1,2,3,4,5,6];

function numbers(user){
    console.log(user*2);
}

Values.forEach(numbers);

// Anonymous foreach

const keys = [444,999,666,333];

keys.forEach(function(user) {
    console.log(user*2);
})


// Real time examples 


const Emp = [
    {Name : 'xyz'},
    {Name : 'xxyyz'},
    {Name : 'xxyzz'},
    {Name : 'xxxyz'},
    {Name : 'xxxxyz'},
    {Name : 'xxxxxyz'}
]

Emp.forEach(function(id){
    console.log(id.Name);
})