/*
    Typewriter.js ~~ Turn any element into a typewriter.
    Usage is in README.md
    
    Created, and Implemented by theiocoder
*/

// Setup the variables
var s = 0;
var text;
var speed;

// The function, requires little effort
function typer() {
  if (s < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(s);
    s++;
    setTimeout(typer, speed);
  }
}

// Edit this to what you want, but keep the credit there.
