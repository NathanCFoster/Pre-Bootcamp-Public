var theDojo = [];
var dojoDiv = document.getElementById("the-dojo");
var odds = [1, 1, 1, 0];
var size = 9;
var clicked = false;
var currentCursor = "cursor";

// Creates the rows of buttons for this game
function render(theDojo) {
    createDojo();
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)" id="${i} ${j}"></button>`;
        }
    }
    console.log("rendered");
    return result;
}

function difficultySwap(element) {
    var difficulty = element.value;
    if (difficulty == "easy") {
        odds = [1,1,1,0];
        dojoDiv.className = "easy";
    } else if (difficulty == "medium") {
        odds = [1,1,1,0,0];
        dojoDiv.className = "easy";
    } else {
        odds = [1,1,1,0];
        size = 15;
        dojoDiv.className = "hard";
    }
    createDojo();
    dojoDiv.innerHTML = render(theDojo);
}

function createDojo() {
    for (let index = 0; index <= size; index++) {
        theDojo[index] = new Array();
        for (let x = 0; x <= size; x++) {
            var tempMathx = Math.random() * (odds.length - 1);
            tempMathx = Math.round(tempMathx);
            var num = odds[tempMathx];
            theDojo[index].push(num);
        }
    }
    console.table(theDojo);
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.

function adjOpen(currentx, currenty) {
    var elm = [];
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            var tempX = x+currentx;
            var tempY = y+currenty;
            var elm = (document.getElementById(tempX + " " + tempY));
            // var currentElm = document.getElementById(currentx + " " + currenty)
            if (elm != null && elm.id != tempX + " " + tempY + "checked") {
                elm.id += "checked";
                howMany(tempX, tempY, elm);
            }
        }
    }
}

function howMany(i, j, element) {
    console.log({ i, j });
    var adjacent = 0;
    if (currentCursor == "flag") {
        if (element.id == "flagged") {
            element.id = i + " " + j;
            element.innerHTML = '';
            return;
        } else {
            var flag = document.createElement("img");
            flag.src = "imgs/mineflag.png";
            flag.className = "flagged";
            element.innerHTML = '';
            element.appendChild(flag);
            element.id = "flagged";
            return;
        }
    } else if (currentCursor != "flag" && element.id == 'flagged') {
        return;
    }
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            var tempX = x + i;
            var tempY = y + j;
            if (theDojo[tempX] != null && theDojo[tempX][tempY] != null) {
                if (theDojo[tempX][tempY] == 0) {
                    adjacent ++;
                    console.log(adjacent);
                }
            }
        }
    } 
    element.innerHTML = adjacent;
    if (theDojo[i][j] != null && theDojo[i][j] == 0) {
        dojoDiv.innerHTML = render(theDojo);
        alert("You lost!");
        return;
    }
    if (adjacent == 0) {
        adjOpen(i, j);
    }
    
}

function checkEnd() {
    var win = true;
    var page = document.querySelector(".container");
    var newPage = document.createDocumentFragment();
    var title = document.createElement("h2");
    var newGame = document.createElement("button");
    title.className = "row";
    newPage.appendChild(title);
    newGame.onclick = function () {location.reload();}
    var buttns = document.querySelectorAll(".tatami");
    for (let index = 0; index < buttns.length; index++) {
        var inner = buttns[index].innerHTML;
        if (inner == '') {
            win = false;
        }
    }
    if (win == false) {
        title.innerText = "You Didn't select everything!";
        newGame.innerText = "Try again!";
    } else {
        title.innerText = "Congrats!!!"
        newGame.innerText = "Maybe try a harder difficulty..."
    }
    page.innerHTML = '';
    title.appendChild(newGame);
    page.appendChild(newPage);
}

function cursorFlag(element) {
    if (clicked == false) {
        element.id = "clicked";
        clicked = true;
        currentCursor = "flag";
    } else {
        element.id = "";
        clicked = false;
        currentCursor = "cursor";
    }
}


// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);