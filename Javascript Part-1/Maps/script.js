const Person_1 = { Id: 1, Name: "Alok" };
const Person_2 = { Id: 2, Name: "Sunny" };

const More_Info = new Map();

More_Info.set(Person_1,{AGE : 18});

console.log(More_Info.get(Person_1));
