var canvas = document.getElementById("cc");
var ctx = canvas.getContext("2d");
var color = "#000000", width = 3, lpx, lpy;

var getPos = function(e, coord){
    if(coord === "x"){
        return e.touches[0].clientX - canvas.offsetLeft;
    }else{
        return e.touches[0].clientY - canvas.offsetTop;
    }
}
var my_touchstart = function(e){
    lpx = getPos(e, "x");
    lpy = getPos(e, "y");
}
canvas.addEventListener("touchstart", my_touchstart);
var my_touchmove = function(e){
    var cpx = getPos(e, "x");
    var cpy = getPos(e, "y");
    ctx.beginPath();
    ctx.strokeStyle = document.getElementById("colorI").value;
    ctx.lineWidth = document.getElementById("widthI").value;
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();
    lpx = cpx;
    lpy = cpy;
}
canvas.addEventListener("touchmove", my_touchmove);
var clearCanvas = function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
var sw = screen.width;
var sh = screen.height;
if(sw<992){
    canvas.width = sw - 50;
    canvas.height = sh- 200;
}