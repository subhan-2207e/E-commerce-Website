const header = document.querySelector('header');


window.addEventListener("scroll",function(){
    header.classList.toggle("stickly",this.window.scrollY > 0);
})


const menu = document.querySelector('#menu-icon');
const navmenu = document.querySelector('.navmenu');


menu.onclick = ()=>{
    menu.classList.toggle('bx-x')
    navmenu.classList.toggle('open')
}


