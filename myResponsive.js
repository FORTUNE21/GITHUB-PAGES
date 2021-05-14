const ul = document.querySelector('ul');
const closemenu = document.querySelector('closemenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closemenu.addEventListener('click',close);


function show(){
    ul.style.display = 'flex';
    ul.style.top = '0';
}
function close(){
    ul.style.top = '-100%';
}



