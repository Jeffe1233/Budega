const btn = document.getElementById('btn');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btn.addEventListener('click', toggleMenu);
btn.addEventListener('touchstart', toggleMenu);

var contador = 1;
var img1="skol.png";
var img2="Brahama.png";
var img3="Heiniken.png";
var img4="Corona.png";
var tempo=2000;
var roda_slide=setInterval("mostra()", tempo);

function mostra()
{
    document.images["slide"].src=eval("img"+contador);
    if(contador <4)
    contador++;
    else
    contador=1;
}
