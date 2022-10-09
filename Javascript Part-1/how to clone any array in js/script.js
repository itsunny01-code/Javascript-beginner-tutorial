let a = ['alok','mishra'];
let b = ['alok','mishra'];  // Noob way to copying any array by just copying and please don't this method in raw projects
console.log(a , b)


//first method

let c = [1,2,2,2,2,2,2,2];
let d = c.slice(); // second method and the fastest method
console.log(d);

let add_c = [1,2,2,2,2,2,2,2];
let add_d = c.slice().concat(['add','new','array']); // add extra elements in the array
console.log(add_d);


// Second Methods

let e = [1,2,2,6,272,2,2];
let f = [].concat(e); // concat method for cloning
console.log(f);

let add_e = [1,2,2,6,272,2,2];
let add_f = [].concat(e ,['add','new','array']); // add extra elements
console.log(add_f);

// Third Methods

let g =  [1,2,2,9846,1272,232,2];
let h = [...g];  // spread method for cloning
console.log(h);

let add_g =  [1,2,2,9846,1272,232,2];
let add_h = [...g].concat(['add','new','array']);  // add extra elements
console.log(add_h);