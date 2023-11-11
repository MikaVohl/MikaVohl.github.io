let coord="";//defines the coordinate variable as an empty string
let count=0;//defines the count variable as 0
let remainder=0;//defines the remainder variable as 0
let no1=+prompt("Enter the first number of the coordinate you would like to end on:");//user provides input for the first number of the end coordinates
let no2=+prompt("Enter the second number of the coordinate you would like to end on:");//user provides input for the second number of the end coordinates
let num=0;
for(let x=0;x<=no1;x++)//this loop defines x as 0. x will increase by 1 every iteration and will run until x is more than the variable no1 (the first number of the inputted ending coordinate)
  {
    for(let y=0;y<=no2;y++)//this loop defines y as 0. y will increase by 1 every iteration and will run until y is more than the variable no1 (the first number of the inputted ending coordinate)
      {
        count++;//increases the count by 1 every time the line runs
        num=no2+1;//adds 1 to the second number of the coordinate that the user provides.
        remainder=count%num;//uses the variable "remainder" to hold the value for the remainder when "count" is divided by "num"
        if(remainder!=0)//will run if the remainder variable is any number except 0
          {
            coord=coord+"("+x+","+y+") ";//adds the x and y coordinate to the string with the existing coordinates
          }
        else//will run if the remainder variable is 0. This implies that the number is divisible by "num" evenly. This means the code will run every time the last coordinate of a row is to be printed
          {
            coord=coord+"("+x+","+y+")\n";//adds the x and y coordinate to the string with the existing coordinates, will bring the next coordinates down to the next line
          }
      }
  }
alert(coord);//prints the series of coordinates in the console