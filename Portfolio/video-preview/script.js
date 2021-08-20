console.log("page loaded...");

var clicked = false;

function playVid(element) {
    element.play();
}

function pauseVid(element) {
    element.pause();
}

function clickVid(element) {
    if (clicked == true) {
        element.pause();
        clicked = false;
    } else {
        element.play();
        clicked = true;
    }
}