var points = 0;
var cookie = document.getElementById("cookie");
var pointsDisplay = document.getElementById("points");

cookie.addEventListener("click", function() {
    points++;
    pointsDisplay.innerHTML = points + " points";
});
