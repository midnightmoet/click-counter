// This code is executed when the page is loaded but resets count when refreshed
// let button = document.getElementById("clickme"),
// 	count = 0;
// button.onclick = function () {
// 	count += 1;
// 	button.innerHTML = "Click me: " + count;
// };


// This code is executed when the page is loaded and keeps count when refreshed
let clicks = 0;

function initiateClicks() {
    let clickStr = localStorage.getItem("clicks");
    if(clickStr == undefined){
        localStorage.setItem("clicks", 0);
        clicks = 0;
    }else{
        clicks = parseInt(clickStr);   
    }
    document.getElementById("clicks").innerHTML = clicks;
}

function doClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").innerHTML = clicks;
}

document.getElementById("clickme").onclick = doClick;
initiateClicks();