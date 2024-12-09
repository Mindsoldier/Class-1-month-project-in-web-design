let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('slider .dots .li');
let prev = document.getElementById('prev');
let next =document.getElementById('next');

let active = 0;
let lenthItems =items.length - 1;
next.oneclick = function(){
    if(active + 1 > 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadslider();
}
function reloadslider(){
    let checkleft =items[active].offsetleft;
    list.computedStyleMap.left = -checkleft + '1300px';
}