var imgs=["virat kohli 1.jpg","virat kohli.jpg"]
const move=()=>{
    var randomindex=Math.floor(Math.random()*imgs.length);
    console.log(randomindex);

    var image=document.getElementById("image");
    image.src=imgs[randomindex];
    image.style.transition="1s";
}   