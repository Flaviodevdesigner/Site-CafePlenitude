let timer = 4000
let count = 1;
document.getElementById("radio1").checked = true;
document.getElementById("segundo1").checked = true;
document.getElementById("terceiro1").checked = true;

setInterval (function() {
    nextImage();
}, timer)

function nextImage(){
    count++;
    if (count>5) {
        count = 1;
}
    document.getElementById("radio"+count).checked = true;
    document.getElementById("segundo"+count).checked = true;
    document.getElementById("terceiro"+count).checked = true;
}

// Scroll-Animação ifood

const content = document.querySelector('[data-shrink="yes"');

setInterval(function() {
 content.classList.toggle('shrink')
},5000)

// De Voltar ao topo

let calcScrollValue = () => {
    let scrollProgress = document.getElementById('progresso');
    let progressValue = document.getElementById('progresso-valor');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round ((pos * 100) / calcHeight);
     if(pos>100){
        scrollProgress.style.display = "grid";
     }
     else {
        scrollProgress.style.display = "none"
     }
     scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0
     });
     scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;