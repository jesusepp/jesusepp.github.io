let body = document.getElementsByTagName('body')[0];

body.onload = function(){
    insertHTML(1);
}

let margin = document.getElementsByClassName('info-redes')[0];

let totalHeigth = body.offsetHeight;
let windHeight = window.innerHeight;
let difHeight = windHeight - totalHeigth;

if (totalHeigth < windHeight){
    margin.style.paddingBottom = 0;
    let totalHeigth = body.offsetHeight;
    let difHeight = windHeight - totalHeigth;
    margin.style.paddingBottom = difHeight + 'px';
}