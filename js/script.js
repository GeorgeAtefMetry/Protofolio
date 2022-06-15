var text = `I'm George Atef`

var curr = 0;
var write = function write(){

    var elem = document.getElementById('target');

    elem.textContent = elem.textContent + text.charAt(curr);

    curr++;

    if (curr < text.length){
        window.setTimeout(write, 500);
    }
    
}
write()




var btnContainer = document.getElementById("main-nav-wrap");
// Get all a with class="smoothscroll" inside the main-navigation
var a = btnContainer.getElementsByClassName("smoothscroll");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
});
}
