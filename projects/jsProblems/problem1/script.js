let randomNumber=0;//The variable is used to generate a random number.
let inputNumber=0;//The variable determines the user's input.
randomNumber=1+Math.round(Math.random()*99);//Using Math.Random, this generates a random number between 1 and 100
for(z=1;z<=7;z++)//z is the amount of guesses you have.
//The For Loops sets z to one and z to less than or equal to seven. Because z++ signifies that each time it adds one to z. Until you've attempted 7 times.
{
  inputNumber=+prompt("I'm thinking of a number between 1-100. You have 7 guesses.");// when you click on play the game in the prompt it will show the orange text above.
  if(z==1) //the following code z is to equal 1
  {
    alert("First guess: "+inputNumber);// after you make your first guess it will show the number beside it after the first guess
  }
  else
  {
    alert("Guess # "+z+": " +inputNumber);// the code here will show you how many guesses you have with the letter z and will show the number you put after that.
  }
  //This prompt is telling you to make a guess and it will keep on going on until it reaches 7. Because we are using the variable letter (z) here.
  if(inputNumber>100 || inputNumber<1)//if the number is more than 100 or less than 1 it will be invalid
  {
    alert("You can not enter that number as it is a invalid number. Type another number please and thank you")// for the if statment above if the number is less than 1 or more than 100 the orange sentece will propmt up
    z--//number guessed subtracted by one so it goes back to the same amount of guesses if you had chose a number less than 1 or more than 100.
  }
  else if(inputNumber>randomNumber && z<7)// if the inputNumber is greater than the randomNumber. If the number is too low on the 7th try it will not say it is too low.
  {
    alert("Sorry, that guess is too high.");// if the else if statement is true it will give you a text above on to chose a lower number. 
    inputNumber=0;//sets the inputNumber to 0
  }
  else if(inputNumber<randomNumber && z<7)//If the inputNumber is less than the randomNumber and then if it is less than 7 it will not say that it is too low
  {
    alert("Sorry, you are too low.")//if the else statement is true it will give you a text above on to chose a lower number
  }
  else if(inputNumber==randomNumber)//this is if the inputNumber is equal to randomNumber
  {
    alert("You guessed it! What are the odds?!?")//if you guessed the right number than you will get a text saying that you did it
    z=+100;//the number of guesses will equal to 100
  }
}
if(randomNumber!=inputNumber)//the following code will run if the inputNumber is not equal to the randomNumber.
{
  alert("Sorry, you didn't guess it in 7 tries. You lose.")//if you fail to guess it within 7 tries the text above this will tell you that.
}