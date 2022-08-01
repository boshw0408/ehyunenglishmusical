// preloader
const preloader = document.getElementById('preloader');

function endPreload(){
    preloader.classList.add('preloader-exit-animation');
}

window.addEventListener('load',()=>{
    setTimeout(endPreload,1000);
});