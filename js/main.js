"use strict"

const grid_size = 16;

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
eachRow.forEach((e)=> {
    for (let i = 0; i < grid_size; i++) {
        e.innerHTML += `
        <div class="cell"></div>
        `
    }
})


