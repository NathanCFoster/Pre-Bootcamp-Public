var amntOfLikes = [];
var page = {};
var created = [];
var amntofCreated = 0;
amntOfLikes.push(0);

function like(element) {
    var create = element.id;
    console.log(create);
    var text = document.querySelector("#likes" + create);
    amntOfLikes[create] += 1;
    text.innerHTML = amntOfLikes[create] + " Like(s)";
    if (amntOfLikes[create] < 0) {
        text.innerHTML = amntOfLikes[create] + " Dislike(s)";
    }
    console.log(text);
}

function dislike(element) {
    var create = element.id;
    var text = document.querySelector("#likes" + create);
    amntOfLikes[create] -= 1;
    text.innerHTML = amntOfLikes[create] + " Like(s)";
    if (amntOfLikes[create] < 0) {
        text.innerHTML = amntOfLikes[create] + " Dislike(s)";
    }
}

function createNew() {
    amntofCreated += 1;
    amntOfLikes.push(0);
    created.push(amntofCreated);
    var textArea = document.querySelector("#newThread").value;
    var email = document.querySelector("#email").value;
    var containerSelector = document.querySelector('#container');
    var newTemp = document.createDocumentFragment()
    var newSection = document.createElement("div");
    var newTitle = document.createElement("div");
    var newUser = document.createElement("h3");
    var newLikes = document.createElement("p");
    var newLikeBtn = document.createElement("button");
    var newDislikeBtn = document.createElement("button");
    var newContent = document.createElement("p");
    newSection.className = "spaced section";
    newSection.id = "sections";
    newTitle.className = "section-title";
    newUser.className = "spaced";
    newLikes.className = "spaced";
    newLikes.id = "likes" + amntofCreated;
    newLikeBtn.className = "btn spaced";
    newLikeBtn.id = amntofCreated;
    newDislikeBtn.className = "btn spaced";
    newDislikeBtn.id = amntofCreated;
    newLikeBtn.onclick = function() {like(this)};
    newDislikeBtn.onclick = function() {dislike(this)};
    newUser.innerHTML = email;
    newContent.innerHTML = textArea;
    newLikes.innerHTML = "Nobody has liked yet"
    newLikeBtn.innerHTML = "Like";
    newDislikeBtn.innerHTML = "Dislike";
    newContent.className = "spaced";
    newTemp.appendChild(newSection);
    newSection.appendChild(newTitle);
    newSection.appendChild(newContent);
    newTitle.appendChild(newUser);
    newTitle.appendChild(newLikes);
    newTitle.appendChild(newLikeBtn);
    newTitle.appendChild(newDislikeBtn);
    containerSelector.appendChild(newTemp);
    document.getElementById("newThread").value = "";
    document.getElementById("email").value = "";
}