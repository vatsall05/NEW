var imgs=["virat kohli 1.jpg"]
const move=()=>{
    var move=document.getElementById("move");
    var newimg =Math.floor(Math.random()*imgs.length);
    console.log(newimg);

    move.style.background=imgs[newimg];
    move.style.transition="1s";
}   