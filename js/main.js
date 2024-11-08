let menu = document.getElementById('menu');
let toggle_open = document.getElementById('Toggle-Open');
let toggle_close = document.getElementById('Toggle-Close');

toggle_open.addEventListener('Click',toggleMenu);
toggle_close.addEventListener('Click',toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show-menu');
    if(menu.classList.contains('show-menu')){
        toggle_open.style.display = 'none';
        toggle_close.style.display = 'block';
    }
    else{
        toggle_open.style.display = 'block';
        toggle_close.style.display = 'none';
    }
}