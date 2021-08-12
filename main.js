const max = 700;

var c1;
var c2;
var c3;

var step = 0;

var a1 = .5;
var a2 = .5;
var a3 = .5;

function sierpinski(x1, y1, x2, y2, x3, y3, level, maxLevel,opacity) {
    if (level < maxLevel) {
        if (level == 0) {
            stroke(255,255)
            triangle(x1, y1, x2, y2, x3, y3)
        }
         
        let a = createVector((x2 + x3) / 2, (y2 + y3) / 2)
        let b = createVector((x1 + x3) / 2, (y1 + y3) / 2)
        let c = createVector((x1 + x2) / 2, (y1 + y2) / 2)

        line(a.x, a.y, b.x, b.y)
        line(a.x, a.y, c.x, c.y)
        line(b.x, b.y, c.x, c.y)
        sierpinski(c.x, c.y, b.x, b.y, x1, y1, level + 1, maxLevel)
        sierpinski(a.x, a.y, c.x, c.y, x2, y2, level + 1, maxLevel)
        sierpinski(b.x, b.y, a.x, a.y, x3, y3, level + 1, maxLevel)
    }



}



function setup() {
    c1 = createVector(400, 50)
    c2 = createVector(50, 700)
    c3 = createVector(750, 700)


    createCanvas(800, 800);
}

function draw() {
    background(220);
    background(0)
    stroke(255)
    noFill()
    strokeWeight(1)
    
    let speed = 0.003;
    switch (step) {
        case 0:
            a1+=speed
            a2-=speed
            a3-=speed
            break;
        case 1:
            a1-=speed
            a2+=speed
            a3-=speed
            break;

        case 2:
            a1-=speed
            a2-=speed
            a3+=speed
            break;
    
        default:
            step = step%3
           
            break;
    }
    if((a1 >=.5 ))// && step == 0)
    {
        a1=0.5
        a2 = 0.5
        a3 = 0.5
        step++
    }

    // //sierpinski(400, sin(frameCount/50)*350+400, 150, 400, 650, 400, 0, 7)
    sierpinski(c1.x, c1.y, lerp(c1.x, c2.x, a1), lerp(c1.y, c2.y, a1), lerp(c1.x, c3.x, a1), lerp(c1.y, c3.y, a1), 0, 6)
    sierpinski(c2.x, c2.y, lerp(c2.x, c3.x, a2), lerp(c2.y, c3.y, a2), lerp(c2.x, c1.x, a2), lerp(c2.y, c1.y, a2), 0, 6)
    sierpinski(c3.x, c3.y, lerp(c3.x, c2.x, a3), lerp(c3.y, c2.y, a3), lerp(c3.x, c1.x, a3), lerp(c3.y, c1.y, a3), 0, 6)
    // ellipse(c1.x,c1.y,10,10)
    // ellipse(c2.x,c2.y,10,10)
    // ellipse(c3.x,c3.y,10,10)


}