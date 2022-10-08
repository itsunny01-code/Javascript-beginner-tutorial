// SWITCH ID USED FOR ECECUTING THE TRUTH CODE


let Day =  +prompt('enter the day number');

console.log(typeof Day);


switch (Day) {
  case 0:
    console.log('sunday');
    break;

  case 1:
    console.log('Monday');
    break;

  case 2:
    console.log('Tuesday');
    break;

  case 3:
    console.log('Wednesday');
    break;

  case 4:
    console.log('Thrusday');
    break;

  case 5:
    console.log('Friday');
    break;

  case 6:
    console.log("Saturday");
    break;

  default:
    console.log('invalid');
}


