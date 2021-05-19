document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    comprobarDNI();
    comprobarNOMBRE();
}

const toggle = document.getElementById('toggle');
const navbarx = document.getElementById('navbarx');

const nav__menu1 = document.getElementById('nav__menu1');
const nav__menu2 = document.getElementById('nav__menu2');
const nav__menu3 = document.getElementById('nav__menu3');
const nav__menu4 = document.getElementById('nav__menu4');
//======MODO ISCURO
const btnSwitch = document.querySelector('#switch')

toggle.onclick = function () {
    toggle.classList.toggle('activador');
    navbarx.classList.toggle('activador');
}

nav__menu1.onclick = function () {
    toggle.classList.remove('activador');
    navbarx.classList.remove('activador');
}
nav__menu2.onclick = function () {
    toggle.classList.remove('activador');
    navbarx.classList.remove('activador');
}
nav__menu3.onclick = function () {
    toggle.classList.remove('activador');
    navbarx.classList.remove('activador');
}
nav__menu4.onclick = function () {
    toggle.classList.remove('activador');
    navbarx.classList.remove('activador');
}

//======MODO ISCURO
// const btnSwitch = document.querySelector('#switch')

// btnSwitch.addEventListener('click',()=>{
btnSwitch.onclick = function () {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //guardarmos el modo oscuro en localstorage.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');

    }else{
        localStorage.setItem('dark-mode', 'false');
    }

};

//obtenemos el modo actualizar
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}



function comprobarDNI() {
    let validarDNI = document.getElementById("numeroDNI");
    let errorMsg = document.getElementById("error-msg1");
    let icon = document.getElementById("icon1");
    
    validarDNI.addEventListener('input', () => {
        if (validarDNI.value.length === 8) {
            icon.innerHTML = '<i class="fas fa-check-circle"></i>';
            icon.style.color = '#B53471';
            errorMsg.style.display = 'none';
            validarDNI.style.border = '2px solid #B53471';
        } else {
            icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
            icon.style.color = '#FF0000';
            errorMsg.style.display = 'block';
            validarDNI.style.border = '2px solid #FF0000';
        }

        // console.log(e.target.value.length);
    });


};

function comprobarNOMBRE(){
    let nombremayu = document.getElementById("nombremayu");
    let errorMsg = document.getElementById("error-msg2");
    let icon = document.getElementById("icon2");
    let mayuscula = /^[A-ZÑ\s]+$/
    
    nombremayu.addEventListener('input', () => {
        if (nombremayu.value.length > 3 && nombremayu.value == nombremayu.value.match(mayuscula)) {
            icon.innerHTML = '<i class="fas fa-check-circle"></i>';
            icon.style.color = '#B53471';
            errorMsg.style.display = 'none';
            nombremayu.style.border = '2px solid #B53471';
        } else {
            icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
            icon.style.color = '#FF0000';
            errorMsg.style.display = 'block';
            nombremayu.style.border = '2px solid #FF0000';
        }

        // console.log(e.target.value.length);
    });
}