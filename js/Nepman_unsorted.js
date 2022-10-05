var btn_start = document.getElementsByClassName("btn in-main-menu");
var btn_panel = document.getElementById("button-panel invisible");

function blabla() {
    console.log("Where is the money, Lebowski?");
    btn_panel.classList.contains("invisible")
}

function show_button_panel() {
    btn_panel.classList.remove("invisible")
}

var iNum = 42;