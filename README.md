# p5.js multi sketch template

# sketch 0 - Keeping Track of Time
a floating dot clock with circle changes

### 1. write the text of time 
    just use text function and define the position
    the number of time will be used later, so insert three variables: "h", "m", "s"

### 2. draw the circle representing seconds
the small dot will jump with second number being larger
with the "map" funtion, to change the location interval
and the color will change each second, 1 min is a cycle.

### 3. draw the circle representing minutes and hours on the same way
the circle will expand with number being larger

### question
I found that when the number is less than 10, only single digits will be displayed, which will affect the accuracy of the circle position I set. Is there any way to make it automatically display as "01, 02..."？


# sketch 1 - Interactive Drawing Interface
    following the color style of Piet Mondrian

### draw the basic canvas with the style of Mondrian
use rect the create the base

### when mouseclick
draw a red big square

### when mousedragged
draw a bunch of samll squares with color changing

#### the lerpcolor function
I image, when I am drawing, the "pen's" color can change
so I learn to use the "lerpcolor" function to realize it.
and it needs several variables to change when drawing, I searched a lot and found the way, by mixing a lot changes.
