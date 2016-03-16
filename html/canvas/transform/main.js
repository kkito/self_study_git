window.onload = function(){
    main();
}

/*
 *
 *
 *
 *
 */
function main(){
    console.log("start ....")
    // code here
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d")

    //ctx.setTransform(1,0,0,1,0,0)
    var angle = -15*Math.PI / 180;
    ctx.rotate(angle)

    ctx.fillStyle = "red"
    ctx.fillRect(2 , 0 , 302 , 300)

    ctx.setTransform(1,0,0,1,0,0)
    angle = -15*Math.PI / 180;
    ctx.rotate(angle)

    ctx.fillStyle = "green"
    ctx.fillRect(100 , 100 , 50 , 50)

    ctx.fillStyle = "gray"
    ctx.fillRect(200 , 100 , 50 , 50)
}
