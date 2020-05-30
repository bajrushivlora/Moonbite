var ig = document.querySelector(".fab.fa-instagram");
var yt = document.querySelector(".fab.fa-youtube");

var igcircle = document.getElementById("igcircle");
var ytcircle = document.getElementById("ytcircle");

ig.addEventListener("mouseenter", instagram);
ig.addEventListener("mouseout", undoinstagram);
igcircle.addEventListener("mouseenter", instagram);
igcircle.addEventListener("mouseout", undoinstagram);

function instagram() {   
    igcircle.style.backgroundColor = "white";
    ig.style.color = "black";
}

function undoinstagram() {
  igcircle.style.backgroundColor = "transparent";
  ig.style.color = "white";
}

yt.addEventListener("mouseenter", youtube);
yt.addEventListener("mouseout", undoyoutube);
ytcircle.addEventListener("mouseenter", youtube);
ytcircle.addEventListener("mouseout", undoyoutube);

function youtube() {   
    ytcircle.style.backgroundColor = "white";
    yt.style.color = "black";
}

function undoyoutube() {
  ytcircle.style.backgroundColor = "transparent";
  yt.style.color = "white";
}


// ---------------------------------------------------------------------------------

