let a=0;//defining the variable for the first number
let b=0;//defining the variable for the second number
let c=0;//defining the variable for the third number
let d=0;//defining the variable for the fourth number
let sum=0;//defining the variable for the sum
let plus2=0;//defining the variable for the first number when 2 is added to it
let minus2=0;//defining the variable for the second number when 2 is taken from it
let times2=0;//defining the variable for the third number when it is multiplied by 2
let divide2=0;//defining the variable for the fourth number when it is divided by 2
for(a=0;a<45;a++)//creates a loop that will run while "a" is less than 45. "a" starts at 0 and goes up by one every iteration
  {
    sum=a+b+c+d;//calculates the sum by adding the values of a,b,c, and d
    plus2=a+2;//calculates the value of plus2 by adding a and 2
    minus2=b-2;//calculates the value of minus2 by taking 2 from b
    times2=c*2;//calculates the value of times2 by multiplying c by 2
    divide2=d/2;//calculates the value of divide2 by dividing d by 2
    if(sum==45 && plus2==minus2 && minus2==times2 && times2==divide2)//runs the following code if all of the conditions in the brackets are true
      {
        alert(a+" "+b+" "+c+" "+d);//displays a console message containing the four values that meet the conditions
      }
    else//runs the following code if the if conditions above are not true
      {
        for(b=0;b<45;b++)//creates a loop that will run while "b" is less than 45. "b" starts at 0 and goes up by one every iteration
          {
          sum=a+b+c+d;//calculates the sum by adding the values of a,b,c, and d
          plus2=a+2;//calculates the value of plus2 by adding a and 2
          minus2=b-2;//calculates the value of minus2 by taking 2 from b
          times2=c*2;//calculates the value of times2 by multiplying c by 2
          divide2=d/2;//calculates the value of divide2 by dividing d by 2
          if(sum==45 && plus2==minus2 && minus2==times2 && times2==divide2)//runs the following code if all of the conditions in the brackets are true
            {
              alert(a+" "+b+" "+c+" "+d);//displays a console message containing the four values that meet the conditions
            }
          else//runs the following code if the if conditions above are not true
            {
              for(c=0;c<45;c++)//creates a loop that will run while "c" is less than 45. "c" starts at 0 and goes up by one every iteration
                {
                sum=a+b+c+d;//calculates the sum by adding the values of a,b,c, and d
                plus2=a+2;//calculates the value of plus2 by adding a and 2
                minus2=b-2;//calculates the value of minus2 by taking 2 from b
                times2=c*2;//calculates the value of times2 by multiplying c by 2
                divide2=d/2;//calculates the value of divide2 by dividing d by 2
                if(sum==45 && plus2==minus2 && minus2==times2 && times2==divide2)//runs the following code if all of the conditions in the brackets are true
                  {
                    alert(a+" "+b+" "+c+" "+d);//displays a console message containing the four values that meet the conditions
                  }
                else//runs the following code if the if conditions above are not true
                  {
                    for(d=0;d<45;d++)//creates a loop that will run while "d" is less than 45. "d" starts at 0 and goes up by one every iteration
                      {
                      sum=a+b+c+d;//calculates the sum by adding the values of a,b,c, and d
                      plus2=a+2;//calculates the value of plus2 by adding a and 2
                      minus2=b-2;//calculates the value of minus2 by taking 2 from b
                      times2=c*2;//calculates the value of times2 by multiplying c by 2
                      divide2=d/2;//calculates the value of divide2 by dividing d by 2
                      if(sum==45 && plus2==minus2 && minus2==times2 && times2==divide2)//runs the following code if all of the conditions in the brackets are true
                        {
                          alert("The four values that have a sum of 45 and meet the other conditions are: "+a+" "+b+" "+c+" "+d);//displays a console message containing the four values that meet the conditions
                        }
                      }
                  }
                }
            }
          }
      }
  }