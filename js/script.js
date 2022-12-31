let info_btn=document.getElementById('info_btn');
let mostrar_texto=document.getElementById('mostrar_texto');

info_btn.addEventListener('click',toggleText);

function toggleText(){
    mostrar_texto.classList.toggle('mostrar');
    if(mostrar_texto.classList.contains('mostrar')){
        info_btn.innerHTML='Menos información'
    }
    else{
        info_btn.innerHTML = 'Mas información'
    }
}