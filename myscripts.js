var sound = document.getElementById("audio");
var ball = document.getElementById('tesla');
var gza = document.getElementById('gza');
var sword = document.getElementById('sword');
var cd = document.getElementById('cd');
var pizza = document.getElementById('pizza');



var left = 0;
var topp = 0;
var height = window.innerHeight;
var width = window.innerWidth;
var deg = 0;

var left1 = 0;
var topp1 = 0;
var deg1 = 0;

var left2 = 0;
var topp2 = 0;
var deg2 = 0;

var left3 = 0;
var topp3 = 0;
var deg3 = 0;

var left4 = 0;
var topp4 = 0;
var deg4 = 0;


audio();
move();
gzaf();
pizzaf();
swordf();
cdf();



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
            var t = random(50, 150);
            var y = -40
            left1=t;
            topp1=y;
        }        
    }, 1);

}

function pizzaf(){
    left2 = -100;
    topp2 = 200;
    
    setInterval(function(){
        left2+=0.02;  
        topp2-=0.02;
        deg2 +=0.1;
        pizza.style.left = left2 + "%";
        pizza.style.top = topp2 + "%";
        pizza.style.transform = "rotate(" + deg2 +"deg)"
        

        if(topp2<-120|| left2>150){  //amaze samushao
            var ta = random(-100, 30);
            var ya = 150
            left2=ta;
            topp2=ya;
        }        
    }, 1);

}

function swordf(){
    left3 = -150;
    topp3 = 50;
    
    setInterval(function(){
        left3+=0.02;  
        deg3 +=0.1;
        sword.style.left = left3 + "%";
        sword.style.top = topp3 + "%";
        sword.style.transform = "rotate(" + deg3 +"deg)"
        

        if(left3>200){  //amaze samushao
            var taa = random(-100, -200);
            var yaa = random(30, 80)
            left3=taa;
            topp3=yaa;
        }        
    }, 1);

}

function cdf(){
    left4 = 150;
    topp4 = 30;
    
    setInterval(function(){
        left4-=0.02;  
        
        deg4 -=0.1;
        cd.style.left = left4 + "%";
        cd.style.transform = "rotate(" + deg4 +"deg)"
        cd.style.top = topp4 + "%";


        if(left4 < -100){  //amaze samushao
            var taaa = random(120, 170);
            var yaaa = random(20, 80);
            left4=taaa;
            topp4=yaaa;
        }        
    }, 1);

}


