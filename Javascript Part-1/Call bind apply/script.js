

function Over_right( male , age ) {
  console.log(`Hello my name is ${this.name} and i'm from ${this.state} ` , male , age)
}

const user = {
  name : 'alok' , 
  state : 'Uttar Pradesh'
}

const user2 = {
  name : 'alok mishra' , 
  state : 'Uttar Pradesh'
}

const user3 = {
  name : 'alok ji' , 
  state : 'Uttar Pradesh'
}


Over_right.call(user2 , "male" , 18);
Over_right.apply(user , ["male" , 18]);

const newfunc = Over_right.apply(user3 , ["male" , 18]);
console.log(newfunc);