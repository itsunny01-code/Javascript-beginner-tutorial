const names = ['alok' , 'wedfwdfs' , 'wetqwertq3t' , 'wertfe42tgf'] ;

const find = function (name) {
    return name.length===4 ;
}

const answer = names.find(find);
console.log(answer);



// real time example 

const id  = [
    {id : 1 , name : 'alok'},
    {id : 2 , name : 'alokk'},
    {id : 3 , name : 'alokkk'},
    {id : 4 , name : 'alokkkk'}
]


const id_find = id.find((id)=> {
    return id.id===1 ;
})

console.log(id_find);