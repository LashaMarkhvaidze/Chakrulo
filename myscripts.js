var sound = document.getElementById("audio");
var ball = document.getElementById('tesla');
var gza = document.getElementById('gza');

var left = 0;
var topp = 0;
var height = window.innerHeight;
var width = window.innerWidth;
var deg = 0;

var left1 = 0;
var topp1 = 0;
var deg1 = 0;


audio();
move();
gzaf();

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
            var r = random(-80, 80);
            var j = -80
            left=r;
            topp=j;
        }

        
    }, 1); 

}

function gzaf(){
    left1 = 150;
    topp1 = -100;
    
    setInterval(function(){
        left1-=0.02;  
        topp1+=0.02;
        deg1 -=0.1;
        gza.style.left = left1 + "%";
        gza.style.top = topp1 + "%";
        gza.style.transform = "rotate(" + deg1 +"deg)"
        

        if(topp1>180|| left1<-50){  //amaze samushao
            var t = random(100, 200);
            var y = -80
            left1=t;
            topp1=y;
        }        
    }, 1);

}


