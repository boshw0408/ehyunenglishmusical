// preloader
// const preloader = document.getElementById('preloader');

// function endPreload(){
//     preloader.classList.add('preloader-exit-animation');
// }

// window.addEventListener('load',()=>{
//     setTimeout(endPreload,1000);
// });

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

//about page display text
let txt = ['learn', 'enjoy'];
let i=0;
let index=0;
const select = document.getElementById('text');

typeAnimation();

function typeWriter(NUM) {
    if (i < txt[NUM].length) {
            select.innerHTML += txt[NUM].charAt(i);
            i++;
            setTimeout(typeWriter, 250, NUM);
    }
    else{
        i=0;
    }  
}

function typeWriterDelete(NUM) {
    if (i < txt[NUM].length +1) {
            select.innerHTML = txt[NUM].substring(0, txt[NUM].length - i);
            i++;
            setTimeout(typeWriterDelete, 100, NUM);
    }   
    else{
        i=0;
    }   
}

function typeAnimation(){
    if(index < 1){
        typeWriter(index);
        setTimeout(typeWriterDelete,1800,index);
        index++;
        setTimeout(typeAnimation,2800);
    }
    else if(index == 1){
        typeWriter(index);
        setTimeout(shrinkAnimation,1800);
        setTimeout(hover,2800);
    }
}

//about page hover effect
function hover(){
    const aboutTextBox = document.getElementById('about-page-text-container');
    const aboutTextA = document.getElementById('about-page-text');
    aboutTextA.classList.add('about-cursor');
    aboutTextBox.classList.add('about-cursor');

    aboutTextBox.addEventListener('mouseover',()=>{
        aboutTextBox.style.backgroundColor = '#fad6de';
        aboutTextA.style.opacity = '.5';
    })

    aboutTextBox.addEventListener('mouseout',()=>{
        aboutTextBox.style.backgroundColor = '#FFCBD6';
        aboutTextA.style.opacity = '1';
    })
}


//about page text-box shrink animation
const aboutContainer = document.getElementById('about-page-text-container');

function firstText(){
    const text1 = document.getElementById('text1');
    text1.innerHTML = 'BOU';
}

function secondText(){
    const text2 = document.getElementById('text2');
    text2.innerHTML = '';
}

function thirdText(){
    select.innerHTML = '';
}

function shrinkAnimation(){
    aboutContainer.classList.add('shrink');
    setTimeout(thirdText,200);
    setTimeout(secondText,300);
    setTimeout(firstText,500);
}
