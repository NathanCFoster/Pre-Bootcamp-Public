var aloeClicks = 1;
var extraAloes = 1;
var reqClicks = 24;
var scale = 1;

function aloeClicker(element) {
    aloeClicks ++;
    var currentAloe = element.className;
    for (let index = 0; index < 11; index++) {
        if (aloeClicks == index) {
            element.src = "imgs/aloe" + index + ".jpg";
        }
    }
    if (aloeClicks > 10) {
        var aloeAmnt = document.getElementById("aloeAmnt");
        aloeAmnt.innerText = "Current Clicks: " + aloeClicks;
    }
    for (let x = 0; x < 11; x++) {
        if (currentAloe == "aloe" + x) {
            aloeClicks += x;
            aloeAmnt.innerText = "Current Clicks: " + aloeClicks;
        }
        
    }
    if (aloeClicks > reqClicks) {
        var aloes = document.getElementById("aloes");
        var newAloe = document.createElement("img");
        newAloe.alt = "aloe" + extraAloes;
        newAloe.src = "imgs/aloe" + extraAloes + ".jpg";
        newAloe.className = "aloe" + extraAloes;
        newAloe.onclick = function () { aloeClicker(this) }
        newAloe.id = "aloe";
        aloes.appendChild(newAloe);
        reqClicks += 25 * scale;
        extraAloes++;
        scale ++;
    }
    console.log(reqClicks);
}