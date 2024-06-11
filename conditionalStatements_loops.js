// Check Temperature Function
function checkTemperature(temp) {
  switch (true) {
    case (temp < 0):
      console.log("It's freezing!");
      break;
    case (temp >= 0 && temp <= 15):
      console.log("It's cold.");
      break;
    case (temp >= 16 && temp <= 25):
      console.log("It's mild.");
      break;
    case (temp > 25):
      console.log("It's warm.");
      break;
  }
}

// Check Divisibility Function
function checkDivisibility(num) {
  switch (true) {
    case (num % 2 === 0 && num % 3 === 0):
      console.log("Divisible by both.");
      break;
    case (num % 2 === 0):
      console.log("Divisible by 2.");
      break;
    case (num % 3 === 0):
      console.log("Divisible by 3.");
      break;
    default:
      console.log("Not divisible by 2 or 3.");
  }
}

// For loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

{
  let sum1 = 0;
  for (let i = 1; i <= 100; i++) {
    sum1 += i;
  }
  console.log(sum1);
}

const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];
{
  let max = numbers2[0];
  for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
      max = numbers2[i];
    }
  }
  console.log(max);
}

// While loops
{
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

{
  let i = 2;
  while (i <= 20) {
    console.log(i);
    i += 2;
  }
}

{
  let sum2 = 0;
  let i = 1;
  while (i <= 100) {
    sum2 += i;
    i++;
  }
  console.log(sum2);
}

{
  let i = 5;
  while (i < 50) {
    console.log(i);
    i += 5;
  }
}

// Do-while loops
{
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}

{
  let sum = 0;
  let i = 1;
  do {
    sum += i;
    i++;
  } while (i <= 100);
  console.log(sum);
}

let number;
do {
  number = parseInt(prompt("Enter a number greater than 10:"), 10);
} while (number <= 10 || isNaN(number));
console.log("You entered: " + number);

// Random Number Guessing Game
const targetNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
  if (guess < 1 || guess > 10 || isNaN(guess)) {
    alert("Please enter a valid number between 1 and 10.");
  } else if (guess < targetNumber) {
    alert("Too low. Try again.");
  } else if (guess > targetNumber) {
    alert("Too high. Try again.");
  }
} while (guess !== targetNumber);

alert("Congratulations! You guessed the correct number: " + targetNumber);
