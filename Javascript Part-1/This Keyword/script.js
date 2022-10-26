


const user = {
  id : 1 ,
  Name : 'ALOK',
  info : function() {
             console.log(`Hello my id is ${this.id} and my name is ${this.Name}`)
  }
}

const user2 = {
  id : 1 ,
  Name : 'ALOK mishra',
}

info.call(user2);