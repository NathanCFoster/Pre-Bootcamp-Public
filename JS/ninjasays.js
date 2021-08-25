function deleteCookie() {
    var cookie = document.getElementById("cookie");
    cookie.remove();
}

function changeTemp(element) {
    var elms = document.querySelectorAll("#degree")
    for (let index = 0; index < elms.length; index++) {
        var mathElms = 0;
        if (element.value == "c") {
            mathElms = (elms[index].innerHTML - 32) * (5 / 9);
            mathElms = Math.round(mathElms);
            elms[index].innerHTML = mathElms;
        } else {
            mathElms = (elms[index].innerHTML * 1.8) + 32;
            mathElms = Math.round(mathElms);
            elms[index].innerHTML = mathElms;
        }
    }
}
