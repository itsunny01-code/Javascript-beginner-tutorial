

// Lets make a game in NESTED IF ELSE

let Winningnum = 50;

let UserGuess = +prompt("Enter The Number");

console.log(UserGuess);

if(UserGuess === Winningnum ) {
    console.log('WINNER');
}

else {
    if(UserGuess < Winningnum ) {
        console.log('TOOOO LOWWWWWWWWWWWW');
    }

    else(UserGuess > Winningnum ); {
        console.log('TOOOOOO HIGHHHHH');
    }
}