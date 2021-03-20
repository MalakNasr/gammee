






function preload() {
  pic1 = loadImage("blueWater.PNG")
  pic2 = loadImage("bgH.png")
  pic3 = loadImage("download1.png")
  pic4 = loadImage("watergirl.png")
  pic5 = loadImage("redFire.PNG")
  pic6 = loadImage("ground1.PNG")
  pic7 = loadImage("ground2.PNG")
  pic8 = loadImage("groundH.PNG")
  blueD = loadImage("blueDoor.PNG")
  redD = loadImage("redDoor.PNG")
  greenGround = loadImage("groundHGreen.PNG")
  slantGround = loadImage("groundSlant.png")
  finalGround = loadImage("finalGround.png")
  groundCorner = loadImage("groundCorner.png")
  fire = loadImage("fire.png")
  green = loadImage("green.png")
  water = loadImage("water.png")
  goldenButton = loadImage("goldenButton.PNG")
  yellowBar = loadImage("yellowBar.PNG")
  grassImg = loadImage("grass.png")
  blueDmd = loadImage("blueDiamond.png")
  redDmd = loadImage("redDiamond.png")
  climberImg = loadImage("climber.png")
  gameOverimg = loadImage ("game over.png")
  youWinimg = loadImage ("youWin.png")


}

function setup() {
  time = 60
  redCount = 0
  blueCount = 0
  gameState = "play"
  canvas = createCanvas(1600, 1200);
  fireboy = createSprite(600, 1100)
  fireboy.addImage(pic3)
  fireboy.scale = 0.35
  watergirl = createSprite(300, 900)
  watergirl.addImage(pic4)
  watergirl.scale = 0.7

  blueDoor = createSprite(420, 520)
  blueDoor.addImage(blueD)
  blueDoor.scale = 2.2

  redDoor = createSprite(880, 520)
  redDoor.addImage(redD)
  redDoor.scale = 2.2



  dummy1 = createSprite(650, 1160, 200, 10)
  dummy1.visible = false;

  dummy2 = createSprite(650, 285, 170, 10)
  dummy2.visible = false;

  dummy3 = createSprite(1400, 780, 200, 10)
  dummy3.visible = false;

  dummy4 = createSprite(960, 425, 180, 10)
  dummy4.visible = false;

  // finalGround1 = createSprite()

  f1 = createSprite(200, 800)
  f1.addImage(finalGround)
  f1.scale = 2


  f2 = createSprite(1380, 800)
  f2.addImage(pic5)
  f2.scale = 2

  f5 = createSprite(935, 440)
  f5.addImage(pic5)
  f5.scale = 1.5

  f6 = createSprite(650, 300)
  f6.addImage(pic1)
  f6.scale = 1.5

  f4 = createSprite(800, 400)
  f4.addImage(pic7)
  f4.scale = 1.8

  f9 = createSprite(500, 440)
  f9.addImage(pic8)
  f9.scale = 1.9

  f10 = createSprite(840, 860)
  f10.addImage(finalGround)
  f10.scale = 2.0


  f11 = createSprite(200, 1000)
  f11.addImage(finalGround)
  f11.scale = 2.5

  f12 = createSprite(300, 1180)
  f12.addImage(finalGround)
  f12.scale = 2.5

  f15 = createSprite(650, 1180)
  f15.addImage(fire)
  f15.scale = 3

  f13 = createSprite(1100, 1180)
  f13.addImage(finalGround)
  f13.scale = 2.5

  f7 = createSprite(350, 380)
  f7.addImage(pic7)
  f7.scale = 1.8



  f8 = createSprite(1250, 380)
  f8.addImage(pic7)
  f8.scale = 1.8

  f3 = createSprite(800, 600)
  f3.addImage(pic6)
  f3.scale = 2.4

  f14 = createSprite(520, 835)
  f14.addImage(slantGround)
  f14.scale = 1.8
  // f14.debug=true
  f14.setCollider("circle", 0, 0, 20)


  f16 = createSprite(1500, 1110)
  f16.addImage(groundCorner)
  f16.scale = 2.5

  f17 = createSprite(100, 300)
  f17.addImage(finalGround)
  f17.scale = 1

  f18 = createSprite(1500, 300)
  f18.addImage(finalGround)
  f18.scale = 1

  yellowBtn = createSprite(1000, 1150)
  yellowBtn.addImage(goldenButton)
  yellowBtn.scale = 2.5

  yellowBarSprite = createSprite(800, 1000)
  yellowBarSprite.addImage(yellowBar)
  yellowBarSprite.scale = 2;

  d1 = createSprite(650, 1050)
  d1.addImage(redDmd)
  d1.scale = 2

  d2 = createSprite(1460, 930)
  d2.addImage(redDmd)
  d2.scale = 2

  d3 = createSprite(1350, 700)
  d3.addImage(redDmd)
  d3.scale = 2

  d4 = createSprite(900, 354)
  d4.addImage(redDmd)
  d4.scale = 2

  d5 = createSprite(80, 208)
  d5.addImage(redDmd)
  d5.scale = 2

  d6 = createSprite(710, 512)
  d6.addImage(redDmd)
  d6.scale = 2

  d7 = createSprite(46, 1080)
  d7.addImage(redDmd)
  d7.scale = 2

  d8 = createSprite(1246, 62)
  d8.addImage(redDmd)
  d8.scale = 2

  d9 = createSprite(350, 76)
  d9.addImage(blueDmd)
  d9.scale = 2

  d10 = createSprite(1300, 1074)
  d10.addImage(blueDmd)
  d10.scale = 2

  d11 = createSprite(622, 744)
  d11.addImage(blueDmd)
  d11.scale = 2

  d12 = createSprite(638, 224)
  d12.addImage(blueDmd)
  d12.scale = 2

  d13 = createSprite(1480, 208)
  d13.addImage(blueDmd)
  d13.scale = 2

  d14 = createSprite(1162, 508)
  d14.addImage(blueDmd)
  d14.scale = 2

  d15 = createSprite(250, 480)
  d15.addImage(blueDmd)
  d15.scale = 2

  d16 = createSprite(50, 880)
  d16.addImage(blueDmd)
  d16.scale = 2

  gameOver = createSprite(width/2, height/2)
  gameOver.visible = false
  gameOver.addImage (gameOverimg)

  youWin = createSprite(width/2, height/2)
  youWin.visible = false
  youWin.addImage (youWinimg)



}


function draw() {
  background(pic2)
  console.log("fireboy " + fireboy.x + "y " + fireboy.y)
  console.log("watergirl " + watergirl.x + "y " + watergirl.y)
  if (gameState === "play") {
    //Water girl touching Fire
    if (watergirl.isTouching(dummy1) || watergirl.isTouching(dummy3) || watergirl.isTouching(dummy4)) {
      watergirl.destroy()
      gameState = "end"
    }
    //Fireboy touching water
    if (fireboy.isTouching(dummy2)) {
      fireboy.destroy()
      gameState = "end"

    }

    //Fireboy movements
    if (keyDown(UP_ARROW)) {
      fireboy.velocityY = -10
    }
    fireboy.velocityY += 0.5
    if (keyDown(RIGHT_ARROW)) {
      fireboy.x = fireboy.x + 5
    }
    if (keyDown(LEFT_ARROW)) {
      fireboy.x = fireboy.x - 5
    }
    //Winning
    if(fireboy.isTouching(redDoor) && watergirl.isTouching(blueDoor) && blueCount === 8 && redCount === 8){
      youWin.visible = true
    }
    //Watergirl movements
    if (keyDown("W")) {
      watergirl.velocityY = -10
    }
    watergirl.velocityY += 0.5
    if (keyDown("D")) {
      watergirl.x = watergirl.x + 5
    }
    if (keyDown("A")) {
      watergirl.x = watergirl.x - 5
    }

    //Diamond Instructions
    if (fireboy.isTouching(d1)) {
      d1.destroy()
      redCount = redCount + 1
    }
    if (fireboy.isTouching(d2)) {
      d2.destroy()
      redCount = redCount + 1
    }
    if (fireboy.isTouching(d3)) {
      d3.destroy()
      redCount = redCount + 1
    }
    if (fireboy.isTouching(d4)) {
      d4.destroy()
      redCount = redCount + 1
    }
    if (fireboy.isTouching(d5)) {
      d5.destroy()
      redCount = redCount + 1
    }
    if (fireboy.isTouching(d6)) {
      d6.destroy()
      redCount = redCount + 1
    }
    if (fireboy.isTouching(d7)) {
      d7.destroy()
      redCount = redCount + 1
    }
    if (fireboy.isTouching(d8)) {
      d8.destroy()
      redCount = redCount + 1
    }


    if (watergirl.isTouching(d9)) {
      d9.destroy()
      blueCount = blueCount + 1
    }
    if (watergirl.isTouching(d10)) {
      d10.destroy()
      blueCount = blueCount + 1
    }
    if (watergirl.isTouching(d11)) {
      d11.destroy()
      blueCount = blueCount + 1
    }
    if (watergirl.isTouching(d12)) {
      d12.destroy()
      blueCount = blueCount + 1
    }
    if (watergirl.isTouching(d13)) {
      d13.destroy()
      blueCount = blueCount + 1
    }
    if (watergirl.isTouching(d14)) {
      d14.destroy()
      blueCount = blueCount + 1
    }
    if (watergirl.isTouching(d15)) {
      d15.destroy()
      blueCount = blueCount + 1
    }
    if (watergirl.isTouching(d16)) {
      d16.destroy()
      blueCount = blueCount + 1
    }


    //Timer should continue to work
    if (frameCount % 40 === 0) {
      if(time>0)          
      time--;
    }
    if(time <= 0){
      gameState = "end"
    }
    //Yellow bar to move

    if (fireboy.isTouching(yellowBtn)) {
      if (yellowBarSprite.x >= 600)
        yellowBarSprite.x = yellowBarSprite.x - 2

    }

  } else if (gameState === "end") {
    gameOver.visible = true
  }




  drawSprites()



  textSize(35)
  fill(0)

  image(blueDmd, 20,20,80,70)
  text(blueCount, 90,70)
  image(redDmd, 20,80,80,70)
  text(redCount, 90, 130)


  fill(0)
  textSize(70)
  text("00 : " + time, 690, 80)



  image(grassImg, 580, 540, 200, 100)
  image(grassImg, 1100, 540, 200, 100)
  image(grassImg, 690, 600, 200, 100)
  image(climberImg, 610, 1, 380, 200)

   //fireboy to collide with walls and floors
   fireboy.collide(f1)
   fireboy.collide(f2)
   fireboy.collide(f3)
   fireboy.collide(f4)
   fireboy.collide(f5)
   fireboy.collide(f6)
   fireboy.collide(f7)
   fireboy.collide(f8)
   fireboy.collide(f9)
   fireboy.collide(f10)
   fireboy.collide(f11)
   fireboy.collide(f12)
   fireboy.collide(f13)
   fireboy.collide(f14)
   fireboy.collide(f15)
   fireboy.collide(f16)
   fireboy.collide(f17)
   fireboy.collide(f18)
   fireboy.collide(yellowBarSprite)

   //watergirl to collide with walls and floors
   watergirl.collide(f1)
   watergirl.collide(f2)
   watergirl.collide(f3)
   watergirl.collide(f4)
   watergirl.collide(f5)
   watergirl.collide(f6)
   watergirl.collide(f7)
   watergirl.collide(f8)
   watergirl.collide(f9)
   watergirl.collide(f10)
   watergirl.collide(f11)
   watergirl.collide(f12)
   watergirl.collide(f13)
   watergirl.collide(f14)
   watergirl.collide(f15)
   watergirl.collide(f16)
   watergirl.collide(f17)
   watergirl.collide(f18)
   watergirl.collide(yellowBarSprite)
}











