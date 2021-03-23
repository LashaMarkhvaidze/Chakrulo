var sound = document.getElementById("audio");
var ball = document.getElementById('tesla');
var left = 0;
var topp = 0;
var height = window.innerHeight;
var width = window.innerWidth;
var deg = 0;


audio();
move();
window.onscroll = function () {
    window.scrollTo(0,0);
    }
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function audio(){
    sound.currentTime = 0;
    sound.volume = 0.15;
    sound.loop = true; //if you want it to restart playing automatically when it ends
}
function play(){
    sound.play();
}
function pause(){
    sound.pause();
}


function move(){
    left= -20;
    topp= -20;
    setInterval(function(){
        left+=0.02;  
        topp+=0.02;
        deg +=0.1;
        ball.style.left = left + "%";
        ball.style.top = topp + "%";
        ball.style.transform = "rotate(" + deg +"deg)"
        if(topp>100 || left>100){  //amaze samushao
            var r = random(-30, 100);
            var j = -80
            left=r;
            topp=j;
        }

        
    }, 1); 

}


