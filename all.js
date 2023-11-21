var forward=document.querySelector('.next');
var back=document.querySelector('.back');

back.onclick = function() {
    window.history.back();
};

forward.onclick=function(){
    window.history.forward();
};