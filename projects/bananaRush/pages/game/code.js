/*
  Mika
  6/18/2022
  Game Javascript
  This is where the javascript code for my game is held
*/

//game variables here

let finalMessage;//used in the mainScene and endScene
let leaderboard = [3000, 12000, 17000, 22000];//leaderboard is a variable that will be accessed from every scene
let names = ["JOE", "PETER", "SALLY", "MIKA"];//names is an array along with leaderboard that will track all scores and will be accessed from every scene
let helpInput;
let name = "PLAYER";
let temp=0;
let musicTheme;
let deathSound;
let sandSound;
//functions
//BUBBLE SORT FUNCTION
function bubbleSort(array, input, array2, choice) {
  temp = 0;
  for (let x = 0; x <= array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (input == "ascending") {
        if (array[y] > array[y + 1]) {
          temp = array[y + 1];
          array[y + 1] = array[y];
          array[y] = temp;
          temp = array2[y + 1];
          array2[y + 1] = array2[y];
          array2[y] = temp;
          temp=0;
        }
      }
      if (input == "descending") {
        if (array[y] < array[y + 1]) {
          temp = array[y + 1];
          array[y + 1] = array[y];
          array[y] = temp;
          temp = array2[y + 1];
          array2[y + 1] = array2[y];
          array2[y] = temp;
          temp=0;
        }
      }
    }
  }
  if (choice==1){
    return array; 
  }
  else{
    return array2;
  }
}
//end of bubbleSort

//the following is the main game screen where all the action occurs
class mainScene extends Phaser.Scene {
  monkey;
  upKey;
  spaceKey;
  crates;
  quicksand1;
  quicksand2;
  background;
  background2;
  thorns;
  spring1;
  spring2;
  spring3;
  spring4;
  collided;
  collider1;
  collider2;
  sink;
  score;
  escKey;
  monkeyDisplayDistance;
  springBack;
  springTrigger;
  bananaPile;
  constructor(config) {
    super(config);
  }
  //preload is used to load all game resources into memory
  //preload is called once at the start of a scene
  preload() {
    //the following functions has 2 parameters:1. the id of the resource and 2. the path to the resource
    this.load.image('background', 'assets/sprites/hillBackground2.png');
    this.load.image('grass', 'assets/sprites/grass3.png');
    this.load.image('crate', 'assets/sprites/crate.png');
    this.load.spritesheet('monkey', 'assets/sprites/monkeySprites2.png', { frameWidth: 23, frameHeight: 23 });
    this.load.spritesheet('quicksand', 'assets/sprites/quicksand2.png', { frameWidth: 16, frameHeight: 16 });
    this.load.image('thorns', 'assets/sprites/thornBush.png');
    this.load.spritesheet('spring', 'assets/sprites/spring2.png', { frameWidth: 28, frameHeight: 31 });
    this.load.image('bananaPile', 'assets/sprites/bananaPile.png');
    this.load.audio('theme', 'assets/music/backgroundMusic.mp3');
    this.load.audio('deathSound', 'assets/music/deathSoundEffect.mp3');
    this.load.audio('sandSound', 'assets/music/sandSound.mp3');
  }
  //create gets called after preload and its where you create all your game sprites, sounds and other game objects and initialize all game variables
  create(data) {
    //declaring variables
    let ground;
    this.score = 0;
    this.monkeyDisplayDistance = this.add.text(1000, 10, "Score: 0", { fontFamily: "Arial", fontSize: 22, color: "#FFFFFF", fontFamily: 'VT323' });
    
    //creating background
    this.background = this.add.image(0, -15, 'background').setOrigin(0, 0).setScale(0.9);
    this.background2 = this.add.image(12582, -15, 'background').setOrigin(0, 0).setScale(0.9);

    //creating springs (HAVE TO MAKE NEW VARIABLE FOR EACH NEW SPRING)
    this.spring1 = this.physics.add.staticSprite(14250, 880, 'spring').setScale(5).refreshBody();
    this.spring2 = this.physics.add.staticSprite(16200, 880, 'spring').setScale(5).refreshBody();
    this.spring3 = this.physics.add.staticSprite(19750, 880, 'spring').setScale(5).refreshBody();
    this.spring4 = this.physics.add.staticSprite(22550, 880, 'spring').setScale(5).refreshBody();

    //creating ground
    ground = this.physics.add.staticGroup();
    ground.add(this.add.tileSprite(0, 940, 100000, 180, "grass").setTileScale(0.5, 0.5));

    //creating crates
    this.crates = this.physics.add.staticGroup();
    this.crates.create(1400, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(1810, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(4000, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(4350, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(4350, 605, 'crate').setScale(0.35).refreshBody();
    this.crates.create(5355, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(6500, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(7320, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(7610, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(7770, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(7770, 605, 'crate').setScale(0.35).refreshBody();
    this.crates.create(7927, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(7927, 605, 'crate').setScale(0.35).refreshBody();
    this.crates.create(9017, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(9317, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(9317, 605, 'crate').setScale(0.35).refreshBody();
    this.crates.create(9617, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(9617, 605, 'crate').setScale(0.35).refreshBody();
    this.crates.create(9617, 444, 'crate').setScale(0.35).refreshBody();
    this.crates.create(10067, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(12000, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(12300, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(12300, 605, 'crate').setScale(0.35).refreshBody();
    this.crates.create(12900, 450, 'crate').setScale(0.35).refreshBody();
    this.crates.create(13200, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(13500, 500, 'crate').setScale(0.35).refreshBody();
    this.crates.create(15950, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(16661, 385, 'crate').setScale(0.35).refreshBody();
    this.crates.create(16822, 385, 'crate').setScale(0.35).refreshBody();
    this.crates.create(16983, 385, 'crate').setScale(0.35).refreshBody();
    this.crates.create(17144, 385, 'crate').setScale(0.35).refreshBody();
    this.crates.create(17744, 385, 'crate').setScale(0.35).refreshBody();
    this.crates.create(18600, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(19050, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(20800, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(21200, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(21200, 605, 'crate').setScale(0.35).refreshBody();
    this.crates.create(22000, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(22950, 766, 'crate').setScale(0.35).refreshBody();
    this.crates.create(22950, 605, 'crate').setScale(0.35).refreshBody();
    this.crates.create(22950, 444, 'crate').setScale(0.35).refreshBody();
    this.crates.create(23160, 766, 'crate').setScale(0.35).refreshBody();

    //creating thorns
    this.thorns = this.physics.add.staticGroup();
    this.thorns.create(1540, 780, 'thorns').setScale(0.12).refreshBody();//change hitbox with .setSize(120, 120, true) LOL THIS DOES NOT WORK
    this.thorns.create(1667, 780, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(2800, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(3300, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(3865, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(4170, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(4527, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(4655, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(5655, 500, 'thorns').setScale(-0.12).refreshBody();
    this.thorns.create(5855, 620, 'thorns').setScale(-0.12).refreshBody();
    this.thorns.create(5955, 620, 'thorns').setScale(-0.12).refreshBody();
    this.thorns.create(6055, 620, 'thorns').setScale(-0.12).refreshBody();
    this.thorns.create(6155, 620, 'thorns').setScale(-0.12).refreshBody();
    this.thorns.create(7170, 785, 'thorns').setScale(0.12).refreshBody();
    // this.thorns.create(7670, 200, 'thorns').setScale(-0.12).refreshBody();//hard
    this.thorns.create(7610, 620, 'thorns').setScale(0.12).refreshBody();//modified to make easier jump
    this.thorns.create(7960, 457, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(8867, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(9167, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(9467, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(9767, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(9917, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(10217, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(10367, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(11850, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(12150, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(12850, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(13000, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(13350, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(13500, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(13650, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(14100, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(14500, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(14650, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(17022, 795, 'thorns').setScale(0.10).refreshBody();
    this.thorns.create(17500, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(18750, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(18900, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(19200, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(20000, 400, 'thorns').setScale(-0.12).refreshBody();
    this.thorns.create(20125, 400, 'thorns').setScale(-0.12).refreshBody();
    this.thorns.create(20600, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(21000, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(21600, 400, 'thorns').setScale(-0.12).refreshBody();
    this.thorns.create(21830, 785, 'thorns').setScale(0.12).refreshBody();
    this.thorns.create(22400, 785, 'thorns').setScale(0.12).refreshBody();

    //creating quicksand
    this.quicksand1 = this.physics.add.staticSprite(2275, 906, 'quicksand').setScale(7).refreshBody().setSize(70, 130, true).setOffset(50, -1);
    this.quicksand2 = this.physics.add.staticSprite(2387, 906, 'quicksand').setScale(7).refreshBody().setSize(70, 130, true).setOffset(-15, -1);

    //creating finish
    this.bananaPile = this.physics.add.staticSprite(24000, 685, 'bananaPile').setScale(0.4).refreshBody();
    
    //creating monkey character
    this.monkey = this.physics.add.sprite(500, 740, 'monkey').setScale(7); //WHERE MONKEY SPAWNS, START IS X=500
    this.monkey.body.setGravityY(3500);
    this.monkey.setSize(16, 19, true).setOffset(5, 4);//sets the hitbox

    //creating colliders
    this.collider1 = this.physics.add.collider(this.monkey, ground);
    this.collider2 = this.physics.add.collider(this.monkey, this.crates);
    this.physics.add.collider(this.spring1, ground);
    this.physics.add.collider(this.spring2, ground);
    this.physics.add.collider(this.spring3, ground);
    this.physics.add.collider(this.spring4, ground);

    //positioning camera 
    this.cameras.main.startFollow(this.monkey, false, 0.5, 0, -550, 300);

    //creating key controls
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    //creating music
    musicTheme=this.sound.add('theme', {volume: 0.15, delay: 0});
    musicTheme.play();
    deathSound=this.sound.add('deathSound', {volume: 0.40, delay: 0});
    sandSound=this.sound.add('sandSound', {volume: 0.08, delay: 0});
    
    //creating animations
    this.anims.create({
      key: 'flowing',
      frames: this.anims.generateFrameNumbers('quicksand', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('monkey', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'sit',
      frames: [{ key: 'monkey', frame: 0 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'up',
      frames: [{ key: 'monkey', frame: 3 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'die',
      frames: [{ key: 'monkey', frame: 6 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'sinking',
      frames: this.anims.generateFrameNumbers('monkey', { start: 6, end: 9 }),
      frameRate: 6,
      repeat: 0
    });

    this.score = 0;
    this.monkeyDisplayDistance = this.add.text(1770, 10, "Score: 0", { fontSize: 40, color: "#000000", fontWeight: 900, fontFamily: 'VT323' });
    temp=0;
  }
  //update is the game loop
  //all game logic goes here
  update(time) {
    this.score = this.monkey.x; //constanly increase current position of monkey, used to calculate score
    this.monkeyDisplayDistance.text = "Score: " + this.pointCalculation(this.score);
    // this.add.text(700, 250, "Attempt " + ((leaderboard.length) - 3), { fontSize: 120, color: "#000000", fontWeight: 900, fontFamily: 'VT323' }); //CAUSES GAME TO SLOW DOWN, OPTIONAL TO HAVE ATTEMPTS DISPLAYED
    if (this.levelFinish()) {
      this.cameras.main.stopFollow(this.monkey);
      this.monkey.setGravityY(0);
      this.monkey.anims.play('up', true);
      musicTheme.stop();
      if(this.monkey.y>525)
      {
        this.monkey.y-=1.5;
      }
      if(this.monkey.x<24000)
      {
        this.monkey.x+=2.2;
      }
      if(this.monkey.x>=24000 && this.monkey.y<=525)
      {
        this.monkey.anims.play('sit',true);
        if (temp == 0)
        {
          temp = time + 1000;
        }
        if (time > temp) {
          leaderboard.push(2500);
          names.push(name);
          names = bubbleSort(leaderboard, "descending", names, 2);
          leaderboard = bubbleSort(leaderboard, "descending", names, 1);
          game.scene.start("win");
          game.scene.stop("game");
        }
      }
    }
    else{
      if (this.collided) {
        this.monkey.anims.play('die', true);
        
      }
      else if (this.sink) {
        this.monkey.anims.play('sinking', true);
      }
      else {
        if ((this.upKey.isDown && this.monkey.body.touching.down && this.monkey.x<25000) || (this.spaceKey.isDown && this.monkey.body.touching.down && this.monkey.x<25000)) {
          this.monkey.setVelocityY(-1450);
        }
        this.monkey.x += 9;
        this.monkeyDisplayDistance.x += 9;
        this.background.x += 3;
        this.background2.x += 3;
        if (this.physics.world.overlap(this.monkey, this.crates) || this.physics.world.overlap(this.monkey, this.thorns)) {
          this.collision();
          deathSound.play();
          musicTheme.stop();
        }
        if (this.escKey.isDown) {
          game.scene.start("pause");
          game.scene.pause("game");
        }
        this.quicksand1.anims.play('flowing', true);
        this.quicksand2.anims.play('flowing', true);
        if (this.monkey.body.touching.down == false) {
          this.monkey.anims.play('up', true);
        }
        else {
          this.monkey.anims.play('run', true);
        }
        this.springBounce(this.spring1);
        this.springBounce(this.spring2);
        this.springBounce(this.spring3);
        this.springBounce(this.spring4);

        if (this.physics.world.overlap(this.monkey, this.quicksand1) || this.physics.world.overlap(this.monkey, this.quicksand2)) {
          this.sinking();
          musicTheme.stop();
          sandSound.play();
        }
      }
      if (this.monkey.y > 1000) {
        sandSound.stop();
        this.collided = false;
        this.sink = false;
        this.score = this.monkey.x;
        leaderboard.push(this.pointCalculation(this.score));
        names.push(name);
        names = bubbleSort(leaderboard, "descending", names, 2);
        leaderboard = bubbleSort(leaderboard, "descending", names, 1);
        finalMessage = "You have died.\nYour score was " + this.pointCalculation(this.score) + ".\nClick replay to try again!";
        game.scene.start("endMessageScene");
        game.scene.stop("game");
      }
    }
  }//end of update

  springBounce(springNum) {
    if (this.springBack && springNum.y < 880) {
      springNum.y += 5;//animation
    }
    if (this.springTrigger && springNum.y > 840) {
      springNum.y -= 5;//animation
    }
    if (this.physics.world.overlap(this.monkey, springNum)) {
      this.monkey.setVelocityY(-2000);//sets velocity of monkey
      this.springTrigger = true;//animation
    }
    if (springNum.y <= 840) {
      this.springBack = true;//animation
      this.springTrigger = false;//animation
    }
    if (springNum.y>=880 && this.springBack==true){
      this.springBack = false;
    }
  }
  collision() {
    this.monkey.setVelocityY(-750);
    this.collided = true;
    this.collider1.destroy();
    this.collider2.destroy();
    this.monkey.body.setGravityY(1500);
  }
  sinking() {
    this.monkey.body.setGravityY(13);
    this.monkey.setVelocityY(100);
    this.sink = true;
    this.collider1.destroy();
    this.collider2.destroy();
  }
  pointCalculation(points) {
    this.finalScore = Math.floor(points / 10);
    return this.finalScore;
  }
  levelFinish() {
    if (this.physics.world.overlap(this.monkey, this.bananaPile))
      {
        return true;
      }
    else 
      {
        return false;
      }
  }
  death() {
    this.scene.restart();
  }
}//end of mainScene

class startScene extends Phaser.Scene {
  constructor(config) {
    super(config);
  }
  title;
  enterName;
  temp=0;
  preload() {
    this.load.image("monkeyBackground", "assets/sprites/startScreen1.png");
    this.load.image("gameLogo", "../../images/bananaRush.png");
    this.load.image("startMessage", "assets/sprites/startButton.png");
    this.load.image("nameButton", "assets/sprites/blankButton.png");
  }//end of preload
  create() {
    let startMessage;
    let background = this.physics.add.image(945, 400, "monkeyBackground");
    let graphics;
    startMessage = this.physics.add.image(1300, 740, "startMessage").setInteractive();
    let nameButton = this.physics.add.image(700, 740, "nameButton").setInteractive().setScale(7);

    startMessage.on("pointerdown", function(pointer) {
      this.setTint(0xff0000);
    });//end of pointerdown event

    startMessage.on("pointerup", function(pointer) {
      this.clearTint();
      game.scene.start("game");
      game.scene.stop("startMessageScreen");
    });//end of pointerdown event

    nameButton.on("pointerdown", function(pointer) {
      this.setTint(0xff0000);
    });//end of pointerdown event

    nameButton.on("pointerup", function(pointer) {
      this.clearTint();
      name = prompt("Enter your name").toUpperCase();
      if (name.length > 10) {
        name = name.substr(0, 10);
      }
    });//end of pointerdown event

    graphics = this.add.graphics();
    graphics.lineStyle(8, 0x993a0e, 1);
    //  32px radius on the corners
    graphics.strokeRoundedRect(395, 39, 1100, 185, 32);
    graphics.fillStyle(0xFFD966, 1);
        //  32px radius on the corners
    graphics.fillRoundedRect(397, 41, 1095, 180, 28);

    this.title=this.add.text(500, 30, ".", { fontSize: 200, color: "#993a0e", fontFamily: 'VT323' });
    this.enterName=this.add.text(480, 670, ".", { fontSize: 110, color: "#FFFFFF", fontFamily: 'VT323' });
    temp=0;
  }
  update(time) {
    if (temp == 0)
    {
      temp = time + 100;
    }
    if (time > temp) {
      this.title.text = "BANANA RUSH";
      
      this.enterName.text = "ENTER NAME";
    }
  }
}//end of startScene

class pauseScene extends Phaser.Scene {//start of pauseScene
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image("screenBackground", "../../images/background3.png");
    this.load.image("gameLogo", "../../images/bananaRush.png");
    this.load.image("resume", "assets/sprites/resumeButton2.png");
    this.load.image("home", "assets/sprites/homeButton.png");
  }//end of preload
  create() {
    let background = this.physics.add.image(950, 500, "screenBackground").setScale(1.65);
    let resumeButton = this.physics.add.image(690, 650, "resume").setInteractive().setScale(10);
    let homeButton = this.physics.add.image(1250, 650, "home").setInteractive().setScale(10);
    
    this.add.text(600, 110, "PAUSED", { fontSize: 300, color: "#FFFFFF", fontFamily: 'VT323' });
    resumeButton.on("pointerdown", function(pointer) {
      this.setTint(0xff0000);
    });//end of pointerdown event

    resumeButton.on("pointerup", function(pointer) {
      this.clearTint();
      game.scene.resume("game");
      game.scene.stop("pause");
    });
    
    homeButton.on("pointerdown", function(pointer) {
      this.setTint(0xff0000);
    });//end of pointerdown event

    homeButton.on("pointerup", function(pointer) {
      this.clearTint();
      game.scene.start("startMessageScreen");
      game.scene.stop("game");
      game.scene.stop("pause");
    });
  }
  update() {
  
  }
}//end of pauseScene

class endScene extends Phaser.Scene {//start of endScene
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image("screenBackground", "../../images/background4.png");
    this.load.image("replayMessage", "../../images/replayButton1.png");
    this.load.image("leaderboardBackground", "assets/sprites/leaderboardBg.jpg");
    this.load.image("home", "assets/sprites/homeButton.png");
  }
  create() {
    let loseMessage;
    let background = this.physics.add.image(500, 500, "screenBackground");
    background.setScale(2.5);
    this.add.rectangle(1550, 550, 535, 635, 0x993a0e, 1);
    let Background = this.add.rectangle(1550, 550, 500, 600, 0xFFD966, 1); //background for leaderboard
    loseMessage = this.physics.add.image(800, 700, "replayMessage").setInteractive();
    loseMessage.setScale(1.5);
    let homeButton = this.physics.add.image(280, 700, "home").setInteractive().setScale(8);

    loseMessage.on("pointerdown", function(pointer) {
      this.setTint(0xff0000);
    });//end of pointerdown event

    loseMessage.on("pointerup", function(pointer) {
      this.clearTint();
      game.scene.start("game");
      game.scene.stop("endMessageScene");
    });

    homeButton.on("pointerdown", function(pointer) {
      this.setTint(0xff0000);
    });//end of pointerdown event

    homeButton.on("pointerup", function(pointer) {
      this.clearTint();
      game.scene.start("startMessageScreen");
      game.scene.stop("endMessageScene");
    });//end of pointerup event
    
    this.add.text(1340, 280, "Leaderboard", { fontSize: 60, color: "#993a0e", fontFamily: 'VT323', fontWeight:'900'});
    this.add.text(1340, 380, "1. "+names[0]+": "+leaderboard[0], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323', fontWeight:'900' });
    this.add.text(1340, 480, "2. "+names[1]+": "+leaderboard[1], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323' });
    this.add.text(1340, 580, "3. "+names[2]+": "+leaderboard[2], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323' });
    this.add.text(1340, 680, "4. "+names[3]+": "+leaderboard[3], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323' });
    this.add.text(1340, 780, "5. "+names[4]+": "+leaderboard[4], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323' });

    let txtFinalMessage = this.add.text(130, 150, finalMessage, { fontSize: 102, color: "#FFFFFF", fontFamily: 'VT323' });
  }
  update() {

  }
}//end of endScene

class winScene extends Phaser.Scene {//start of winScene
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image("screenBackground", "../../images/background4.png");
    this.load.image("replayMessage", "../../images/replayButton1.png");
    this.load.image("leaderboardBackground", "assets/sprites/leaderboardBg.jpg");
    this.load.image("monkeyWin", "assets/sprites/monkey5.png")
    this.load.image("home", "assets/sprites/homeButton.png");
    
  }
  create() {
    let winMessage;
    let background = this.physics.add.image(500, 500, "screenBackground");
    background.setScale(2.5);
    this.add.rectangle(1550, 550, 535, 635, 0x993a0e, 1);
    let Background = this.add.rectangle(1550, 550, 500, 600, 0xFFD966, 1); //background for leaderboard
    winMessage = this.physics.add.image(800, 700, "replayMessage").setInteractive();
    winMessage.setScale(1.5);
    this.physics.add.image(1500, 110, "monkeyWin").setScale(2)
    let homeButton = this.physics.add.image(280, 700, "home").setInteractive().setScale(8);

    winMessage.on("pointerdown", function(pointer) {
      this.setTint(0xff0000);
    });//end of pointerdown event

    winMessage.on("pointerup", function(pointer) {
      this.clearTint();
      game.scene.start("game");
      game.scene.stop("win");
    });

    homeButton.on("pointerdown", function(pointer) {
      this.setTint(0xff0000);
    });//end of pointerdown event

    homeButton.on("pointerup", function(pointer) {
      this.clearTint();
      game.scene.start("startMessageScreen");
      game.scene.stop("win");
    });//end of pointerup event
      
    this.add.text(1340, 280, "Leaderboard", { fontSize: 60, color: "#993a0e", fontFamily: 'VT323', fontWeight:'900'});
    this.add.text(1340, 380, "1. "+names[0]+": "+leaderboard[0], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323', fontWeight:'900' });
    this.add.text(1340, 480, "2. "+names[1]+": "+leaderboard[1], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323' });
    this.add.text(1340, 580, "3. "+names[2]+": "+leaderboard[2], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323' });
    this.add.text(1340, 680, "4. "+names[3]+": "+leaderboard[3], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323' });
    this.add.text(1340, 780, "5. "+names[4]+": "+leaderboard[4], { fontSize: 48, color: "#993a0e", fontFamily: 'VT323' });

    this.add.text(85, 100, "YOU WON!\n\nYou took "+(leaderboard.length-4)+" attempts\nPress REPLAY to play again", { fontSize: 105, color: "#FFFFFF", fontFamily: 'VT323' });
  }
  update() {

  }
}//end of winScene

var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1905,//game world width
  height: 909,//game world height
  antialias: false,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    },
  }
};

var game = new Phaser.Game(config);

game.scene.add("game", mainScene);
game.scene.add("startMessageScreen", startScene);
game.scene.add("endMessageScene", endScene);
game.scene.add("pause", pauseScene);
game.scene.add("win", winScene);
game.scene.start("startMessageScreen");