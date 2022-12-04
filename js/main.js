"use strict"

const grid_size = 40;

const gridCanvas = document.querySelector(".grid_canvas")

// creating rows 
for (let i = 0; i < grid_size; i++) {
    gridCanvas.innerHTML += `
    <div class="row"></div>
    `
}

// eachRow is a nodeList
const eachRow = document.querySelectorAll(".row")

// creating cells for each row
eachRow.forEach((row)=> {
    for (let i = 0; i < grid_size; i++) {
        row.innerHTML += `
        <div class="cell"></div>
        `
    }
})
 

