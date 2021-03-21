var sound = document.getElementById("audio");
function audio(){
    sound.currentTime = 0;
    sound.volume = 0.15;
    sound.loop = true; //if you want it to restart playing automatically when it ends
}
audio();
function play(){
    sound.play();
}
function pause(){
    sound.pause();
}