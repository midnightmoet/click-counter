// This code is executed when the page is loaded but resets count when refreshed
// let button = document.getElementById("clickme"),
// 	count = 0;
// button.onclick = function () {
// 	count += 1;
// 	button.innerHTML = "Click me: " + count;
// };


// This code is executed when the page is loaded and keeps count when refreshed
// Get the click count start at zero
let clicks = 0;

// Function to update the click count and update the page
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

// Function to increment the click count and update the page
function doClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").innerHTML = clicks;
}

// Function to reset the click count to zero and update the page
function resetClicks() {
    clicks = 0;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").innerHTML = clicks;
}

document.getElementById("clickme").onclick = doClick;
initiateClicks();