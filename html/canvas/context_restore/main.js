window.onload = function(){
    main();
}

var ctx;
var start_x = 0;
function main(){
    console.log("start ....")
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d")
}

function drawRect(){
    ctx.strokeStyle = "#FF0FF0";
    ctx.strokeRect(start_x , start_x , 50 , 50);
    start_x += 15;
    ctx.save();
}

function restoreRect(){
    ctx.restore();
}

function rotate(){
    ctx.rotate(20*Math.PI/180);
    // canvas.rotate(90);  
}
