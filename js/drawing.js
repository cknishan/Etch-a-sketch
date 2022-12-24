"use strict"

// color variable 
let cellColor = "black";

// reference bindings
const eachCell = document.querySelectorAll(".cell")
const onOff = document.querySelector(".switch")

// drawing permission flag
let enable_coloring = false

// toggole switch
function toggleSwitch() {
    if (enable_coloring === true) {
        enable_coloring = false
        onOff.style.color = "black"
    } else {
        enable_coloring = true
        onOff.style.color = "green"
    }
    console.log(enable_coloring)
}

// if enter is press
document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        toggleSwitch()
    }
})

// if switch button is pressed
onOff.addEventListener('click', e => {
    toggleSwitch()
})

// drawing coloring each cell on mousedown
eachCell.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
        // adding a button control
        if (!enable_coloring) {
            return
        }
        cell.style.backgroundColor = cellColor
    })
})

eachCell.forEach((cell) => {
    cell.addEventListener("click", (event) => {
        cell.style.backgroundColor = cellColor
    })
})

// grid toggle function
const grid = document.getElementById('show-grid')
grid.addEventListener('change', (e) => {

    if (grid.checked) {
        eachCell.forEach( e => {
            e.classList.add("border");
        })
    } else {
        eachCell.forEach( e => {
            e.classList.remove("border");
        })
    }
})