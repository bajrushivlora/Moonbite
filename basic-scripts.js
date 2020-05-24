var ig = document.querySelector(".fab.fa-instagram");
var yt = document.querySelector(".fab.fa-youtube");

var igcircle = document.getElementById("igcircle");
var ytcircle = document.getElementById("ytcircle");

ig.addEventListener("mouseenter", instagram);
ig.addEventListener("mouseout", undoinstagram);
igcircle.addEventListener("mouseenter", instagram);
igcircle.addEventListener("mouseout", undoinstagram);

function instagram() {   
    igcircle.style.backgroundColor = "var(--moonbite)";
    ig.style.color = "white";
}

function undoinstagram() {
  igcircle.style.backgroundColor = "var(--bkgd3)";
  ig.style.color = "var(--moonbite)";
}

yt.addEventListener("mouseenter", youtube);
yt.addEventListener("mouseout", undoyoutube);
ytcircle.addEventListener("mouseenter", youtube);
ytcircle.addEventListener("mouseout", undoyoutube);

function youtube() {   
    ytcircle.style.backgroundColor = "var(--moonbite)";
    yt.style.color = "white";
}

function undoyoutube() {
  ytcircle.style.backgroundColor = "var(--bkgd3)";
  yt.style.color = "var(--moonbite)";
}


// ---------------------------------------------------------------------------------

