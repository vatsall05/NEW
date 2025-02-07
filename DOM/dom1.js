// console.log(document.getElementById("txt").innerHTML)

function changeTxt(){
    
    // document.getElementById("txt").innerHTML = "Virat Kohli"

    var txt = document.getElementById("txt")
    txt.innerHTML = "The King Virat Kohli"
    txt.style.color = "white"
    txt.style.backgroundColor = "blue"
    txt.style.height = " 200px";
    txt.style.width = "200px";
    txt.style.borderRadius = "5%"
    txt.style.transition="2s";

    var btn = document.getElementById("btn");
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.style.height = "50px";
    btn.style.width = "100px";
    
}