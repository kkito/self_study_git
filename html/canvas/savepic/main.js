window.onload = function(){
    main();
}

function savepic(){
    var theCanvas = document.getElementById("canvas");
    console.log(theCanvas.toDataURL())
    window.open(theCanvas.toDataURL(),"canvasImage","left=0,top=0,width=" + theCanvas.width + ",height=" + theCanvas.height +",toolbar=0,resizable=0");
}

function main(){
    console.log("start ....")
    // code here
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d")
    // text
    ctx.fillStyle = "#000"
    ctx.fillText("Hello world!" , 200 , 200)


    //stroke rect
    ctx.strokeStyle="#FF00F0"
    ctx.strokeRect(5 , 5 , 40  ,40)
}
