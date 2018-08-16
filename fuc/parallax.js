function setup(){
    createCanvas(1000,500)
}
let yParr1 = 320
let xParr1 = 500
let yParr2 = 320
let xParr2 = 500
function draw(){
    background("green")
    quad(xParr1,yParr1,xParr1+100,yParr1,xParr2+90,yParr2-10,xParr2+10,yParr2-10)
    quad(xParr1+100,yParr1,xParr1+100,yParr1-100,xParr2+90,yParr2-90,xParr2+90,yParr2-10)
    rect(xParr1,yParr1-100,50,50)
    if(keyIsDown(UP_ARROW)){
        yParr1 = yParr1-1.5
        yParr2 = yParr2-1.3
    }
    if(keyIsDown(DOWN_ARROW)){
        yParr1 = yParr1+1.5
        yParr2 = yParr2+1.3
    }
    if(keyIsDown(LEFT_ARROW)){
        xParr1 = xParr1-1.5
        xParr2 = xParr2-1.3
    }
    if(keyIsDown(RIGHT_ARROW)){
        xParr1 = xParr1+1.5
        xParr2 = xParr2+1.3
    }
}