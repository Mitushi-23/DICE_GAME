var val1=0;
var val=0;
canvas = document.getElementById("mycanvas");
var ctx1 = canvas.getContext("2d");
console.log(val);
canvas1 = document.getElementById("mycanvas1");
var ctx = canvas1.getContext("2d");
var dotsRadius = 40;
var gapy =150;
var gapx=150;
var dotOffsetLeft= 160;
var dotOffsetTop = 80;
var x = canvas1.width / 2;
var y = canvas1.height - 30;

var dots6 = [];
for (c = 0; c < 3; c++) {
    dots6[c] = [];
    for (r = 0; r < 3; r++) {
        dots6[c][r] = { x: 0, y: 0, status: 1 };

    }
}

function Drawdots5() {
    for (c = 0; c < 3; c++) {
         for (r = 0; r <=1; r++) {
                   if(c==1 && r==1)
                   {
                    ctx.beginPath();
                    ctx.arc(250,235,40,0, Math.PI*2);
                    ctx.fillStyle = "white";
                    ctx.fill();
                    ctx.closePath();  
                   }
                   else
                   if(c==1 && (r==2 || r==0))
                   {
                       ctx.beginPath();
                       ctx.closePath();
                   }
                   else
                   if(c!=1)
                   {
                    if (dots6[c][r].status == 1) {
                        var dotsX = (r * (dotsRadius + gapx+50)) + dotOffsetLeft-30;
                        var dotsY = (c * (dotsRadius + gapy-30)) +dotOffsetTop+5;
                        dots6[r][c].x = dotsX;
                        dots6[r][c].y = dotsY;
                   ctx.beginPath();
                   ctx.arc(dotsX, dotsY , dotsRadius , 0 , Math.PI * 2);
                   ctx.fillStyle = "white";
                   ctx.fill();
                   ctx.closePath();
              }
         }
        }
    }
}

function Drawdots6() {
    for (c = 0; c < 2; c++) {
         for (r = 0; r < 3; r++) {
              if (dots6[c][r].status == 1) {
                   var dotsX = (c * (dotsRadius + gapx)) + dotOffsetLeft;
                   var dotsY = (r * (dotsRadius + gapy-20)) +dotOffsetTop-5;
                   dots6[c][r].x = dotsX;
                   dots6[c][r].y = dotsY;
                   ctx.beginPath();
                   ctx.arc(dotsX, dotsY , dotsRadius , 0 , Math.PI * 2);
                   ctx.fillStyle = "white";
                   ctx.fill();
                   ctx.closePath();
              }
         }
    }
}
var dotsRadius4 = 50;
function Drawdots4() {
    for (c = 0; c < 2; c++) {
         for (r = 0; r < 2; r++) {
              if (dots6[c][r].status == 1) {
                   var dotsX = (c * ((dotsRadius4) + (gapx+50))) + (dotOffsetLeft-35);
                   var dotsY = (r * ((dotsRadius4)+ (gapy+50))) +(dotOffsetTop+40);
                   dots6[c][r].x = dotsX;
                   dots6[c][r].y = dotsY;
                   ctx.beginPath();
                   ctx.arc(dotsX, dotsY , dotsRadius4 , 0 , Math.PI * 2);
                   ctx.fillStyle = "white";
                   ctx.fill();
                   ctx.closePath();
              }
         }
    }
}

var dotsRadius2 = 50;
var dotsX=0;
var dotsY=0;
function Drawdots2() {
    for (c = 0; c < 1; c++) {
         for (r = 0; r < 2; r++) {
              if (dots6[c][r].status == 1) {
                    dotsX = (c * ((dotsRadius2) + (gapx))) + (dotOffsetLeft-10);
                    dotsY = (r * ((dotsRadius2)+ (gapy))) +(dotOffsetTop+70);
                   dots6[c][r].x = dotsX;
                   dots6[c][r].y = dotsY;
                   ctx.beginPath();
                   ctx.arc(dotsX, dotsY , dotsRadius2 , 0 , Math.PI * 2);
                   ctx.fillStyle = "white";
                   ctx.fill();
                   ctx.closePath();
                   c=c+1;
              }
         }
    }
}
var dotsRadius3=40;
function Drawdots3() {
    for (c = 0; c < 1; c++) {
         for (r = 0; r < 3; r++) {
              if (dots6[c][r].status == 1) {
                    dotsX = (c * ((dotsRadius3) + (gapx-50))) + (dotOffsetLeft-60);
                    dotsY = (r * ((dotsRadius3)+ (gapy-50))) +(dotOffsetTop+30);
                   dots6[c][r].x = dotsX;
                   dots6[c][r].y = dotsY;
                   ctx.beginPath();
                   ctx.arc(dotsX, dotsY , dotsRadius3 , 0 , Math.PI * 2);
                   ctx.fillStyle = "white";
                   ctx.fill();
                   ctx.closePath();
                   c=c+1;
              }
         }
    }
}

function Drawdots1()
{
    ctx.beginPath();
    ctx.arc(250,250,80,0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
 val1 = Math.floor(Math.random() * 6)+1;
// console.log(val1);
if(val1== 6)
{
  Drawdots6();
}
else
if(val1==4)
{
  Drawdots4();
}
else
if(val1==2)
{
    Drawdots2();
}
else
if(val1==3)
{
    Drawdots3();
}
else
if(val1==1)
{
    Drawdots1();
}
else
if(val1 == 5)
{
    Drawdots5();
}








canvas2 = document.getElementById("mycanvas2");
var ctx2 = canvas2.getContext("2d");
var dotsRadius = 40;
var gapy =150;
var gapx=150;
var dotOffsetLeft= 160;
var dotOffsetTop = 80;
var x = canvas2.width / 2;
var y = canvas2.height - 30;

var dots6 = [];
for (c = 0; c < 3; c++) {
    dots6[c] = [];
    for (r = 0; r < 3; r++) {
        dots6[c][r] = { x: 0, y: 0, status: 1 };

    }
}
function drawdots6() {
    for (c = 0; c < 2; c++) {
         for (r = 0; r < 3; r++) {
              if (dots6[c][r].status == 1) {
                   var dotsX = (c * (dotsRadius + gapx)) + dotOffsetLeft;
                   var dotsY = (r * (dotsRadius + gapy-20)) +dotOffsetTop-5;
                   dots6[c][r].x = dotsX;
                   dots6[c][r].y = dotsY;
                   ctx2.beginPath();
                   ctx2.arc(dotsX, dotsY , dotsRadius , 0 , Math.PI * 2);
                   ctx2.fillStyle = "white";
                   ctx2.fill();
                   ctx2.closePath();
              }
         }
    }
}

var dotsRadius4 = 50;
function drawdots4() {
    for (c = 0; c < 2; c++) {
         for (r = 0; r < 2; r++) {
              if (dots6[c][r].status == 1) {
                   var dotsX = (c * ((dotsRadius4) + (gapx+50))) + (dotOffsetLeft-35);
                   var dotsY = (r * ((dotsRadius4)+ (gapy+50))) +(dotOffsetTop+40);
                   dots6[c][r].x = dotsX;
                   dots6[c][r].y = dotsY;
                   ctx2.beginPath();
                   ctx2.arc(dotsX, dotsY , dotsRadius4 , 0 , Math.PI * 2);
                   ctx2.fillStyle = "white";
                   ctx2.fill();
                   ctx2.closePath();
              }
         }
    }
}
var dotsRadius2 = 50;
function drawdots2() {
    for (c = 0; c < 1; c++) {
         for (r = 0; r < 2; r++) {
              if (dots6[c][r].status == 1) {
                    dotsX = (c * ((dotsRadius2) + (gapx))) + (dotOffsetLeft-10);
                    dotsY = (r * ((dotsRadius2)+ (gapy))) +(dotOffsetTop+70);
                   dots6[c][r].x = dotsX;
                   dots6[c][r].y = dotsY;
                   ctx2.beginPath();
                   ctx2.arc(dotsX, dotsY , dotsRadius2 , 0 , Math.PI * 2);
                   ctx2.fillStyle = "white";
                   ctx2.fill();
                   ctx2.closePath();
                   c=c+1;
              }
         }
    }
}

var dotsRadius3=40;
function drawdots3() {
    for (c = 0; c < 1; c++) {
         for (r = 0; r < 3; r++) {
              if (dots6[c][r].status == 1) {
                    dotsX = (c * ((dotsRadius3) + (gapx-50))) + (dotOffsetLeft-60);
                    dotsY = (r * ((dotsRadius3)+ (gapy-50))) +(dotOffsetTop+30);
                   dots6[c][r].x = dotsX;
                   dots6[c][r].y = dotsY;
                   ctx2.beginPath();
                   ctx2.arc(dotsX, dotsY , dotsRadius3 , 0 , Math.PI * 2);
                   ctx2.fillStyle = "white";
                   ctx2.fill();
                   ctx2.closePath();
                   c=c+1;
              }
         }
    }
}

function drawdots5() {
    for (c = 0; c < 3; c++) {
         for (r = 0; r <=1; r++) {
                   if(c==1 && r==1)
                   {
                    ctx2.beginPath();
                    ctx2.arc(250,235,40,0, Math.PI*2);
                    ctx2.fillStyle = "white";
                    ctx2.fill();
                    ctx2.closePath();  
                   }
                   else
                   if(c==1 && (r==2 || r==0))
                   {
                       ctx2.beginPath();
                       ctx2.closePath();
                   }
                   else
                   if(c!=1)
                   {
                    if (dots6[c][r].status == 1) {
                        var dotsX = (r * (dotsRadius + gapx+50)) + dotOffsetLeft-30;
                        var dotsY = (c * (dotsRadius + gapy-30)) +dotOffsetTop+5;
                        dots6[r][c].x = dotsX;
                        dots6[r][c].y = dotsY;
                   ctx2.beginPath();
                   ctx2.arc(dotsX, dotsY , dotsRadius , 0 , Math.PI * 2);
                   ctx2.fillStyle = "white";
                   ctx2.fill();
                   ctx2.closePath();
              }
         }
        }
    }
}


function drawdots1()
{
    ctx2.beginPath();
    ctx2.arc(250,250,80,0, Math.PI*2);
    ctx2.fillStyle = "white";
    ctx2.fill();
    ctx2.closePath();
}

 val = Math.floor(Math.random() * 6)+1;
// console.log(val);
if(val == 6)
{
  drawdots6();
}
else
if(val==4)
{
  drawdots4();
}
else
if(val==2)
{
    drawdots2();
}
else
if(val==3)
{
    drawdots3();
}
else
if(val==1)
{
    drawdots1();
}
else
if(val == 5)
{
    drawdots5();
}

console.log(val1);
console.log(val);







console.log(val1);
if(val1 > val)
{
    ctx1.font = "100px Arial";
    ctx1.fillStyle = "blue";
    ctx1.fillText("X WINS",30,100); 
}
else
if(val > val1)
{
    ctx1.font = "100px Arial";
    ctx1.fillStyle = "blue";
    ctx1.fillText("Y WINS",30,100); 
//     alert("Y WINS");
}
else
{
    ctx1.font = "100px Arial";
    ctx1.fillStyle = "blue";
    ctx1.fillText("DRAW",30,100); 
}
function win(){
    
document.location.reload();
}

