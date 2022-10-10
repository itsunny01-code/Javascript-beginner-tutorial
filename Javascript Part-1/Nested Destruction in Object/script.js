
const Nested = [
    {UserName : "ALOK" , Age : 18 , Gender : 'Male'} , 
    {UserName : "NikK" , Age : 28 , Gender : 'Male'} ,
    {UserName : "Dale" , Age : 98 , Gender : 'Male'}
]

console.log (Nested) ;

// for ( user of Nested) {
//     console.log(user)
// }


let [id1 , id2 , id3 ] = Nested ;
console.log(id2);  // for seorating different objects


let [ {Gender : firstidgender} ,  , {UserName : name3id}] = Nested;

console.log(firstidgender); // for seprating Value from objext