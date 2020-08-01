let body = document.getElementsByTagName('body')[0];

body.onload = function(){
    insertHTML(1);
}

let header = document.getElementsByTagName('header')[0];
let footer = document.getElementsByTagName('footer')[0];
let margin = document.getElementsByClassName('info-redes')[0];

let totalHeigth = header.offsetHeight + body.offsetHeight + footer.offsetHeight;

let windHeight = window.innerHeight;

let difHeight = windHeight - totalHeigth;

if (totalHeigth < windHeight){
    margin.style.paddingBottom = 6*25 + difHeight + 'px';
}