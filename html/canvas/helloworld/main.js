window.onload = function(){
    main();
    setTimeout(function(){
        location.reload();
    } , 5000)
}

function main(){
    console.log("start ....")
    // code here
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d")
    ctx.fillStyle="#FFFFAA";
    ctx.fillRect(0 , 0 ,200 , 250);

    // text
    ctx.fillStyle = "#000"
    ctx.fillText("Hello world!" , 200 , 200)


    //img
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img , 150 , 100)
    }
    img.src = "http://beta.shuobaotang.com/img/site/logo.png";

    //stroke rect
    ctx.strokeStyle="#FF00F0"
    ctx.strokeRect(5 , 5 , 40  ,40)


}
