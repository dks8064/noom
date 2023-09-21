const socket = io();

const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");

let myStream;
let muted = false;
let cameraOff = false;

async function getMedia() {
    try {
        myStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        myFace.srcObject = myStream;
    } catch(e) {
        console.log(e);
    }
}

getMedia();

function handleMuteClink() {
    if(!muted) {
        muteBtn.innerText = "Unmute";
    } else {
        muteBtn.innerText = "Mute";
    }
    muted = !muted;
}

function handleCameraClink() {
    if(cameraOff) {
        cameraBtn.innerText = "Turn Camera Off";
    } else {
        cameraBtn.innerText = "Turn Camera On";
    }
    cameraOff = !cameraOff;
}

muteBtn.addEventListener("click", handleMuteClink);
cameraBtn.addEventListener("click", handleCameraClink);