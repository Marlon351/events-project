let divRef = document.querySelector("#color-display");

document.getElementById("aqua").onclick = function() {
    divRef.style.backgroundColor = "aqua";
    divRef.innerHTML = "aqua";
}

document.getElementById("teal").onclick = function() {
    divRef.style.backgroundColor = "teal";
    divRef.innerHTML = "teal";
}

document.getElementById("pink").onclick = function() {
    divRef.style.backgroundColor = "pink";
    divRef.innerHTML = "pink";
}

document.getElementById("purple").onclick = function() {
    divRef.style.backgroundColor = "purple";
    divRef.innerHTML = "purple";
}

document.getElementById("colorless").onclick = function() {
    divRef.style.backgroundColor = "white";
    divRef.innerHTML = "colorless";
}
//toggle display-EC

let displayBtn = document.getElementById("toggle-display");

displayBtn.onclick = function() {
    if(divRef.style.display != "none") {
        divRef.style.display = "none";
        displayBtn.innerHTML = "show";
    } else {
        divRef.style.display = "flex";
        displayBtn.innerHTML = "hide";
    }
}
//random color-EC

let colorList = ["aqua", "teal", "pink", "purple", "colorless"];

document.getElementById("random").onclick = function() {
    randNum = Math.random() * colorList.length;
    randInt = Math.floor(randNum);
    randColor = colorList[randInt];

    if (randColor != "colorless") {
        divRef.style.backgroundColor = randColor;
        divRef.innerHTML = randColor;
    } else {
        divRef.style.backgroundColor = "white";
        divRef.innerHTML = "colorless";
    }
}