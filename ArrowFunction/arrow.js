const wordhandler = (option)=> option.fname + "Your Word Handler File is ready"

const pnghandler  = (option)=> option.fname + "Your Word Handler File is ready"

const jpghandler  = (option)=> option.fname + "Your Word Handler File is ready"

const txthandler  = (option)=> option.fname + " Your Word Handler File is ready"

var user="abc.jpg"
var temp;

if(user.endsWith(".word")){
    temp = wordhandler({
        fname:user,
        size:"100kb"

    })
}

else if(user.endsWith(".png")){
    temp = wordhandler({
        fname:user,
        size:"100kb"

    })
}

else if(user.endsWith(".jpg")){
    temp = wordhandler({
        fname:user,
        size :"100kb"

    })
}

else if(user.endsWith(".txt")){
    temp = wordhandler({
        fname : user,
        size : "100kb"

    })
}

console.log(temp )