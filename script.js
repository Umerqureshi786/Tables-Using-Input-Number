

// Taking input from the user:
var number = parseInt(prompt('Enter an integer: '));

//creating table
for(let i = 1; i <= 10; i++) {

    var result = i * number;

    console.log(`${number} * ${i} = ${result}`);
}
