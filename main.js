let toTop = document.querySelector('.list');
let some = document.querySelector('.home');
let some1 = document.querySelector('.home1');
let some3 = document.querySelector('.home3');
let some2 = document.querySelector('.navbar');


window.addEventListener('scroll',subMenuOut)

function subMenuOut(){
    if(window.pageYOffset > 150){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
        
    }
}


window.addEventListener('scroll',arman);

function arman(){
    if(window.pageYOffset > 150 ){
        some.classList.add('home2')
    }
    else{
        some.classList.remove('home2')
    }
}

window.addEventListener('scroll',arman1);

function arman1(){
    if(window.pageYOffset > 150 ){
        some1.classList.add('home2')
    }
    else{
        some1.classList.remove('home2')
    }
}

window.addEventListener('scroll',arman2);

function arman2(){
    if(window.pageYOffset > 150 ){
        some3.classList.add('home2')
    }
    else{
        some3.classList.remove('home2')
    }
}



window.addEventListener('scroll',farhan1)

function farhan1(){
    if(window.pageYOffset > 150){
        some2.classList.add('aaa');
    }
    else{
        some2.classList.remove('aaa');
        
    }
}







