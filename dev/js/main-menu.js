document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    comprobarDNI();
    comprobarNOMBRE();
}

const menu_box = document.querySelector('.nav__menu');
const toggle = document.querySelector('#toggle');
const menu_container = document.querySelector('.nav__menu-contenedor');

document.onclick = function (e) {
    if (e.target.id !== 'menu_box' && e.target.id !== 'toggle' && e.target.id !== 'menu_container') {
        toggle.classList.remove('active');
        menu_container.classList.remove('active');
    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    menu_container.classList.toggle('active');
}

//==========================
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

const abrirContent = document.getElementsByClassName("months__btn");

for (let i = 0; i < abrirContent.length; i++) {
    abrirContent[i].addEventListener("click", function () {
        this.classList.toggle("abrir");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}