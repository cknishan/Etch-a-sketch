"use strict"

let cellColor = "black";

const eachCel = document.querySelectorAll(".cell")


// drawing // coloring each cell on mousedown
eachCel.forEach((cell)=> {
    cell.addEventListener('mousedown' && "mouseover", (event)=> {
        console.log(cell)
        cell.style.backgroundColor = cellColor
    })
})
 