/*
  Mika Vohl
  04/04/2022
  JavaScript Code File
  This page contains the javascript for the game
*/
let input="";//users input when prompted to enter a move, "health", or "moves"
let hp1=500;//starting hp for player 1
let hp2=500;//starting hp for player 2
let randomNumber=0;
let damage1=0;
let damage2=0;
let selfDamage=0;
let selfDamage2=0;
let count=1;
let monster1="";//monster that player 1 selects
let monster2="";//monster that player 2 selects
let mode=0;
let move1A="";//"A or B" at the end represents the player. 1-4 represents the move number
let move2A="";
let move3A="";
let move4A="";
let move1B="";
let move2B="";
let move3B="";
let move4B="";
let dmg1A=0;
let dmg2A=0;
let dmg3A=0;
let dmg4A=0;
let dmg1B=0;
let dmg2B=0;
let dmg3B=0;
let dmg4B=0;
let acc1A=0;
let acc2A=0;
let acc3A=0;
let acc4A=0;
let acc1B=0;
let acc2B=0;
let acc3B=0;
let acc4B=0;
let self4A=0;//number for when a monster does damage to themself
let self4B=0;
let player1="";
let player2="";
let roundNum=0;
let level=0;
let i=0;

level=+prompt('Welcome to Final Fate! Enter "1" to play until a player has lost all of their health. Enter "2" to play until a round number of your choosing.');
if(level==1)//ensures code will only run if the player wants to play until death
  {
    while(hp1>0 && hp2>0 && i<=roundNum)//ensures code will only run if the monsters are both alive
      {
        mode=+prompt('Enter "1" to play against the computer. Enter "2" to play against a friend on this computer.');
        if(mode==1)//This code will run if the user chooses to play against the computer
          {
            do
              {
                monster1=prompt('You have a choice of two battle monsters. The monsters you can pick from are CHIRON and MEDUSA. Enter the name of the monster you would like to use.').toUpperCase();//.toUpperCase(); is used to make any input into the variable in upper case
                alert("You chose "+monster1);
                if(monster1=="CHIRON")//assigns moves and move statistics to those variables depending on what monster is chosen
                  {
                    move1A="PRECISION";
                    dmg1A=30;
                    acc1A=99;
                    move2A="QUICK SHOT";
                    dmg2A=50;
                    acc2A=75;
                    move3A="HYPER SHOT";
                    dmg3A=70;
                    acc3A=50;
                    move4A="HEADSHOT";
                    dmg4A=100;
                    acc4A=35;
                    self4A=50;
                  }
                else if(monster1=="MEDUSA")
                  {
                    move1A="TWIN FANG";
                    dmg1A=20;
                    acc1A=100;
                    move2A="MIASMA";
                    dmg2A=30;
                    acc2A=80;
                    move3A="CURSE";
                    dmg3A=60;
                    acc3A=50;
                    move4A="FREEZE";
                    dmg4A=150;
                    acc4A=30;
                    self4A=50;
                  }
                else
                  {
                    alert("Sorry, that is not a valid input. Please try again.");
                  }
              }while(monster1!="CHIRON" && monster1!="MEDUSA")//checks condition after code runs once
            alert("You have 4 moves available to you. You can use 1. "+move1A+" 2. "+move2A+" 3. "+move3A+" and 4. "+move4A+"\n"+move1A+" deals "+dmg1A+" damage and has a "+acc1A+"% chance of the attack landing\n"+move2A+" deals "+dmg2A+" damage and has a "+acc2A+"% chance of the attack landing\n"+move3A+" deals "+dmg3A+" damage has a "+acc3A+"% chance of the attack landing\n"+move4A+" is a RISK-MOVE. "+move4A+" deals "+dmg4A+" damage but has a "+acc4A+"% chance of dealing no damage and instead dealing "+self4A+" damage to yourself");
            while(hp1>0 && hp2>0)
              {
                input="";//clears the input at the beginning of every round
                damage1=0;//resets the round damage counter every round
                damage2=0;//resets the round damage counter every round
                selfDamage=0;
                input=prompt('Enter the name of the move you would like to use. Enter "moves" to view what each move does. Enter "health" to view your and the enemy\'s current health.\nWhen your done looking over all the moves, enter 1 of them into the textbox below!').toUpperCase();
                if(input==move1A)
                  {
                    alert("You picked "+move1A);
                    randomNumber=1+Math.round(Math.random()*99);
                    //1 is the minimum in the range of random numbers
                    //99 is the difference or range between the min and the max
                    //in this example the range of random numbers is between 1 and 100
                    if(randomNumber<=acc1A)
                      {
                        alert("The attack hit! It dealt "+dmg1A+" damage!");
                        hp2-=dmg1A;//lowers the health variable when enemy gets attackedd
                        damage1+=dmg1A;//adds to the damage counter in the round summary
                      }
                    else
                      {
                        alert("The attack missed! Bummer");
                      }
                  }
                else if(input==move2A)
                  {
                    alert("You picked "+move2A);
                    randomNumber=1+Math.round(Math.random()*99);//a random number is generated from 1-100
                    if(randomNumber<=acc2A)//the code below will run only if the number that is generated is less than or equal to the accuracy of the move
                      {
                        alert("The attack hit! It dealt "+dmg2A+" damage!");
                        hp2-=dmg2A;//lowers the health variable when enemy gets attackedd
                        damage1+=dmg2A;//adds to the damage counter in the round summary
                      }
                    else
                      {
                        alert("The attack missed! Bummer");
                      }
                  }
                else if(input==move3A)
                  {
                    alert("You picked "+move3A);
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=acc3A)
                      {
                        alert("The attack hit! It dealt "+dmg3A+" damage!");
                        hp2-=dmg3A;//lowers the health variable when enemy gets attackedd
                        damage1+=dmg3A;//adds to the damage counter displayed in the round summary
                      }
                    else
                      {
                        alert("The attack missed! Bummer");
                      }
                  }
                else if(input==move4A)
                  {
                    alert("You picked "+move4A);
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=acc4A)
                    {
                        alert("The attack hit! It dealt "+dmg4A+" damage!");
                        hp2-=dmg4A;
                        damage1+=dmg4A;
                      }
                    else
                      {
                        alert("The attack missed! You dealt "+self4A+" damage to yourself.");
                        hp1-=self4A;//deals damage to the monster that used the move
                        selfDamage+=self4A;//adds to the self damage counter displayed in the round summary
                      }
                  }
                else if(input=="MOVES" || input=="MOVE")//the code below displays the moves and damages of the player who inputs "MOVES"
                  {
                    alert(move1A+": Damage="+dmg1A+" Accuracy="+acc1A+"%\n"+move2A+": Damage="+dmg2A+" Accuracy="+acc2A+"%\n"+move3A+": Damage="+dmg3A+" Accuracy="+acc3A+"%\n"+move4A+" is a RISK-MOVE. "+move4A+" deals "+dmg4A+" damage but has a "+acc4A+"% chance of dealing no damage and instead dealing "+self4A+" damage to yourself");
                    continue;
                  }
                else if(input=="HEALTH")//the code below displays the health of both players when "HEALTH" is inputted
                  {
                    alert("Your current health is "+hp1+"\nKDOG's current health is "+hp2);
                    continue;
                  }
                else
                  {
                    alert("Sorry, that is not a valid input. Try again.");
                    continue;
                  }
                randomNumber=1+Math.round(Math.random()*3);//a random number from 1-4 is generated, the number that is chosen is the move that KDOG will use
                if(hp1<=0 || hp2<=0)
                  {
                    break;
                  }
                if(randomNumber==1)
                  {
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=80)
                      {
                        alert("KDOG used BARK! It dealt 40 damage");
                        hp1-=40;
                        damage2+=40;
                      }
                    else
                      {
                        alert("KDOG's used BARK! KDOG's attack missed");
                      }
                  }
                else if(randomNumber==2)
                  {
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=100)
                      {
                        alert("KDOG used CLAW! It dealt 20 damage");
                        hp1-=20;
                        damage2+=20;
                      }
                    else
                      {
                        alert("KDOG used CLAW! KDOG's attack missed");
                      }
                  }
                else if(randomNumber==3)
                  {
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=60)
                      {
                        alert("KDOG used BITE! It dealt 80 damage");
                        hp1-=70;
                        damage2+=70;
                      }
                    else
                      {
                        alert("KDOG used BITE! KDOG's attack missed");
                      }
                  }
                else
                  {
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=50)
                      {
                        alert("KDOG used SLAM DUNK! It dealt 110 damage");
                        hp1-=110;
                        damage2+=110;
                      }
                    else
                      {
                        alert("KDOG used SLAM DUNK! KDOG's attack missed");
                      }
                  }
                if(selfDamage>0)//this round summary will be shown if there was any self damage taken that round
                  {
                    alert("ROUND "+count+" SUMMARY:\nYour current health is "+hp1+"\nKDOG's current health is "+hp2+"\nYou dealt "+damage1+" damage this round\nKDOG dealt "+damage2+" damage this round\nYou dealt "+selfDamage+" damage to yourself this round");
                  }
                else//this round summary will be shown if there was no self damage taken that round
                  {
                    alert("ROUND "+count+" SUMMARY:\nYour current health is "+hp1+"\nKDOG's current health is "+hp2+"\nYou dealt "+damage1+" damage this round\nKDOG dealt "+damage2+" damage this round");
                  }
                count++;//this is the round counter which displays in the round summary
              }
          }
        else if(mode==2)//the code below will run if the player decides to play against another player
          {
            player1=prompt("Player 1: Enter your name.").toUpperCase();
            player2=prompt("Player 2: Enter your name.").toUpperCase();
            while(monster1!="CHIRON" && monster1!="MEDUSA")
              {
                monster1=prompt(player1+': You have a choice of two battle monsters. The monsters you can pick from are CHIRON and MEDUSA. Enter the name of the monster you would like to use.').toUpperCase();
                alert(player1+", you chose "+monster1);
                if(monster1=="CHIRON")
                  {
                    move1A="PRECISION";
                    dmg1A=30;
                    acc1A=99;
                    move2A="QUICK SHOT";
                    dmg2A=50;
                    acc2A=75;
                    move3A="HYPER SHOT";
                    dmg3A=70;
                    acc3A=50;
                    move4A="HEADSHOT";
                    dmg4A=100;
                    acc4A=30;
                    self4A=50;
                  }
                else if(monster1=="MEDUSA")
                  {
                    move1A="TWIN FANG";
                    dmg1A=20;
                    acc1A=100;
                    move2A="MIASMA";
                    dmg2A=30;
                    acc2A=80;
                    move3A="CURSE";
                    dmg3A=60;
                    acc3A=50;
                    move4A="FREEZE";
                    dmg4A=150;
                    acc4A=35;
                    self4A=50;
                  }
                else
                  {
                    alert("Sorry, that is not a valid input. Please try again.");
                  }
              }
            while(monster2!="CHIRON" && monster2!="MEDUSA")
              {
                monster2=prompt(player2+': You have a choice of two battle monsters. The monsters you can pick from are CHIRON and MEDUSA. Enter the name of the monster you would like to use.').toUpperCase();
                alert(player2+", you chose "+monster2);
                if(monster2=="CHIRON")
                  {
                    move1B="PRECISION";
                    dmg1B=30;
                    acc1B=99;
                    move2B="QUICK SHOT";
                    dmg2B=50;
                    acc2B=75;
                    move3B="HYPER SHOT";
                    dmg3B=70;
                    acc3B=50;
                    move4B="HEADSHOT";
                    dmg4B=100;
                    acc4B=35;
                    self4B=50;
                  }
                else if(monster2=="MEDUSA")
                  {
                    move1B="TWIN FANG";
                    dmg1B=20;
                    acc1B=100;
                    move2B="MIASMA";
                    dmg2B=30;
                    acc2B=80;
                    move3B="CURSE";
                    dmg3B=60;
                    acc3B=50;
                    move4B="FREEZE";
                    dmg4B=150;
                    acc4B=30;
                    self4B=50;
                  }
                else
                  {
                    alert("Sorry, that is not a valid input. Please try again.");
                  }
              }
            alert(player1+": You have 4 moves available to you. You can use 1. "+move1A+" 2. "+move2A+" 3. "+move3A+" and 4. "+move4A+"\n"+move1A+" deals "+dmg1A+" damage and has a "+acc1A+"% chance of the attack landing\n"+move2A+" deals "+dmg2A+" damage and has a "+acc2A+"% chance of the attack landing\n"+move3A+" deals "+dmg3A+" damage but only has a "+acc3A+"% chance of the attack landing\n"+move4A+" is a RISK-MOVE. "+move4A+" deals "+dmg4A+" damage but has a "+acc4A+"% chance of dealing no damage and instead dealing "+self4A+" damage to yourself");
            alert(player2+": You have 4 moves available to you. You can use 1. "+move1B+" 2. "+move2B+" 3. "+move3B+" and 4. "+move4B+"\n"+move1B+" deals "+dmg1B+" damage and has a "+acc1B+"% chance of the attack landing\n"+move2B+" deals "+dmg2B+" damage and has a "+acc2B+"% chance of the attack landing\n"+move3B+" deals "+dmg3B+" damage but only has a "+acc3B+"% chance of the attack landing\n"+move4B+" is a RISK-MOVE. "+move4B+" deals "+dmg4B+" damage but has a "+acc4B+"% chance of dealing no damage and instead dealing "+self4B+" damage to yourself");
            while(hp1>0 && hp2>0)
              {
                while(hp1>0 && hp2>0)
                  {
                    input="";//clears the input at the beginning of every round
                    damage1=0;//resets the round damage counter every round
                    damage2=0;//resets the round damage counter every round
                    selfDamage=0;
                    input=prompt(player1+': Enter the name of the move you would like to use. Enter "moves" to view what each move does. Enter "health" to view your and the enemy\'s current health.\nWhen your done looking over all the moves, enter 1 of them into the textbox below!').toUpperCase();
                    if(input==move1A)
                      {
                        alert("You picked "+move1A);
                        randomNumber=1+Math.round(Math.random()*99);
                        //1 is the minimum in the range of random numbers
                        //99 is the difference or range between the min and the max
                        //in this example the range of random numbers is between 1 and 100
                        if(randomNumber<=acc1A)
                          {
                            alert("The attack hit! It dealt "+dmg1A+" damage!");
                            hp2-=dmg1A;//lowers the health variable when enemy gets attackedd
                            damage1+=dmg1A;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move2A)
                      {
                        alert("You picked "+move2A);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc2A)
                          {
                            alert("The attack hit! It dealt "+dmg2A+" damage!");
                            hp2-=dmg2A;//lowers the health variable when enemy gets attackedd
                            damage1+=dmg2A;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move3A)
                      {
                        alert("You picked "+move3A);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc3A)
                          {
                            alert("The attack hit! It dealt "+dmg3A+" damage!");
                            hp2-=dmg3A;//lowers the health variable when enemy gets attackedd
                            damage1+=dmg3A;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move4A)
                      {
                        alert("You picked "+move4A);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc4A)
                        {
                            alert("The attack hit! It dealt "+dmg4A+" damage!");
                            hp2-=dmg4A;
                            damage1+=dmg4A;
                          }
                        else
                          {
                            alert("The attack missed! You dealt "+self4A+" damage to yourself.");
                            hp1-=self4A;
                            selfDamage+=self4A;
                          }
                        break;
                      }
                    else if(input=="MOVES" || input=="MOVE")
                      {
                        alert(move1A+": Damage="+dmg1A+" Accuracy="+acc1A+"%\n"+move2A+": Damage="+dmg2A+" Accuracy="+acc2A+"%\n"+move3A+": Damage="+dmg3A+" Accuracy="+acc3A+"%\n"+move4A+" is a RISK-MOVE. "+move4A+" deals "+dmg4A+" damage but has a "+acc4A+"% chance of dealing no damage and instead dealing "+self4A+" damage to yourself");
                        continue;
                      }
                    else if(input=="HEALTH")
                      {
                        alert(player1+"'s current health is "+hp1+"\n"+player2+"'s current health is "+hp2);
                        continue;
                      }
                    else
                      {
                        alert("Sorry, that is not a valid input. Try again.");
                        continue;
                      }
                  }
                while(hp1>0 && hp2>0)
                  {
                    input="";//clears the input
                    input=prompt(player2+': Enter the name of the move you would like to use. Enter "moves" to view what each move does. Enter "health" to view your and the enemy\'s current health.\nWhen your done looking over all the moves, enter 1 of them into the textbox below!').toUpperCase();
                    if(input==move1B)
                      {
                        alert("You picked "+move1B);
                        randomNumber=1+Math.round(Math.random()*99);
                        //1 is the minimum in the range of random numbers
                        //99 is the difference or range between the min and the max
                        //in this example the range of random numbers is between 1 and 100
                        if(randomNumber<=acc1B)
                          {
                            alert("The attack hit! It dealt "+dmg1B+" damage!");
                            hp1-=dmg1B;//lowers the health variable when enemy gets attackedd
                            damage2+=dmg1B;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move2B)
                      {
                        alert("You picked "+move2B);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc2B)
                          {
                            alert("The attack hit! It dealt "+dmg2B+" damage!");
                            hp1-=dmg2B;//lowers the health variable when enemy gets attackedd
                            damage2+=dmg2B;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move3B)
                      {
                        alert("You picked "+move3B);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc3B)
                          {
                            alert("The attack hit! It dealt "+dmg3B+" damage!");
                            hp1-=dmg3B;//lowers the health variable when enemy gets attackedd
                            damage2+=dmg3B;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move4B)
                      {
                        alert("You picked "+move4B);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc4B)
                        {
                            alert("The attack hit! It dealt "+dmg4B+" damage!");
                            hp1-=dmg4B;
                            damage2+=dmg4B;
                          }
                        else
                          {
                            alert("The attack missed! You dealt "+self4B+" damage to yourself.");
                            hp2-=self4B;
                            selfDamage2+=self4B;
                          }
                        break;
                      }
                    else if(input=="MOVES" || input=="MOVE")
                      {
                        alert(move1B+": Damage="+dmg1B+" Accuracy="+acc1B+"%\n"+move2B+": Damage="+dmg2B+" Accuracy="+acc2B+"%\n"+move3B+": Damage="+dmg3B+" Accuracy="+acc3B+"%\n"+move4B+" is a RISK-MOVE. "+move4B+" deals "+dmg4B+" damage but has a "+acc4B+"% chance of dealing no damage and instead dealing "+self4B+" damage to yourself");
                        continue;
                      }
                    else if(input=="HEALTH")
                      {
                        alert(player1+"'s current health is "+hp1+"\n"+player2+"'s current health is "+hp2);
                        continue;
                      }
                    else
                      {
                        alert("Sorry, that is not a valid input. Try again.");
                        continue;
                      }
                  }
                if(selfDamage>0 || selfDamage2>0)
                  {
                    alert("ROUND "+count+" SUMMARY:\n"+player1+"'s current health is "+hp1+"\n"+player2+"'s current health is "+hp2+"\n"+player1+" dealt "+damage1+" damage this round\n"+player2+" dealt "+damage2+" damage this round\n"+player1+" dealt "+selfDamage+" damage to themself this round\n"+player2+" dealt "+selfDamage2+" damage to themself this round");
                  }
                else
                  {
                    alert("ROUND "+count+" SUMMARY:\n"+player1+"'s current health is "+hp1+"\n"+player2+"'s current health is "+hp2+"\n"+player1+" dealt "+damage1+" damage this round\n"+player2+" dealt "+damage2+" damage this round");
                  }
                count++;
              }
          }
          else
            {
              alert("Sorry, that is not a valid input. Try again.");
              continue;
            }
      } 
    if(mode==1)//the messages below will only play if the player battles against the computer
      {
        if(hp2<=0)//code for if player 1 wins
          {
            alert("You have won against KDog! Refresh the page to play again.");
          }
        if(hp1<=0)//code for if KDOG (computer) wins
          {
            alert("KDog continues his wrath as he defeats his opponent. He will never be stopped. Refresh the page to play again.");
          }
      }
    if(mode==2)//the messages below will play if the player plays against another player
      {
        if(hp2<=0)//code for if player 1 wins
          {
            alert(player1+" has won against "+player2+". Refresh the page to play again.");
          }
        if(hp1<=0)//code for if player 2 wins
          {
            alert(player2+" has won against "+player1+". Refresh the page to play again.");
          }
      }
  }
else if(level==2)
  {
    roundNum=+prompt("How many rounds would you like to play?");
    while(hp1>0 && hp2>0 && i<=roundNum)//ensures code will only run if the monsters are both alive
      {
        mode=+prompt('Enter "1" to play against the computer. Enter "2" to play against a friend on this computer.');
        if(mode==1)//This code will run if the user chooses to play against the computer
          {
            while(monster1!="CHIRON" && monster1!="MEDUSA")
              {
                monster1=prompt('You have a choice of two battle monsters. The monsters you can pick from are CHIRON and MEDUSA. Enter the name of the monster you would like to use.').toUpperCase();//.toUpperCase(); is used to make any input into the variable in upper case
                alert("You chose "+monster1);
                if(monster1=="CHIRON")//assigns moves and move statistics to those variables depending on what monster is chosen
                  {
                    move1A="PRECISION";
                    dmg1A=30;
                    acc1A=99;
                    move2A="QUICK SHOT";
                    dmg2A=50;
                    acc2A=75;
                    move3A="HYPER SHOT";
                    dmg3A=70;
                    acc3A=50;
                    move4A="HEADSHOT";
                    dmg4A=100;
                    acc4A=35;
                    self4A=50;
                  }
                else if(monster1=="MEDUSA")
                  {
                    move1A="TWIN FANG";
                    dmg1A=20;
                    acc1A=100;
                    move2A="MIASMA";
                    dmg2A=30;
                    acc2A=80;
                    move3A="CURSE";
                    dmg3A=60;
                    acc3A=50;
                    move4A="FREEZE";
                    dmg4A=150;
                    acc4A=30;
                    self4A=50;
                  }
                else
                  {
                    alert("Sorry, that is not a valid input. Please try again.");
                  }
              }
            alert("You have 4 moves available to you. You can use 1. "+move1A+" 2. "+move2A+" 3. "+move3A+" and 4. "+move4A+"\n"+move1A+" deals "+dmg1A+" damage and has a "+acc1A+"% chance of the attack landing\n"+move2A+" deals "+dmg2A+" damage and has a "+acc2A+"% chance of the attack landing\n"+move3A+" deals "+dmg3A+" damage has a "+acc3A+"% chance of the attack landing\n"+move4A+" is a RISK-MOVE. "+move4A+" deals "+dmg4A+" damage but has a "+acc4A+"% chance of dealing no damage and instead dealing "+self4A+" damage to yourself");
            for(i=1;i<=roundNum && hp1>0 && hp2>0;i++)
              {
                console.log(i);
                input="";//clears the input at the beginning of every round
                damage1=0;//resets the round damage counter every round
                damage2=0;//resets the round damage counter every round
                selfDamage=0;
                input=prompt('Enter the name of the move you would like to use. Enter "moves" to view what each move does. Enter "health" to view your and the enemy\'s current health.\nWhen your done looking over all the moves, enter 1 of them into the textbox below!').toUpperCase();
                if(input==move1A)
                  {
                    alert("You picked "+move1A);
                    randomNumber=1+Math.round(Math.random()*99);
                    //1 is the minimum in the range of random numbers
                    //99 is the difference or range between the min and the max
                    //in this example the range of random numbers is between 1 and 100
                    if(randomNumber<=acc1A)
                      {
                        alert("The attack hit! It dealt "+dmg1A+" damage!");
                        hp2-=dmg1A;//lowers the health variable when enemy gets attackedd
                        damage1+=dmg1A;//adds to the damage counter in the round summary
                      }
                    else
                      {
                        alert("The attack missed! Bummer");
                      }
                  }
                else if(input==move2A)
                  {
                    alert("You picked "+move2A);
                    randomNumber=1+Math.round(Math.random()*99);//a random number is generated from 1-100
                    if(randomNumber<=acc2A)//the code below will run only if the number that is generated is less than or equal to the accuracy of the move
                      {
                        alert("The attack hit! It dealt "+dmg2A+" damage!");
                        hp2-=dmg2A;//lowers the health variable when enemy gets attackedd
                        damage1+=dmg2A;//adds to the damage counter in the round summary
                      }
                    else
                      {
                        alert("The attack missed! Bummer");
                      }
                  }
                else if(input==move3A)
                  {
                    alert("You picked "+move3A);
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=acc3A)
                      {
                        alert("The attack hit! It dealt "+dmg3A+" damage!");
                        hp2-=dmg3A;//lowers the health variable when enemy gets attackedd
                        damage1+=dmg3A;//adds to the damage counter displayed in the round summary
                      }
                    else
                      {
                        alert("The attack missed! Bummer");
                      }
                  }
                else if(input==move4A)
                  {
                    alert("You picked "+move4A);
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=acc4A)
                    {
                        alert("The attack hit! It dealt "+dmg4A+" damage!");
                        hp2-=dmg4A;
                        damage1+=dmg4A;
                      }
                    else
                      {
                        alert("The attack missed! You dealt "+self4A+" damage to yourself.");
                        hp1-=self4A;//deals damage to the monster that used the move
                        selfDamage+=self4A;//adds to the self damage counter displayed in the round summary
                      }
                  }
                else if(input=="MOVES" || input=="MOVE")//the code below displays the moves and damages of the player who inputs "MOVES"
                  {
                    alert(move1A+": Damage="+dmg1A+" Accuracy="+acc1A+"%\n"+move2A+": Damage="+dmg2A+" Accuracy="+acc2A+"%\n"+move3A+": Damage="+dmg3A+" Accuracy="+acc3A+"%\n"+move4A+" is a RISK-MOVE. "+move4A+" deals "+dmg4A+" damage but has a "+acc4A+"% chance of dealing no damage and instead dealing "+self4A+" damage to yourself");
                    i--;
                    continue;
                  }
                else if(input=="HEALTH")//the code below displays the health of both players when "HEALTH" is inputted
                  {
                    alert("Your current health is "+hp1+"\nKDOG's current health is "+hp2);
                    i--;
                    continue;
                  }
                else
                  {
                    alert("Sorry, that is not a valid input. Try again.");
                    i--;
                    continue;
                  }
                randomNumber=1+Math.round(Math.random()*3);//a random number from 1-4 is generated, the number that is chosen is the move that KDOG will use
                if(hp1<=0 || hp2<=0)
                  {
                    i--;
                    continue;
                  }
                if(randomNumber==1)
                  {
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=80)
                      {
                        alert("KDOG used BARK! It dealt 40 damage");
                        hp1-=40;
                        damage2+=40;
                      }
                    else
                      {
                        alert("KDOG's used BARK! KDOG's attack missed");
                      }
                  }
                else if(randomNumber==2)
                  {
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=100)
                      {
                        alert("KDOG used CLAW! It dealt 20 damage");
                        hp1-=20;
                        damage2+=20;
                      }
                    else
                      {
                        alert("KDOG used CLAW! KDOG's attack missed");
                      }
                  }
                else if(randomNumber==3)
                  {
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=60)
                      {
                        alert("KDOG used BITE! It dealt 80 damage");
                        hp1-=70;
                        damage2+=70;
                      }
                    else
                      {
                        alert("KDOG used BITE! KDOG's attack missed");
                      }
                  }
                else
                  {
                    randomNumber=1+Math.round(Math.random()*99);
                    if(randomNumber<=50)
                      {
                        alert("KDOG used SLAM DUNK! It dealt 110 damage");
                        hp1-=110;
                        damage2+=110;
                      }
                    else
                      {
                        alert("KDOG used SLAM DUNK! KDOG's attack missed");
                      }
                  }
                if(selfDamage>0)//this round summary will be shown if there was any self damage taken that round
                  {
                    alert("ROUND "+i+" SUMMARY:\nYour current health is "+hp1+"\nKDOG's current health is "+hp2+"\nYou dealt "+damage1+" damage this round\nKDOG dealt "+damage2+" damage this round\nYou dealt "+selfDamage+" damage to yourself this round");
                  }
                else//this round summary will be shown if there was no self damage taken that round
                  {
                    alert("ROUND "+i+" SUMMARY:\nYour current health is "+hp1+"\nKDOG's current health is "+hp2+"\nYou dealt "+damage1+" damage this round\nKDOG dealt "+damage2+" damage this round");
                  }
              }
          }
        else if(mode==2)//the code below will run if the player decides to play against another player
          {
            player1=prompt("Player 1: Enter your name.").toUpperCase();
            player2=prompt("Player 2: Enter your name.").toUpperCase();
            while(monster1!="CHIRON" && monster1!="MEDUSA")
              {
                monster1=prompt(player1+': You have a choice of two battle monsters. The monsters you can pick from are CHIRON and MEDUSA. Enter the name of the monster you would like to use.').toUpperCase();
                alert(player1+", you chose "+monster1);
                if(monster1=="CHIRON")
                  {
                    move1A="PRECISION";
                    dmg1A=30;
                    acc1A=99;
                    move2A="QUICK SHOT";
                    dmg2A=50;
                    acc2A=75;
                    move3A="HYPER SHOT";
                    dmg3A=70;
                    acc3A=50;
                    move4A="HEADSHOT";
                    dmg4A=100;
                    acc4A=30;
                    self4A=50;
                  }
                else if(monster1=="MEDUSA")
                  {
                    move1A="TWIN FANG";
                    dmg1A=20;
                    acc1A=100;
                    move2A="MIASMA";
                    dmg2A=30;
                    acc2A=80;
                    move3A="CURSE";
                    dmg3A=60;
                    acc3A=50;
                    move4A="FREEZE";
                    dmg4A=150;
                    acc4A=35;
                    self4A=50;
                  }
                else
                  {
                    alert("Sorry, that is not a valid input. Please try again.");
                  }
              }
            while(monster2!="CHIRON" && monster2!="MEDUSA")
              {
                monster2=prompt(player2+': You have a choice of two battle monsters. The monsters you can pick from are CHIRON and MEDUSA. Enter the name of the monster you would like to use.').toUpperCase();
                alert(player2+", you chose "+monster2);
                if(monster2=="CHIRON")
                  {
                    move1B="PRECISION";
                    dmg1B=30;
                    acc1B=99;
                    move2B="QUICK SHOT";
                    dmg2B=50;
                    acc2B=75;
                    move3B="HYPER SHOT";
                    dmg3B=70;
                    acc3B=50;
                    move4B="HEADSHOT";
                    dmg4B=100;
                    acc4B=35;
                    self4B=50;
                  }
                else if(monster2=="MEDUSA")
                  {
                    move1B="TWIN FANG";
                    dmg1B=20;
                    acc1B=100;
                    move2B="MIASMA";
                    dmg2B=30;
                    acc2B=80;
                    move3B="CURSE";
                    dmg3B=60;
                    acc3B=50;
                    move4B="FREEZE";
                    dmg4B=150;
                    acc4B=30;
                    self4B=50;
                  }
                else
                  {
                    alert("Sorry, that is not a valid input. Please try again.");
                  }
              }
            alert(player1+": You have 4 moves available to you. You can use 1. "+move1A+" 2. "+move2A+" 3. "+move3A+" and 4. "+move4A+"\n"+move1A+" deals "+dmg1A+" damage and has a "+acc1A+"% chance of the attack landing\n"+move2A+" deals "+dmg2A+" damage and has a "+acc2A+"% chance of the attack landing\n"+move3A+" deals "+dmg3A+" damage but only has a "+acc3A+"% chance of the attack landing\n"+move4A+" is a RISK-MOVE. "+move4A+" deals "+dmg4A+" damage but has a "+acc4A+"% chance of dealing no damage and instead dealing "+self4A+" damage to yourself");
            for(i=1;i<=roundNum && hp1>0 && hp2>0;i++)
              {
                while(hp1>0 && hp2>0)
                  {
                    input="";//clears the input at the beginning of every round
                    damage1=0;//resets the round damage counter every round
                    damage2=0;//resets the round damage counter every round
                    selfDamage=0;
                    input=prompt(player1+': Enter the name of the move you would like to use. Enter "moves" to view what each move does. Enter "health" to view your and the enemy\'s current health.\nWhen your done looking over all the moves, enter 1 of them into the textbox below!').toUpperCase();
                    if(input==move1A)
                      {
                        alert("You picked "+move1A);
                        randomNumber=1+Math.round(Math.random()*99);
                        //1 is the minimum in the range of random numbers
                        //99 is the difference or range between the min and the max
                        //in this example the range of random numbers is between 1 and 100
                        if(randomNumber<=acc1A)
                          {
                            alert("The attack hit! It dealt "+dmg1A+" damage!");
                            hp2-=dmg1A;//lowers the health variable when enemy gets attackedd
                            damage1+=dmg1A;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move2A)
                      {
                        alert("You picked "+move2A);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc2A)
                          {
                            alert("The attack hit! It dealt "+dmg2A+" damage!");
                            hp2-=dmg2A;//lowers the health variable when enemy gets attackedd
                            damage1+=dmg2A;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move3A)
                      {
                        alert("You picked "+move3A);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc3A)
                          {
                            alert("The attack hit! It dealt "+dmg3A+" damage!");
                            hp2-=dmg3A;//lowers the health variable when enemy gets attackedd
                            damage1+=dmg3A;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move4A)
                      {
                        alert("You picked "+move4A);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc4A)
                        {
                            alert("The attack hit! It dealt "+dmg4A+" damage!");
                            hp2-=dmg4A;
                            damage1+=dmg4A;
                          }
                        else
                          {
                            alert("The attack missed! You dealt "+self4A+" damage to yourself.");
                            hp1-=self4A;
                            selfDamage+=self4A;
                          }
                        break;
                      }
                    else if(input=="MOVES" || input=="MOVE")
                      {
                        alert(move1A+": Damage="+dmg1A+" Accuracy="+acc1A+"%\n"+move2A+": Damage="+dmg2A+" Accuracy="+acc2A+"%\n"+move3A+": Damage="+dmg3A+" Accuracy="+acc3A+"%\n"+move4A+" is a RISK-MOVE. "+move4A+" deals "+dmg4A+" damage but has a "+acc4A+"% chance of dealing no damage and instead dealing "+self4A+" damage to yourself");
                        continue;
                      }
                    else if(input=="HEALTH")
                      {
                        alert(player1+"'s current health is "+hp1+"\n"+player2+"'s current health is "+hp2);
                        continue;
                      }
                    else
                      {
                        alert("Sorry, that is not a valid input. Try again.");
                        continue;
                      }
                  }
                alert(player2+": You have 4 moves available to you. You can use 1. "+move1B+" 2. "+move2B+" 3. "+move3B+" and 4. "+move4B+"\n"+move1B+" deals "+dmg1B+" damage and has a "+acc1B+"% chance of the attack landing\n"+move2B+" deals "+dmg2B+" damage and has a "+acc2B+"% chance of the attack landing\n"+move3B+" deals "+dmg3B+" damage but only has a "+acc3B+"% chance of the attack landing\n"+move4B+" is a RISK-MOVE. "+move4B+" deals "+dmg4B+" damage but has a "+acc4B+"% chance of dealing no damage and instead dealing "+self4B+" damage to yourself");
                while(hp1>0 && hp2>0)
                  {
                    input="";//clears the input
                    input=prompt(player2+': Enter the name of the move you would like to use. Enter "moves" to view what each move does. Enter "health" to view your and the enemy\'s current health.\nWhen your done looking over all the moves, enter 1 of them into the textbox below!').toUpperCase();
                    if(input==move1B)
                      {
                        alert("You picked "+move1B);
                        randomNumber=1+Math.round(Math.random()*99);
                        //1 is the minimum in the range of random numbers
                        //99 is the difference or range between the min and the max
                        //in this example the range of random numbers is between 1 and 100
                        if(randomNumber<=acc1B)
                          {
                            alert("The attack hit! It dealt "+dmg1B+" damage!");
                            hp1-=dmg1B;//lowers the health variable when enemy gets attackedd
                            damage2+=dmg1B;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move2B)
                      {
                        alert("You picked "+move2B);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc2B)
                          {
                            alert("The attack hit! It dealt "+dmg2B+" damage!");
                            hp1-=dmg2B;//lowers the health variable when enemy gets attackedd
                            damage2+=dmg2B;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move3B)
                      {
                        alert("You picked "+move3B);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc3B)
                          {
                            alert("The attack hit! It dealt "+dmg3B+" damage!");
                            hp1-=dmg3B;//lowers the health variable when enemy gets attackedd
                            damage2+=dmg3B;//adds to the damage counter in the round summary
                          }
                        else
                          {
                            alert("The attack missed! Bummer");
                          }
                        break;
                      }
                    else if(input==move4B)
                      {
                        alert("You picked "+move4B);
                        randomNumber=1+Math.round(Math.random()*99);
                        if(randomNumber<=acc4B)
                        {
                            alert("The attack hit! It dealt "+dmg4B+" damage!");
                            hp1-=dmg4B;
                            damage2+=dmg4B;
                          }
                        else
                          {
                            alert("The attack missed! You dealt "+self4B+" damage to yourself.");
                            hp2-=self4B;
                            selfDamage2+=self4B;
                          }
                        break;
                      }
                    else if(input=="MOVES" || input=="MOVE")
                      {
                        alert(move1B+": Damage="+dmg1B+" Accuracy="+acc1B+"%\n"+move2B+": Damage="+dmg2B+" Accuracy="+acc2B+"%\n"+move3B+": Damage="+dmg3B+" Accuracy="+acc3B+"%\n"+move4B+" is a RISK-MOVE. "+move4B+" deals "+dmg4B+" damage but has a "+acc4B+"% chance of dealing no damage and instead dealing "+self4B+" damage to yourself");
                        continue;
                      }
                    else if(input=="HEALTH")
                      {
                        alert(player1+"'s current health is "+hp1+"\n"+player2+"'s current health is "+hp2);
                        continue;
                      }
                    else
                      {
                        alert("Sorry, that is not a valid input. Try again.");
                        continue;
                      }
                  }
                if(selfDamage>0 || selfDamage2>0)
                  {
                    alert("ROUND "+i+" SUMMARY:\n"+player1+"'s current health is "+hp1+"\n"+player2+"'s current health is "+hp2+"\n"+player1+" dealt "+damage1+" damage this round\n"+player2+" dealt "+damage2+" damage this round\n"+player1+" dealt "+selfDamage+" damage to themself this round\n"+player2+" dealt "+selfDamage2+" damage to themself this round");
                  }
                else
                  {
                    alert("ROUND "+i+" SUMMARY:\n"+player1+"'s current health is "+hp1+"\n"+player2+"'s current health is "+hp2+"\n"+player1+" dealt "+damage1+" damage this round\n"+player2+" dealt "+damage2+" damage this round");
                  }
              }
          }
        else
          {
            alert("Sorry, that is not a valid input. Try again.");
            continue;
          }
      }
    if(mode==1)//the messages below will only play if the player battles against the computer
      {
        if(hp2<hp1)//code for if player 1 wins
          {
            alert("You have won against KDog! Refresh the page to play again.");
          }
        if(hp2>hp1)//code for if KDOG (computer) wins
          {
            alert("KDog continues his wrath as he defeats his opponent. He will never be stopped. Refresh the page to play again.");
          }
        if(hp2==hp1)
          {
            alert("It was a draw! Refresh the page to play again.");
          }
      }
    if(mode==2)//the messages below will play if the player plays against another player
      {
        if(hp2<hp1)//code for if player 1 wins
          {
            alert(player1+" has won against "+player2+". Refresh the page to play again.");
          }
        if(hp2>hp1)//code for if player 2 wins
          {
            alert(player2+" has won against "+player1+". Refresh the page to play again.");
          }
        if(hp2==hp1)
          {
            alert("It was a draw! Refresh the page to play again.");
          }
      }
  }
else
  {
    alert("Sorry, that is not a valid input. Please try again.");
  }