function increase(){
    var count= document.getElementById("count").innerHTML;
    count= parseInt(count)+1;
    document.getElementById("count").innerHTML= count;
}

function reset(){
    document.getElementById("count").innerHTML= 0;
}

function decrease(){
    var count= document.getElementById("count").innerHTML;
    count= parseInt(count)-1;
    document.getElementById("count").innerHTML= count;
}