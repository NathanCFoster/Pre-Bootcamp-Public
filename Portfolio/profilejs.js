var connectionRequestCounter = 2;
var currentConnectionCounter = 10;

function changeName() {
    var name = document.getElementById("nameChange");
    name.innerText = ("Foster Nathan");
}

function deleteConnection(element) {
    var number = element.id;
    var deleteThis = document.getElementById("profiles" + number);
    if (deleteThis.parentElement.id == "currentConnections") {
        currentConnectionCounter --;
    } else {
        connectionRequestCounter--;
    }
    deleteThis.remove();
    console.log("connections: " + currentConnectionCounter);
    console.log("requests: " + connectionRequestCounter);
    document.getElementById("connectionCounter").innerText = currentConnectionCounter;
    document.getElementById("connectionRequests").innerText = connectionRequestCounter;
}

function addConnection(element) {
    var number = element.id;
    var deleteThis = document.getElementById("profiles" + number);
    if (deleteThis.parentElement.id == "currentConnections") {
        currentConnectionCounter++;
    } else {
        connectionRequestCounter--;
        currentConnectionCounter++;
    }
    deleteThis.remove();
    console.log("connections: " + currentConnectionCounter);
    console.log("requests: " + connectionRequestCounter);
    document.getElementById("connectionCounter").innerText = currentConnectionCounter;
    document.getElementById("connectionRequests").innerText = connectionRequestCounter;
}