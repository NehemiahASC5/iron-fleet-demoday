let rectArray = []
let test = 0
let roatePlayer = 0
function addRect(){
    let singleRect = {
        xPos:500,
        yPos:250
    }
    rectArray.push(singleRect)
}

let rectCount = 50
function setup(){
    createCanvas(1000,500)
    for(i=0;i<rectCount;i++){
        addRect()
    }
    console.log(rectArray)
    // const options = {
    //     method: "GET",
    //     mode: "no-cors"
    // };
    //fetch(url, options).then(function(response){
    
    //});
                                                                                                                      
    img = loadImage("Earth.png")
    img1 = loadImage("WaterPlain0012_2_download600.jpg")
    testGIf = loadImage("main-qimg-6fd13ed41d21cf8fb48a246b5fd933a3.gif")

}



let yPar1 = 320
let xPar1 = 500
let yPar2 = 320
let xPar2 = 500

function draw(){
    background("green")
    push();
    translate(200, 200);
    rotate(radians(0));
    scale(1)
     image(img1,0,0,img.width,img.height)
    pop();
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
    stroke(180)
    for(i=0;i<rectCount;i++){
        if(keyIsDown(UP_ARROW)){
            yPar1 = yPar1-1.5
            yPar2 = yPar2-1.3
    
            rectArray[i].yPos = rectArray[i].yPos + (-1 - i/500)
        }
        if(keyIsDown(DOWN_ARROW)){
            yPar1 = yPar1+1.5
            yPar2 = yPar2+1.3

            rectArray[i].yPos = rectArray[i].yPos - (-1 - i/500)
        }
        if(keyIsDown(LEFT_ARROW)){
            xPar1 = xPar1-1.5
            xPar2 = xPar2-1.3

            rectArray[i].xPos = rectArray[i].xPos - (1 + i/500)
            roatePlayer = roatePlayer + 0.01
        }
        if(keyIsDown(RIGHT_ARROW)){
            xPar1 = xPar1+1.5
            xPar2 = xPar2+1.3

            rectArray[i].xPos = rectArray[i].xPos + (1 + i/500)
            roatePlayer = roatePlayer - 0.01
        }
    }
    for(i=0;i<rectCount;i++){
        rect(rectArray[i].xPos,rectArray[i].yPos,50,50)

        imageMode(CENTER)
        push();
        //translate(500, 250);
        translate(rectArray[i].xPos, rectArray[i].yPos);
        rotate(radians(roatePlayer));
        scale(1)
        //image(testGIf, 0, 0)
        rect(-25,-25,50,50)
        rect(-100,-25,50,50)
        pop();


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
}

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