var colors=["red","blue","black","pink","Orange","purple","White","cyan"];
const move = ()=>{
    
    var mymove=document.getElementById("mymove");
    
    var randnindex=Math.floor(Math.random()*colors.length);
    console.log(randnindex);

    mymove.style.background=colors[randnindex];
}