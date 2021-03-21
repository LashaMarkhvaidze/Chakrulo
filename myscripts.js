var sound = document.getElementById("audio");
var ball = document.getElementById('ball');
let l = 0;
var b = -100;

audio();
move();
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
    
    setInterval(function(){
        l+=1;  
        b+=1;
        ball.style.left = l + "px";
        ball.style.top = b + "px";
    
        if(l>500){  //amaze samushao
            var r = random(-100, 1500);
            var j = random(-200, -300);
            l=r;
            b=j;
        }
    }, 15); 

}

