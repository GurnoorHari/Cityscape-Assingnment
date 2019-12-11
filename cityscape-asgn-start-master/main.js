// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Make a row of blue rectangles using a loop

// Repeat this for loop 10 times, but change the y-value after each row is drawn

//outer for loop makes all the rows
for(let j = 0; j < 6; j++){
    //for loop to make a single row
    for(let i = 0; i < 4; i++){
    console.log('j: ' + j + ' i: ' + i);
    ctx.fillStyle = 'white';
    ctx.fillRect(35 + i*25 ,205 + j*25,10,10);
    }
    }

    for(let b = 0; b < 6; b++){
        //for loop to make a single row
        for(let c = 0; c < 4; c++){
        console.log('b: ' + b + ' c: ' + c);
        ctx.fillStyle = 'white';
        ctx.fillRect(10 + 20 ,380 + b*45,100,20);
        }
        }


        for(let l = 0; l < 5; l++){
            //for loop to make a single row
            for(let m = 0; m < 4; m++){
            console.log('l: ' + l + ' m: ' + m);
            ctx.fillStyle = 'white';
            ctx.fillRect(170 + l * 25 ,120 ,10,500);
            }
            }