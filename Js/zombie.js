let img1 = document.getElementById("idKenny");
let kennyHeight;
let kennyWidth;
let osamaHeight;
let osamaWidth;
let time;
let interval1;
let interval2;
let isDying = false;
let isDying2 = false;
const CHANGE_TIMER = 2000;
const DYING_TIME = 800;
const DYING_TIME2 = 800;


function handler1() {

    if (isDying) {
        return
    }

    isDying = true;
    killKenny();
    clearInterval(interval1);
    scoreCounter();
    setTimeout(function () {
        birthKenny();
        moveKenny();
        isDying = false;
        interval1 = setInterval(moveKenny, CHANGE_TIMER);
    }, DYING_TIME);
}

function moveKenny() {
    let window_height = window.innerHeight;
    let window_width = window.innerWidth

    imgHeight = document.getElementById("idKenny").height;
    imgWidth = document.getElementById("idKenny").width;

    halfWidth = imgWidth / 2;
    halfHeight = imgHeight / 2;

    document.getElementById("idKenny").style.left = (Math.random() * (window_width - imgWidth) + (halfWidth)) + "px";
    document.getElementById("idKenny").style.top = (Math.random() * (window_height - imgHeight) + (halfHeight)) + "px";
}

function killKenny() {
    document.getElementById("idKenny").src = "Images/blood.png";
    let gunshot = document.getElementById("gunshot");
    gunshot.play();

}

function birthKenny() {
    document.getElementById("idKenny").src = "Images/kenny.png";
}

function handler2() {

    if (isDying2) {
        return
    }

    isDying2 = true;
    killOsama();
    clearInterval(interval2);
    scoreCounter();
    setTimeout(function () {
        birthOsama();
        moveOsama();
        isDying2 = false;
        interval2 = setInterval(moveOsama, CHANGE_TIMER);
    }, DYING_TIME2);
}

function moveOsama() {
    let window_height2 = window.innerHeight;
    let window_width2 = window.innerWidth

    imgHeight2 = document.getElementById("idOsama").height;
    imgWidth2 = document.getElementById("idOsama").width;

    halfWidth2 = imgWidth2 / 2;
    halfHeight2 = imgHeight2 / 2;

    document.getElementById("idOsama").style.left = (Math.random() * (window_width2 - imgWidth2) + (halfWidth2)) + "px";
    document.getElementById("idOsama").style.top = (Math.random() * (window_height2 - imgHeight2) + (halfHeight2)) + "px";
}

function killOsama() {
    document.getElementById("idOsama").src = "Images/explosion.gif";
    let explosion = document.getElementById("explosion");
    explosion.play();

}

function birthOsama() {
    document.getElementById("idOsama").src = "Images/Osama.png";
}

function onEnd() {
    location.reload();
}

function scoreCounter() {
    let score = parseInt(document.getElementById("score").innerHTML);
    score++;
    document.getElementById("score").innerHTML = score;
}

function onStart() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("endGame").style.display = "block";
    document.getElementById("idKenny").style.display = "block";
    document.getElementById("idOsama").style.display = "block";
    interval1 = setInterval(moveKenny, CHANGE_TIMER);
    interval2 = setInterval(moveOsama, CHANGE_TIMER);
    let audio = document.getElementById("bgMusic");
    audio.loop = true;
    audio.play();

}