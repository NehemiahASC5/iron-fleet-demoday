let rectArray = []
function addRect(){
    let singleRect = {
        xPos:500,
        yPos:250
    }
    rectArray.push(singleRect)
}
let ellipseMove = 0
let ellipseTrue = 0
let ellipseMove1 = 0
let ellipseTrue1= 0
let ellipseMove2 = 0
let ellipseTrue2 = 0
function playerShip(){
    //rect(rectArray[i].xPos,rectArray[i].yPos,50,50)
    // rect(500,250,50,100)
    fill(80)
    imageMode(CENTER)
    push();
    //translate(500, 250);
    translate(rectArray[i].xPos, rectArray[i].yPos);
    if(keyIsDown(ENTER)){
        ellipseTrue = 1
        bulletRand = Math.random()*1
        fill("yellow")
        stroke("yellow")
        if(i==8 && ellipseMove < 10){
            ellipse(40,0,20,20)
            ellipse(60,0,20,20)
            ellipse(-50,0,20,20)
        }
        fill(80)
        stroke(20)
    }
    fill(80)
    if(keyIsDown(ENTER)){
        ellipseTrue1 = 1
        bulletRand1 = Math.random()*1
    }
    if(keyIsDown(ENTER)){
        ellipseTrue2 = 1
        bulletRand2 = Math.random()*1
    }
    //rotate(radians(rotatePlayer));
    scale(.5)
    //image(testGIf, 0, 0)
    //rect(25,-15,50,25)
    quad(50,-15,75,-14,75,9,50,10)//bridge
    // quad(25,-15,-25,-15,-25,10,25,10)
    //rect(-25,-15,50,25)
    if(i<2){
        quad(-120,-12,-75,-15,-75,10,-120,8)//stern2
    }
    if(i<3){
        quad(50,-15,-25,-15,-25,10,50,10)//behindBridge1
        quad(-140,-8,-120,-12,-120,8,-140,4)//stern
        quad(-75,-15,-25,-15,-25,10,-75,10)//stern1
    }
    if(i<3){
        quad(50,-12,-50,-12,-50,7,50,7)//behindBridge2
    }
    if(i<4){
        //rect(-75,-15,50,25)
        //rect(75,-15,50,25)
        quad(100,-12,130,-10,130,5,100,8)//behindBow
        quad(130,-10,160,-4,160,0,130,5)//bow
        //triangle(75,-15,130,0,75,10)
    }
    if(i<7){
        quad(70,-14,100,-12,100,8,70,9)//bridgeFront
    }
    ellipse(30,-3,-20,-20)
    ellipse(-10,-3,-20,-20)
    pop();
    fill("yellow")
    stroke("orange")
    if(ellipseTrue != 1){
        ellipseX = rectArray[i].xPos
        ellipseKeepX = 0
        if(keyIsDown(LEFT_ARROW)){
            ellipseKeepX = 0.1
        }
        if(keyIsDown(RIGHT_ARROW)){
            ellipseKeepX = -0.1
        }
    }
    if(ellipseTrue != 1){
        ellipseY = rectArray[i].yPos
    }
    if(ellipseTrue == 1){
        ellipse(ellipseX+60,ellipseY,5,5)
        if(bulletRand < .5){
            bulletRand = .8
        }
        ellipseY = ellipseY - bulletRand
        ellipseX = ellipseX - ellipseKeepX
        ellipseMove++
        if(ellipseMove > 380){
            fill(120+50,126+50,214+50)
            ellipse(ellipseX,ellipseY,200,200)
            fill("yellow")
            ellipseTrue = 0
            ellipseX = 0
            ellipseY = 0
            ellipseMove = 0
        }
    }

    if(ellipseTrue1 != 1){
        ellipseX1 = rectArray[i].xPos
        ellipseKeepX1 = 0
        if(keyIsDown(LEFT_ARROW)){
            ellipseKeepX1 = 0.1
        }
        if(keyIsDown(RIGHT_ARROW)){
            ellipseKeepX1 = -0.1
        }
    }
    if(ellipseTrue1 != 1){
        ellipseY1 = rectArray[i].yPos
    }
    if(ellipseTrue1 == 1){
        ellipse(ellipseX1-50,ellipseY1,5,5)
        if(bulletRand1 < .5){
            bulletRand1 = .8
        }
        ellipseY1 = ellipseY1 - bulletRand1
        ellipseX1 = ellipseX1 - ellipseKeepX1
        ellipseMove1++
        if(ellipseMove1 > 380){
            ellipseTrue1 = 0
            ellipseX1 = 0
            ellipseY1 = 0
            ellipseMove1 = 0
        }
    }

    if(ellipseTrue2 != 1){
        ellipseX2 = rectArray[i].xPos
        ellipseKeepX2 = 0
        if(keyIsDown(LEFT_ARROW)){
            ellipseKeepX2 = 0.1
        }
        if(keyIsDown(RIGHT_ARROW)){
            ellipseKeepX2 = -0.1
        }
    }
    if(ellipseTrue2 != 1){
        ellipseY2 = rectArray[i].yPos
    }
    if(ellipseTrue2 == 1){
        ellipse(ellipseX2+40,ellipseY2,5,5)
        if(bulletRand2 < .5){
            bulletRand2 = .8
        }
        ellipseY2 = ellipseY2 - bulletRand2
        ellipseX2 = ellipseX2 - ellipseKeepX2
        ellipseMove2++
        if(ellipseMove2 > 380){
            ellipseTrue2 = 0
            ellipseX2 = 0
            ellipseY2 = 0
            ellipseMove2 = 0
        }
    }
    fill(80)
    stroke(20)
}
let rectArray1 = []
function addRect1(){
    let singleRect1 = {
        xPos:500,
        yPos:200
    }
    rectArray1.push(singleRect1)
}
let moveLimit1 = 0
function ship1(){
    //rect(rectArray[i].xPos,rectArray[i].yPos,50,50)
    // rect(500,250,50,100)
    imageMode(CENTER)
    push();
    //translate(500, 250);
    moveLimit1++
    translate(rectArray1[i].xPos, rectArray1[i].yPos)
    for(let a=0;a<rectCount;a++){
        if(moveLimit1 < 2000){
            rectArray1[a].xPos = rectArray1[a].xPos + (-0.1 - a/2000)
            rectArray1[a].yPos = rectArray1[a].yPos - (-0.1 - a/2000)
        }
        //rectArray1[a].xPos = rectArray1[a].xPos - randVar/100
    }
    //botMove = botMove - (0.01 + i/100)
    //rotate(radians(rotatePlayer));
    scale(.5)
    //image(testGIf, 0, 0)
    //rect(25,-15,50,25)
    quad(50,-15,75,-14,75,9,50,10)//bridge
    // quad(25,-15,-25,-15,-25,10,25,10)
    //rect(-25,-15,50,25)
    if(i<2){
        quad(-120,-12,-75,-15,-75,10,-120,8)//stern2
    }
    if(i<3){
        quad(50,-15,-25,-15,-25,10,50,10)//behindBridge1
        quad(-140,-8,-120,-12,-120,8,-140,4)//stern
        quad(-75,-15,-25,-15,-25,10,-75,10)//stern1
    }
    if(i<3){
        quad(50,-12,-50,-12,-50,7,50,7)//behindBridge2
    }
    if(i<4){
        //rect(-75,-15,50,25)
        //rect(75,-15,50,25)
        quad(100,-12,130,-10,130,5,100,8)//behindBow
        quad(130,-10,160,-4,160,0,130,5)//bow
        //triangle(75,-15,130,0,75,10)
    }
    if(i<7){
        quad(70,-14,100,-12,100,8,70,9)//bridgeFront
    }
    ellipse(30,-3,-20,-20)
    ellipse(-10,-3,-20,-20)
    pop();
}
let rectArray2 = []
function addRect2(){
    let singleRect2 = {
        xPos:500,
        yPos:260
    }
    rectArray2.push(singleRect2)
}
let moveLimit2 = 0
function ship2(){
    //rect(rectArray[i].xPos,rectArray[i].yPos,50,50)
    // rect(500,250,50,100)
    imageMode(CENTER)
    push();
    //translate(500, 250);
    translate(rectArray2[i].xPos, rectArray2[i].yPos)
    moveLimit2++
    for(let a=0;a<rectCount;a++){
        if(moveLimit2 < 2000){
            rectArray2[a].xPos = rectArray2[a].xPos + (0.1 + a/2000)
            rectArray2[a].yPos = rectArray2[a].yPos - (-0.1 - a/2000)
        }
        //rectArray1[a].xPos = rectArray1[a].xPos - randVar/100
    }
    //botMove = botMove - (0.01 + i/100)
    //rotate(radians(rotatePlayer));
    scale(.5)
    //image(testGIf, 0, 0)
    //rect(25,-15,50,25)
    quad(50,-15,75,-14,75,9,50,10)//bridge
    // quad(25,-15,-25,-15,-25,10,25,10)
    //rect(-25,-15,50,25)
    if(i<2){
        quad(-120,-12,-75,-15,-75,10,-120,8)//stern2
    }
    if(i<3){
        quad(50,-15,-25,-15,-25,10,50,10)//behindBridge1
        quad(-140,-8,-120,-12,-120,8,-140,4)//stern
        quad(-75,-15,-25,-15,-25,10,-75,10)//stern1
    }
    if(i<3){
        quad(50,-12,-50,-12,-50,7,50,7)//behindBridge2
    }
    if(i<4){
        //rect(-75,-15,50,25)
        //rect(75,-15,50,25)
        quad(100,-12,130,-10,130,5,100,8)//behindBow
        quad(130,-10,160,-4,160,0,130,5)//bow
        //triangle(75,-15,130,0,75,10)
    }
    if(i<7){
        quad(70,-14,100,-12,100,8,70,9)//bridgeFront
    }
    ellipse(30,-3,-20,-20)
    ellipse(-10,-3,-20,-20)
    pop();
}
let rectArray3 = []
function addRect3(){
    let singleRect3 = {
        xPos:500,
        yPos:280
    }
    rectArray3.push(singleRect3)
}
let moveLimit3 = 0
function ship3(){
    //rect(rectArray[i].xPos,rectArray[i].yPos,50,50)
    // rect(500,250,50,100)
    imageMode(CENTER)
    push();
    //translate(500, 250);
    translate(rectArray3[i].xPos, rectArray3[i].yPos)
    moveLimit3++
    for(let a=0;a<rectCount;a++){
        if(moveLimit3 < 2000){
            //rectArray3[a].xPos = rectArray3[a].xPos + (0.01 + a/100000)
            rectArray3[a].yPos = rectArray3[a].yPos - (-0.1 - a/2000)
        }
        //rectArray1[a].xPos = rectArray1[a].xPos - randVar/100
    }
    //botMove = botMove - (0.01 + i/100)
    //rotate(radians(rotatePlayer));
    scale(.5)
    //image(testGIf, 0, 0)
    //rect(25,-15,50,25)
    quad(50,-15,75,-14,75,9,50,10)//bridge
    // quad(25,-15,-25,-15,-25,10,25,10)
    //rect(-25,-15,50,25)
    if(i<2){
        quad(-120,-12,-75,-15,-75,10,-120,8)//stern2
    }
    if(i<3){
        quad(50,-15,-25,-15,-25,10,50,10)//behindBridge1
        quad(-140,-8,-120,-12,-120,8,-140,4)//stern
        quad(-75,-15,-25,-15,-25,10,-75,10)//stern1
    }
    if(i<3){
        quad(50,-12,-50,-12,-50,7,50,7)//behindBridge2
    }
    if(i<4){
        //rect(-75,-15,50,25)
        //rect(75,-15,50,25)
        quad(100,-12,130,-10,130,5,100,8)//behindBow
        quad(130,-10,160,-4,160,0,130,5)//bow
        //triangle(75,-15,130,0,75,10)
    }
    if(i<7){
        quad(70,-14,100,-12,100,8,70,9)//bridgeFront
    }
    ellipse(30,-3,-20,-20)
    ellipse(-10,-3,-20,-20)
    pop();
}
let enemyArray1 = []
function addEnemy1(){
    let singleEnemy1 = {
        xPos:600,
        yPos:300
    }
    enemyArray1.push(singleEnemy1)
}
let moveLimitEnemy1 = 0
function enemy1(){
    //rect(rectArray[i].xPos,rectArray[i].yPos,50,50)
    // rect(500,250,50,100)
    fill(80)
    imageMode(CENTER)
    push();
    //translate(500, 250);
    moveLimitEnemy1++
    translate(enemyArray1[i].xPos, enemyArray1[i].yPos)
    for(let a=0;a<rectCount;a++){
        if(moveLimitEnemy1 < 2000){
            enemyArray1[a].xPos = enemyArray1[a].xPos - (-0.1 - a/2000)
            enemyArray1[a].yPos = enemyArray1[a].yPos + (-0.1 - a/2000)
        }
        //rectArray1[a].xPos = rectArray1[a].xPos - randVar/100
    }
    //botMove = botMove - (0.01 + i/100)
    //rotate(radians(rotatePlayer));
    scale(.5)
    //image(testGIf, 0, 0)
    //rect(25,-15,50,25)
    quad(50,-15,75,-14,75,9,50,10)//bridge
    // quad(25,-15,-25,-15,-25,10,25,10)
    //rect(-25,-15,50,25)
    if(i<2){
        quad(-120,-12,-75,-15,-75,10,-120,8)//stern2
    }
    if(i<3){
        quad(50,-15,-25,-15,-25,10,50,10)//behindBridge1
        quad(-140,-8,-120,-12,-120,8,-140,4)//stern
        quad(-75,-15,-25,-15,-25,10,-75,10)//stern1
    }
    if(i<3){
        quad(50,-12,-50,-12,-50,7,50,7)//behindBridge2
    }
    if(i<4){
        //rect(-75,-15,50,25)
        //rect(75,-15,50,25)
        quad(100,-12,130,-10,130,5,100,8)//behindBow
        quad(130,-10,160,-4,160,0,130,5)//bow
        //triangle(75,-15,130,0,75,10)
    }
    if(i<7){
        quad(70,-14,100,-12,100,8,70,9)//bridgeFront
    }
    ellipse(30,-3,-20,-20)
    ellipse(-10,-3,-20,-20)
    pop();
}
let enemyArray2 = []
function addEnemy2(){
    let singleEnemy2 = {
        xPos:400,
        yPos:270
    }
    enemyArray2.push(singleEnemy2)
}
let moveLimitEnemy2 = 0
function enemy2(){
    //rect(rectArray[i].xPos,rectArray[i].yPos,50,50)
    // rect(500,250,50,100)
    fill(80)
    imageMode(CENTER)
    push();
    //translate(500, 250);
    moveLimitEnemy2++
    translate(enemyArray2[i].xPos, enemyArray2[i].yPos)
    for(let a=0;a<rectCount;a++){
        if(moveLimitEnemy2 < 2000){
            enemyArray2[a].xPos = enemyArray2[a].xPos + (-0.1 - a/2000)
            enemyArray2[a].yPos = enemyArray2[a].yPos + (-0.1 - a/2000)
        }
        //rectArray1[a].xPos = rectArray1[a].xPos - randVar/100
    }
    //botMove = botMove - (0.01 + i/100)
    //rotate(radians(rotatePlayer));
    scale(.5)
    //image(testGIf, 0, 0)
    //rect(25,-15,50,25)
    quad(50,-15,75,-14,75,9,50,10)//bridge
    // quad(25,-15,-25,-15,-25,10,25,10)
    //rect(-25,-15,50,25)
    if(i<2){
        quad(-120,-12,-75,-15,-75,10,-120,8)//stern2
    }
    if(i<3){
        quad(50,-15,-25,-15,-25,10,50,10)//behindBridge1
        quad(-140,-8,-120,-12,-120,8,-140,4)//stern
        quad(-75,-15,-25,-15,-25,10,-75,10)//stern1
    }
    if(i<3){
        quad(50,-12,-50,-12,-50,7,50,7)//behindBridge2
    }
    if(i<4){
        //rect(-75,-15,50,25)
        //rect(75,-15,50,25)
        quad(100,-12,130,-10,130,5,100,8)//behindBow
        quad(130,-10,160,-4,160,0,130,5)//bow
        //triangle(75,-15,130,0,75,10)
    }
    if(i<7){
        quad(70,-14,100,-12,100,8,70,9)//bridgeFront
    }
    ellipse(30,-3,-20,-20)
    ellipse(-10,-3,-20,-20)
    pop();
}
let enemyArray3 = []
function addEnemy3(){
    let singleEnemy3 = {
        xPos:500,
        yPos:300
    }
    enemyArray3.push(singleEnemy3)
}
let moveLimitEnemy3 = 0
function enemy3(){
    //rect(rectArray[i].xPos,rectArray[i].yPos,50,50)
    // rect(500,250,50,100)
    fill(80)
    imageMode(CENTER)
    push();
    //translate(500, 250);
    moveLimitEnemy3++
    translate(enemyArray3[i].xPos, enemyArray3[i].yPos)
    for(let a=0;a<rectCount;a++){
        if(moveLimitEnemy3 < 2000){
            //enemyArray3[a].xPos = enemyArray3[a].xPos + (-0.01 - a/100000)
            enemyArray3[a].yPos = enemyArray3[a].yPos + (-0.1 - a/2000)
        }
        //rectArray1[a].xPos = rectArray1[a].xPos - randVar/100
    }
    //botMove = botMove - (0.01 + i/100)
    //rotate(radians(rotatePlayer));
    scale(.5)
    //image(testGIf, 0, 0)
    //rect(25,-15,50,25)
    quad(50,-15,75,-14,75,9,50,10)//bridge
    // quad(25,-15,-25,-15,-25,10,25,10)
    //rect(-25,-15,50,25)
    if(i<2){
        quad(-120,-12,-75,-15,-75,10,-120,8)//stern2
    }
    if(i<3){
        quad(50,-15,-25,-15,-25,10,50,10)//behindBridge1
        quad(-140,-8,-120,-12,-120,8,-140,4)//stern
        quad(-75,-15,-25,-15,-25,10,-75,10)//stern1
    }
    if(i<3){
        quad(50,-12,-50,-12,-50,7,50,7)//behindBridge2
    }
    if(i<4){
        //rect(-75,-15,50,25)
        //rect(75,-15,50,25)
        quad(100,-12,130,-10,130,5,100,8)//behindBow
        quad(130,-10,160,-4,160,0,130,5)//bow
        //triangle(75,-15,130,0,75,10)
    }
    if(i<7){
        quad(70,-14,100,-12,100,8,70,9)//bridgeFront
    }
    ellipse(30,-3,-20,-20)
    ellipse(-10,-3,-20,-20)
    pop();
}
let test = 0
let rotatePlayer = 0
let rectCount = 10
function setup(){
    createCanvas(1000,500)
    for(i=0;i<rectCount;i++){
        addRect()
        addRect1()
        addRect2()
        addRect3()
        addEnemy1()
        addEnemy2()
        addEnemy3()
    }
    console.log(rectArray)
    // const options = {
    //     method: "GET",
    //     mode: "no-cors"
    // };
    //fetch(url, options).then(function(response){
    
    //});

    // img = loadImage("Earth.png")
    // img1 = loadImage("WaterPlain0012_2_download600.jpg")
    // testGIf = loadImage("main-qimg-6fd13ed41d21cf8fb48a246b5fd933a3.gif")

}
let yPar1 = 320
let xPar1 = 500
let yPar2 = 320
let xPar2 = 500

function draw(){
    background(120,126,214)
    // push();
    // translate(200, 200);
    // rotate(radians(0));
    // scale(1)
    // image(img1,0,0,img1.width*2.8,img1.height*2)
    // pop();
    
    //Displays the image at its actual size at point (0,0)
    //image(img1, 0, 0);
    // Displays the image at point (0, height/2) at half size
    //image(img, 0, height/2, img.width/2, img.height/2);
    // image(img1, 0, 0, 1000, 500)

    // push();
    // imageMode(CENTER)
    // translate(200, 200);
    // rotate(radians(30));
    // scale(1)
    //0.05
    // image(testGIf, 0, 0, testGIf.width, 30)
    // pop();
    // //push();
    // translate(200, 200);
    // rotate(radians(180));
    // scale(0.05)
    // pop()
    // image(img, 0, 0)
    // pop();
    // push();
    // translate(200, 200);
    // rotate(radians(testRot));
    // scale(0.05)
    // image(img, 0, -img.height)
    // pop();

    //testRot++
    //image(img1, 0, 0, 1000, 500)
    
    //rotate(PI / 3.0);
    //rect(0,0,50,50)
    //image(img,500,250,img.width/10,img.height/10)


    // quad(xPar1,yPar1,xPar1+100,yPar1,xPar2+90,yPar2-10,xPar2+10,yPar2-10)
    // quad(xPar1+100,yPar1,xPar1+100,yPar1-100,xPar2+90,yPar2-90,xPar2+90,yPar2-10)
    // rect(xPar1,yPar1-100,50,50)
    fill(255)
    // rect(xPar1,yPar1,50,50)
    // rect(xPar2,yPar2,50,50)
    stroke(20)
    for(i=0;i<rectCount;i++){
        if(keyIsDown(UP_ARROW)){
            yPar1 = yPar1-1.5
            yPar2 = yPar2-1.3
    
            rectArray[i].yPos = rectArray[i].yPos + (-1 - i/150)
        }
        if(keyIsDown(DOWN_ARROW)){
            yPar1 = yPar1+1.5
            yPar2 = yPar2+1.3

            rectArray[i].yPos = rectArray[i].yPos - (-1 - i/150)
        }
        if(keyIsDown(LEFT_ARROW)){
            xPar1 = xPar1-1.5
            xPar2 = xPar2-1.3

            rectArray[i].xPos = rectArray[i].xPos - (1 + i/150)
            rotatePlayer = rotatePlayer + 0.01
        }
        if(keyIsDown(RIGHT_ARROW)){
            xPar1 = xPar1+1.5
            xPar2 = xPar2+1.3

            rectArray[i].xPos = rectArray[i].xPos + (1 + i/150)
            rotatePlayer = rotatePlayer - 0.01
        }
    }
    for(i=0;i<rectCount;i++){
        playerShip()
        ship1()
        ship2()
        ship3()
        enemy1()
        enemy2()
        enemy3()
    }
        

        // if(keyIsDown(UP_ARROW)){
        //     yPar1 = yPar1-1.5
        //     yPar2 = yPar2-1.3

        //     rectArray[i].xPos = i * 10
        // }
        // if(keyIsDown(DOWN_ARROW)){
        //     yPar1 = yPar1+1.5
        //     yPar2 = yPar2+1.3

        //     rectArray[i].xPos = i / 10
        // }
        // if(keyIsDown(LEFT_ARROW)){
        //     xPar1 = xPar1-1.5
        //     xPar2 = xPar2-1.3
        //     console.log(rectArray)
        // }
        // if(keyIsDown(RIGHT_ARROW)){
        //     xPar1 = xPar1+1.5
        //     xPar2 = xPar2+1.3
        // }
    }
    // if(keyIsDown(UP_ARROW)){
    //     yPar1 = yPar1-1.5
    //     yPar2 = yPar2-1.3

    //     rectArray.xPos = rectArray.xPos * 10
    // }
    // if(keyIsDown(DOWN_ARROW)){
    //     yPar1 = yPar1+1.5
    //     yPar2 = yPar2+1.3
    // }
    // if(keyIsDown(LEFT_ARROW)){
    //     xPar1 = xPar1-1.5
    //     xPar2 = xPar2-1.3
    // }
    // if(keyIsDown(RIGHT_ARROW)){
    //     xPar1 = xPar1+1.5
    //     xPar2 = xPar2+1.3
    // }
//}

// let pointsArray = []
// let pointIncrease = 0
// function addPoint(){
//     let singlePoint = {
//         distance:250 + pointIncrease,
//         xPos:100
//     }
//     pointsArray.push(singlePoint)
// }
// function setup(){
//     createCanvas(1000,500)
// }
// let drawLine = 500
// let parallaxScale = 0
// // let mousePerspective = 0
// function draw(){
//     noStroke()
//     background("black")
//     for(i=0;i<drawLine;i++){
//         pointIncrease = pointIncrease + 1 //3
//         addPoint()
//     }/*
//     for(i=0;i<15;i++){
//         pointsArray[i].distance = pointsArray[i].distance + 1
//     }*/
//     fill("green")
//     /*
//     for(i=0;i<drawLine;i++){
//         if(mouseX < 500){
//             xPos = mouseX
//         }
//         if(mouseX >= 500){
//             xPos = mouseX
//         }
//     }*/
//     //xPos = mouseX
//     for(i=0;i<drawLine;i++){
//         /*
//         if(pointsArray[i].distance > 300){
//             xPos = 100
//         }*/
//         // if(mouseX < 500){
//         //     mouseX = mouseX*-1
//         // }
        
//         if(keyIsDown(RIGHT_ARROW)){
//             pointsArray[i].xPos = pointsArray[i].xPos + (pointsArray[i].distance/50)
//         }
//         if(keyIsDown(LEFT_ARROW)){
//             pointsArray[i].xPos = pointsArray[i].xPos - (pointsArray[i].distance/50)
//         }

//         // parallaxScale = pointsArray[i].distance / 500
//         // xPos = parallaxScale*mouseX
//         // xPos = xPos + 500
//         // mousePerspective = pointsArray[i].distance / 250
//         // xPos = mousePerspective*mouseX
//         rect(pointsArray[i].xPos * 1.5,pointsArray[i].distance,3,3)
//         // rect(pointsArray[i].xPos * 1.2,pointsArray[i].distance,3,3)
//         // rect(pointsArray[i].xPos * 1,pointsArray[i].distance,3,3)
//     }
// }