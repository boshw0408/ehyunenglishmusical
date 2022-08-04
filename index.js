// preloader
const preloader = document.getElementById('preloader');

function endPreload(){
    preloader.classList.add('preloader-exit-animation');
}

window.addEventListener('load',()=>{
    setTimeout(endPreload,1000);
});

const navLinks = document.getElementsByClassName('nav-link');
Array.from(navLinks).forEach(navLink => {
    addEventListener('mouseover', (event) => {
        
    })
});

// displayFloralLine
function displayFloralLine(element) {
    const floralLine = element.nextElementSibling.children[0];
    floralLine.style.strokeDashoffset = 0;
}

function hideFloralLine(element) {
    const floralLine = element.nextElementSibling.children[0];
    floralLine.style.strokeDashoffset = 100000;
}