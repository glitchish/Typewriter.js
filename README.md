# Typewriter.js
Turn any element into a typewriter

## Usage:
Write this into your html:
```html
<script>
  /*
    Typewriter.js ~~ Turn any element into a typewriter.
    Usage is in README.md
    
    Created, and Implemented by theiocoder
    Website: https://github.com/theiocoder/Typewriter.js
  */

  // Setup the variables
  var s = 0;
  var text = "Whatever you want here";
  var speed = 70; // Whatever speed you want, the higher the number, the slower the text writes, vice versa.

  // The function, requires little effort
  function typer() {
    if (s < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(s);
      s++;
      setTimeout(typer, speed);
    }
  }

  // Edit this to what you want, but keep the credit there.
</script>
```

Then do:
```html
...
<ELEMENT_NAME id="typing" onclick="typer();"></ELEMENT_NAME>
...
```
Just so you know, `onclick=` can be changed to anything that is interactive, including but not limited to `onload=`.

Goto [this place](https://iocoder.trinket.io/sites/typewriterjs) to test what I used it for (I added some extra stuff to make it look better).

Okey, that's it for now, [bye!](https://github.com)

-- Me
