let punkti = 0;

let red = 0;
let green = 0;
let blue = 0;

let width = 200;
let height = 200;

function OnButtonClick(){
    punkti += 1;
    document.getElementById("score").innerHTML = punkti;
    
    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);

    let rgbCode = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";
    
    document.getElementById("button").style.backgroundColor = rgbCode;

    width -=5;
    height -=5;

    document.getElementById("button").style.width = width.toString() + "px";
    document.getElementById("button").style.height = height.toString() + "px";

}

function getRandomInt(max){
    return Math.floor(Math.random() * max);

    
}