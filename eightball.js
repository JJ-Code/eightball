let userName = "James"

// There are 2 ways to write a ternary operator 
console.log(userName === "" ? "Hello!" : `Hello ${userName}!`);

//userName === "" ? console.log('Hello!') : console.log(`Hello ${userName}!`);


let userQuestion = "Will I win the lottery?";

console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
    case 0:
        eightball = 'It is certain';
        break;
    case 1:
        eightball = 'It is decidedly so';
        break;
    case 2:
        eightball = 'Reply hazy try again';
        break;
    case 3:
        eightball = 'Cannot predict now';
        break;
    case 4:
        eightball = 'Do not count on it';
        break;
    case 5:
        eightball = 'My sources say no';
        break;
    case 6:
        eightball = 'Outlook not so good';
        break;
    case 7:
        eightball = 'Signs point to yes';
        break;

}

console.log(`The eight ball answered: ${eightball}`);
