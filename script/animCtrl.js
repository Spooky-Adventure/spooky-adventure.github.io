// JavaScript code for enabling/disabling the background animation

// TODO: Make this suck less and actually work. And then reimplement the feature...


const animCtrl = document.getElementById("animCtrl");


function checkAnimState() {
    
    const bgCheckers = document.getElementById("bg");
    let animState = localStorage.getItem("animPlayState");
    
	if (animState = 0) {
        bgCheckers.classList.add('disableAnim');
    }
}

function controlAnim() {
    const bgCheckers = document.getElementById("bg");
    bgCheckers.classList.add('disableAnim');
    localStorage.setItem("animPlayState", "0");
    console.log(animState);
}


function changeImage(newImageName) {
    
    let shouldBeOnNext = true;
    
    if (shouldBeOnNext) {
        animCtrl.src = './img/button/buttonAnimOn.png';
    }

    shouldBeOnNext = false;
    
    animCtrl.src = newImageName;
    shouldBeOnNext = true;
    
}